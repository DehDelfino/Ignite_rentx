import { Router } from "express";
import { CreateCarController } from "../../../../modules/car/useCases/createCar/CreateCarController";

const carsRoutes = Router()


// controllers

const createCarController = new CreateCarController()


carsRoutes.post("/", createCarController.createCar)



export { carsRoutes }