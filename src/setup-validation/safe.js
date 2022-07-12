export const safe = test => (value, context) => {
  try {
    return test(value, context)
  } catch {
    return false
  }
}
