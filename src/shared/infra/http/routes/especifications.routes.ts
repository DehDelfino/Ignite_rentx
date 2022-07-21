import { Router } from 'express'
import { CreateEspecificationController } from '../../../../modules/car/useCases/createSpecification/CreateEspecificationController'
import { ListEspecificationsController } from '../../../../modules/car/useCases/listEspecifications/listEspecificationsController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const especificationRoutes = Router()


//controllers

const listEspecificationsController = new ListEspecificationsController()
const createEspecificationController = new CreateEspecificationController()


//routes

especificationRoutes.use(ensureAuthenticated)

especificationRoutes.get("/", listEspecificationsController.list)

especificationRoutes.post('/', createEspecificationController.createEspecification)


export { especificationRoutes }