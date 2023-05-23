import { RequestHandler } from "express";
import ApplicationError from "../helpers/exceptions";
import config from "../config";


const requireAuthorization = (req, res, next): RequestHandler => {
    const { authorization } = req.headers;
    if (!authorization) {
        return next(new ApplicationError('Authorization in header is missing.', 401));
    }
    if(!authorization.startsWith('pk_test_')) {
        return next(new ApplicationError('The authorization token must start with pk_test_', 401));
    }
    if(authorization.length !== 24) {
        return next(new ApplicationError('The authorization token must be 24 characters long.', 401));
    }

    if(authorization !== config.defaultMarketAuthorization){
        return next(new ApplicationError("The authorization token doesn't exists.", 401));
    }
    return next()
}

export default requireAuthorization