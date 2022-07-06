import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCateogoryUseCase } from "./CreateCateogoryUseCase";





export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository()
  const createCategoryUseCase = new CreateCateogoryUseCase(categoriesRepository)
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)

  return createCategoryController
}