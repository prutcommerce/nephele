export const encode = decoded => {
  const buffer = Buffer.from(`${decoded.model}:${decoded.id}`)
  return buffer.toString('base64')
}
