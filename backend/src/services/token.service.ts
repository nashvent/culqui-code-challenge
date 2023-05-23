import { TokenModel } from '../models/token.model';
import { generateRandomString } from '../utils';
import { CreateTokenDto } from "../dto/token.dto";

export const createToken = async (data: CreateTokenDto): Promise<typeof TokenModel | any> => {
    const token = await TokenModel.create({
        code: `pk_test_${generateRandomString(16)}`,
        cardNumber: data.cardNumber,
        cvv: data.cvv,
        expirationMonth: data.expirationMonth,
        expirationYear: data.expirationYear,
        email: data.email
    });
    return token;
}

export const getToken = async (tokenCode: string): Promise<typeof TokenModel> => {
    return await TokenModel.findOne({code: tokenCode});
}
