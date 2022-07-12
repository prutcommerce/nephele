import { moment } from 'src/deps'
import { safe } from 'src/setup-validation/safe'

const validate = value => moment(value, moment.ISO_8601).isValid()

const transform = value => validate(value) ? moment(value, moment.ISO_8601).toISOString() : value

export const iso = function () {
  return this
    .test('iso-structure', 'invalid structure', safe(validate))
    .transform(transform)
}
