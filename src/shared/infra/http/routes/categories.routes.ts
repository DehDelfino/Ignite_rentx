import { Router } from 'express'
import Multer from 'multer'
import { CreateCategoryController } from '../../../../modules/car/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../../../../modules/car/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '../../../../modules/car/useCases/listCategories/listCategoriesController'




const categoriesRoutes = Router()
const upload = Multer({
  dest: "./tmp"
})

//controllers 

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()


//routes


categoriesRoutes.get('/', listCategoriesController.list)

categoriesRoutes.post('/', createCategoryController.createCategory)


categoriesRoutes.post("/import", upload.single('file'), importCategoryController.handle)

export { categoriesRoutes }