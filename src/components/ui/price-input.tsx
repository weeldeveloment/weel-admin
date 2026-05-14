import * as React from "react"
import { useMaskito } from "@maskito/react"
import { maskitoTransform } from "@maskito/core"
import { maskitoNumberOptionsGenerator } from "@maskito/kit"
import { cn } from "@/lib/utils"

export interface PriceInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  currency?: string
  value?: string
  onChange?: (value: string) => void
}

const PriceInput = React.forwardRef<HTMLInputElement, PriceInputProps>(
  ({ className, currency = "USD", onChange, value, ...props }, forwardedRef) => {
    const options = React.useMemo(
      () =>
        maskitoNumberOptionsGenerator({
          maximumFractionDigits: 0,
          min: 0,
        }),
      []
    )

    const maskitoRef = useMaskito({ options })

    const setRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        maskitoRef(node)
        if (typeof forwardedRef === "function") {
          forwardedRef(node)
        } else if (forwardedRef) {
          forwardedRef.current = node
        }
      },
      [maskitoRef, forwardedRef]
    )

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const raw = e.currentTarget.value.replace(/\D/g, "")
      onChange?.(raw)
    }

    const maskedValue = value ? maskitoTransform(value, options) : ""

    return (
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent pr-12 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={setRef}
          value={maskedValue}
          onInput={handleInput}
          {...props}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          {currency}
        </span>
      </div>
    )
  }
)
PriceInput.displayName = "PriceInput"

export { PriceInput }
