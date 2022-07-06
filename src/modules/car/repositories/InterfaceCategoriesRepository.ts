import { Category } from "../entities/Category"



interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface InterfaceCategoriesRepository {


  create({ name, description }: ICreateCategoryDTO): Promise<void>

  teste_return(): Promise<Category[]>

  AlredyExist(name: string): Promise<Category>

}

export { InterfaceCategoriesRepository }