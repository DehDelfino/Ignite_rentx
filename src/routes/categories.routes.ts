import { Router } from 'express'
import Multer from 'multer'




import createCategoryController from '../modules/car/useCases/createCategory'
import { importCategoryController } from '../modules/car/useCases/importCategory'
import { listCategoriesController } from '../modules/car/useCases/listCategories'


const categoriesRoutes = Router()
const upload = Multer({
  dest: "./tmp"
})


categoriesRoutes.get('/', (req, res) => {

  return listCategoriesController.list(req, res)

})

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController().createCategory(req, res)
})


categoriesRoutes.post("/import", upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)


})

export { categoriesRoutes }