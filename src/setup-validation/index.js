import { iso } from 'src/setup-validation/iso'
import { safe } from 'src/setup-validation/safe'
import { identifier } from 'src/setup-validation/identifier'

/**
 * @param {{addMethod, string, date}} instance
 */
export const setupValidation = instance => {
  instance.addMethod(instance.string, 'identifier', identifier)
  instance.addMethod(instance.string, 'iso', iso)
}

setupValidation.safe = safe
