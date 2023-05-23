import {
  Validate,
  Length,
  IsEmail,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { Transform, Expose, Exclude } from 'class-transformer';
import { ValidateCardNumber, ValidateEmails } from '../helpers/validation';

export class CreateTokenDto {  
  @IsNotEmpty()
  @Validate(ValidateCardNumber)
  @Length(13, 16)
  cardNumber: string;

  @IsNotEmpty()
  @Length(3, 4)
  cvv: string;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @Min(1)
  @Max(12)
  expirationMonth: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @Min(new Date().getFullYear())
  @Max((new Date().getFullYear()) + 5)
  expirationYear: number;

  @IsNotEmpty()
  @IsEmail()
  @Length(5, 100)
  @Validate(ValidateEmails)
  email: string;
}

export class ResponseTokenDto {
  @Expose()
  cardNumber: string;

  @Exclude()
  cvv: string;

  @Expose()
  expirationMonth: number;

  @Expose()
  expirationYear: number;

  @Expose()
  email: string;
}