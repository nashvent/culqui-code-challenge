/* eslint-disable @typescript-eslint/ban-types */
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { luhnCheck } from '../utils';

export const validationPipe = async (schema: new () => {}, requestObject: object) => {
  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  if (errors.length > 0) {
    return errors;
  }
  return true;
};


@ValidatorConstraint({ name: 'customText', async: false })
export class ValidateCardNumber implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return luhnCheck(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Credit card number is invalid!';
  }
}

@ValidatorConstraint({ name: 'customText', async: false })
export class ValidateEmails implements ValidatorConstraintInterface {
  emailsExtension = ['gmail.com', 'hotmail.com', 'yahoo.es'];
  validate(text: string, args: ValidationArguments) {
    for (const email of this.emailsExtension){
      if(text.endsWith(email)){
        return true;
      }
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return `Email is invalid! Email should ends with ${this.emailsExtension.join(', ')}`;
  }
}