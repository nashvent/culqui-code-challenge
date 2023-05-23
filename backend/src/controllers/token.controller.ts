import { RequestHandler, Request, Response } from 'express'
import {createToken, getToken} from '../services/token.service'
import { CreateTokenDto, ResponseTokenDto } from "../dto/token.dto";
import { plainToClass } from 'class-transformer';

export const create: RequestHandler = async(req: Request, res: Response) => {
    const dataDto = plainToClass(CreateTokenDto, req.body);
    const token = await createToken(dataDto);
    res.json({token: token.get('code')});
}

export const get: RequestHandler = async(req: Request, res: Response) => {
    const { authorization } = res.locals;
    const token = await getToken(authorization);
    console.log('token', token);
    const responseTokenDto = plainToClass(ResponseTokenDto, token, { excludeExtraneousValues: true })
    console.log('responseTokenDto', responseTokenDto);
    res.json(responseTokenDto);
}