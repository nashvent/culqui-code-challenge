import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
      }
    const status = err.status || 500;
    res.status(status).send({ status: status, message: err.message })
}

export default errorHandler