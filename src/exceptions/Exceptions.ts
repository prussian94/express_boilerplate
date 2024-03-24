import { CustomError } from '../models/exception/Exception'

export default {
  //400
  badRequest: new CustomError({
    message: 'Bad request.',
    code: 40001,
    statusCode: 400,
  }),
  //401
  invalidCredentials: new CustomError({
    message: 'Invalid credentials.',
    code: 40101,
    statusCode: 401,
  }),
  //404
  notFound: new CustomError({
    message: 'Not found.',
    code: 40401,
    statusCode: 404,
  }),
  //500
  internalServerError: new CustomError({
    message: 'Internal server error.',
    code: 50001,
    statusCode: 500,
  }),
  //503
  serviceUnavailable: new CustomError({
    message: 'Service unavailable.',
    code: 50301,
    statusCode: 503,
  }),
}
