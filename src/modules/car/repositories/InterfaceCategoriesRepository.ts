import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO"
import { Category } from "../infra/typeorm/entities/Category"





interface InterfaceCategoriesRepository {


  create({ name, description }: ICreateCategoryDTO): Promise<void>

  teste_return(): Promise<Category[]>

  AlredyExist(name: string): Promise<Category>

}

export { InterfaceCategoriesRepository }