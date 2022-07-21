import { Especification } from "../entities/Especification"


interface ICreateEspecificationDTO {
  name: string,
  description: string
}

interface InterfaceEspecificationsRepository {


  create({ name, description }: ICreateEspecificationDTO): Promise<void>

  teste_return(): Promise<Especification[]>

  AlredyExist(name: string): Promise<Especification>

}

export { InterfaceEspecificationsRepository }