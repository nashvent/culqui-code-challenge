import { RequestHandler } from "express";
import config from "../config";
import { TokenModel } from "../models/token.model";
import ApplicationError from "../helpers/exceptions";

const requireAuthorization = async (req, res, next): Promise<RequestHandler> => {
    const { authorization } = req.headers;
    if (!authorization) {
        return next(new ApplicationError('Authorization in header is missing.', 401));
    }

    const token = await TokenModel.findOne({code: authorization});
    if(!token){
        return next(new ApplicationError('Token not found', 401));
    }
    const d1 = token.get('createdAt').getTime();
    const d2 = new Date().getTime();
    const diff = d2 - d1;
    const minutes = diff/60000;
    if(minutes > config.tokenLifetime){
        return next(new ApplicationError(`Token expired ${(minutes - config.tokenLifetime).toFixed(0)} minutes ago`, 403));
    }
    res.locals.authorization = authorization;
    return next()
}

export default requireAuthorization