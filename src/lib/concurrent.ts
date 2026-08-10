/**
 * Run async work over a list a few items at a time.
 *
 * The alternative people reach for is a `for` loop with an `await` inside,
 * which turns ten uploads into ten round trips end to end — on a slow
 * connection that is the difference between "saving…" for one second and for
 * ten. Firing all of them at once is not the fix either: a browser only opens
 * about six connections per host, so the rest queue anyway while large files
 * compete for the same pipe.
 */

/** Browsers allow roughly six connections per host; leave headroom for the
 * page's other requests. */
const DEFAULT_LIMIT = 4;

export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  worker: (item: T, index: number) => Promise<R>,
  limit: number = DEFAULT_LIMIT,
): Promise<R[]> {
  if (items.length === 0) return [];

  const results = new Array<R>(items.length);
  let cursor = 0;

  // Each runner pulls the next index until the list is exhausted, so a slow
  // item holds up only its own lane rather than a whole batch.
  const runners = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor++;
        results[index] = await worker(items[index], index);
      }
    },
  );

  await Promise.all(runners);
  return results;
}
