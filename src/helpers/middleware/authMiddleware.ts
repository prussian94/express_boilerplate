import { NextFunction, Response } from 'express'
import { CustomRequest } from '@models/request/CustomRequest'
import AuthType from '@enums/auth/AuthType'

export default function authMiddleware(authType: AuthType) {
  return async function (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      switch (authType) {
        case AuthType.USER_AUTH:
          return userMiddleware(req, res, next)
        case AuthType.ADMIN_AUTH:
          return adminMiddleware(req, res, next)
        default:
          return noAuthMiddleware(req, res, next)
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

async function noAuthMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  next()
}

async function userMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  // Implement user middleware

  next()
}

async function adminMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  // Implement admin middleware
  next()
}
