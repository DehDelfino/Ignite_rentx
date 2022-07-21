import { AppError } from "../../../../shared/errors/AppError"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCateogoryUseCase } from "./CreateCateogoryUseCase"

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory
let createCategoryUseCase: CreateCateogoryUseCase

describe("Create category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCateogoryUseCase(categoriesRepositoryInMemory)
  })

  it("Should be able to create a new category", async () => {
    const category = {
      name: "New Category",
      description: "Description of category"
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })


    const categoryCreated = await categoriesRepositoryInMemory.AlredyExist(category.name)


    expect(categoryCreated).toHaveProperty("id")

  })

  it("Should not be able to create a new category with name alredy exist", async () => {


    expect(async () => {

      const category = {
        name: "New Category",
        description: "Description of category"
      }

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })

    }).rejects.toBeInstanceOf(AppError)




  })

})


