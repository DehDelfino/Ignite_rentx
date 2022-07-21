import { AppError } from "../../../../shared/errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let usersRepositoryInMemory: UsersRepositoryInMemory
let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase


describe("Authenticate User", () => {

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)

    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
  })

  it("Should be able to authenticate an user ", async () => {
    const user: ICreateUserDTO = {
      name: "name user test",
      email: "email@test.com",
      password: '1234',
      driver_license: "00589"
    }

    await createUserUseCase.createUser(user)

    const authenticateUSer = await authenticateUserUseCase.execute({ email: user.email, password: user.password })


    expect(authenticateUSer).toHaveProperty('token')
  })

  it("Should not be able to authenticate a nonexistent user ", async () => {


    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "False@test.com",
        password: "1234"
      })

    }).rejects.toBeInstanceOf(AppError)

  })

  it("Should not be able to authenticate an user wich password is invalid",
    () => {

      expect(async () => {
        const user: ICreateUserDTO = {
          name: "name user test",
          email: "email@test.com",
          password: '1234',
          driver_license: "00589"
        }

        await createUserUseCase.createUser(user)

        await authenticateUserUseCase.execute({
          email: user.email,
          password: "invalid password, test"
        })

      }).rejects.toBeInstanceOf(AppError)

    }
  )



})