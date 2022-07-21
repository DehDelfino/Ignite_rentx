import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { InterfaceUsersRepository } from "../../repositories/InterfaceUsersRespository";

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {


  constructor(
    @inject("usersRepository")
    private usersRepository: InterfaceUsersRepository) { }


  async execute({ password, email }: IRequest): Promise<IResponse> {

    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Email or password incorret")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Email or password incorret")
    }

    const token = sign({}, "7d648b0d4329a0ace1623a1f2c8e617c2d7e571c", {
      subject: user.id,

      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return tokenReturn

  }

}