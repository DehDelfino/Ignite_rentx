import { Category } from "../../infra/typeorm/entities/Category";
import { InterfaceCategoriesRepository } from "../InterfaceCategoriesRepository";

interface ICreateCategoryDTO {
  name: string
  description: string
}

export class CategoriesRepositoryInMemory implements InterfaceCategoriesRepository {

  categories: Category[] = []


  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category(name, description)

    this.categories.push(category)
  }
  async teste_return(): Promise<Category[]> {
    return this.categories
  }
  async AlredyExist(name: string): Promise<Category> {
    const categoryExist = this.categories.find(category => category.name === name)
    return categoryExist
  }

}