import express from 'express'
import { create, get } from '../controllers/token.controller'
import asyncHandler from "express-async-handler"
import validationMiddleware from "../middleware/validation";
import marketAuthorization from '../middleware/marketAuthorization';
import tokenAuthorization from '../middleware/tokenAuthorization';
import { CreateTokenDto } from "../dto/token.dto";
const routes = express.Router()

routes.post(
    '/',
    marketAuthorization, 
    validationMiddleware(CreateTokenDto),  
    asyncHandler(create))
routes.get(
    '/', 
    tokenAuthorization, 
    asyncHandler(get))

export default routes