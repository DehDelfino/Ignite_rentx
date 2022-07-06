import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";



const categoriesRespository = null
export const importCategoryUseCase = new ImportCategoryUseCase(categoriesRespository)
export const importCategoryController = new ImportCategoryController(importCategoryUseCase)