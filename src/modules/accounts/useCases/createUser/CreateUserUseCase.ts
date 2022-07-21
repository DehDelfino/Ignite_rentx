import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { InterfaceUsersRepository } from "../../repositories/InterfaceUsersRespository"
import { hash } from 'bcryptjs'
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";



@injectable()
export class CreateUserUseCase {


  constructor(

    @inject("usersRepository")
    private usersRepository: InterfaceUsersRepository

  ) { }


  async createUser({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

    const userAlredyExist = await this.usersRepository.findByEmail(email)

    if (userAlredyExist) {
      throw new AppError("User alredy exist")
    }

    const passwordHash = await hash(password, 10)

    await this.usersRepository.create({ name, email, password: passwordHash, driver_license })


  }

}