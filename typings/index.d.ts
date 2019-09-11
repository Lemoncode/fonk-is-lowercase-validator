import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isLowercase {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
