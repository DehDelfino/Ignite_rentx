import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";


export const authentiRoutes = Router()


// constollers

const authenticateUserController = new AuthenticateUserController()


authentiRoutes.post("/sessions", authenticateUserController.handle)