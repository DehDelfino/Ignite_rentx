import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";







export interface InterfaceUsersRepository {

  create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void>

  findByEmail(email: string): Promise<User>

  findById(id: string): Promise<User>



}