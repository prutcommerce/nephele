import { nephele } from 'src'
import { lodash } from 'src/deps'
import { safe } from 'src/setup-validation/safe'

const validate = value => {
  if (lodash.isNil(value)) return true

  const decoded = nephele.transformId.decode(value)
  return lodash.isInteger(decoded.id) && !lodash.isEmpty(decoded.model)
}

export const identifier = function () {
  return this.test('id-structure', 'invalid structure', safe(validate))
}
