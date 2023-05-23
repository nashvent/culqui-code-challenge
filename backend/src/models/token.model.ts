import { Document, Schema, model } from 'mongoose';

export interface IToken extends Document {
  code: string;
  cardNumber: string;
  cvv: string;
  expirationMonth: string;
  expirationYear: string;
  email: string;
}

export const TokenSchema = new Schema<IToken>({
  code: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  },
  expirationMonth: {
    type: String,
    required: true
  },
  expirationYear: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

export const TokenModel = model<IToken>("Token", TokenSchema);