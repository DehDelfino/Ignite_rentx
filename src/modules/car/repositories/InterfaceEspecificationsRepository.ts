import { Especification } from "../entities/Especification"


interface ICreateEspecificationDTO {
  name: string,
  description: string
}

interface InterfaceEspecificationsRepository {


  create({ name, description }: ICreateEspecificationDTO): void

  teste_return(): Especification[]

  AlredyExist(name: string): Especification

}

export { InterfaceEspecificationsRepository }