import {Router} from 'express'
import { createEspecificationController } from '../modules/car/useCases/createSpecification'
import { listEspecificationsController } from '../modules/car/useCases/listEspecifications'

const especificationRoutes = Router()



especificationRoutes.get("/",(req,res)=>{

  listEspecificationsController.list(req,res)
})

especificationRoutes.post('/', (req,res)=>{
  return createEspecificationController.createEspecification(req,res)
  
})


export {especificationRoutes}