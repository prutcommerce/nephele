export const safe = test => value => {
  try {
    return test(value)
  } catch {
    return false
  }
}
