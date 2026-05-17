export const formatUzbekPhoneNumber = (phone?: string): string => {
  if (!phone) return ''

  const digitsOnly = phone.replace(/[^\d]/g, '')
  if (!digitsOnly) return ''

  if (digitsOnly.startsWith('998')) {
    return `+${digitsOnly}`
  }

  if (digitsOnly.startsWith('99')) {
    return `+${digitsOnly}`
  }

  if (digitsOnly.length === 9) {
    return `+998${digitsOnly}`
  }

  return `+${digitsOnly}`
}

export const getPhoneHref = (phone?: string): string => {
  const formatted = formatUzbekPhoneNumber(phone)
  return formatted ? `tel:${formatted}` : ''
}
