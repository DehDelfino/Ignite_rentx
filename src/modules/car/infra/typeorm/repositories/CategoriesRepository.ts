import { getRepository, Repository } from "typeorm";
import { InterfaceCategoriesRepository } from "../../../repositories/InterfaceCategoriesRepository";
import { Category } from "../entities/Category";


interface ICreateCategoryDTO {
  name: string
  description: string
}

class CategoriesRepository implements InterfaceCategoriesRepository {



  private repository: Repository<Category>


  constructor() {
    this.repository = getRepository(Category)
  }





  async create({ name, description }: ICreateCategoryDTO): Promise<void> {


    const category = this.repository.create({
      name,
      description

    })

    await this.repository.save(category)
  }

  async teste_return(): Promise<Category[]> {


    const categories = await this.repository.find()

    return categories
  }

  async AlredyExist(name: string): Promise<Category> {

    const category = await this.repository.findOne({ name })
    return category
  }


}

export { CategoriesRepository }