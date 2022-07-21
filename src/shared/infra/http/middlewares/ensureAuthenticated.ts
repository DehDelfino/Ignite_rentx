import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { AppError } from '../../../errors/AppError'

interface IPlayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response,
  next: NextFunction) {


  const authHeader = request.headers.authorization


  if (!authHeader) {

    throw new AppError("Token missing", 401)

  }

  //using [, token], the value of authHeader[0] is ignorated 
  const [, token] = authHeader.split(" ")



  try {

    //to verify token, is necesary the hash5 used to create this same token (in this case the hash5 is in the authenticateUserUseCase) 

    //in this case { sub:user_id } the : was usede to rename variable
    const { sub: user_id } = verify(token, "7d648b0d4329a0ace1623a1f2c8e617c2d7e571c") as IPlayload

    const usersRepositories = new UsersRepository()

    const user = await usersRepositories.findById(user_id)

    if (!user) {
      throw new AppError("User does not exist", 401)
    }




    request.user = { id: user_id }



    next()

  } catch (error) {
    throw new AppError("Invalid token", 401)
  }
}