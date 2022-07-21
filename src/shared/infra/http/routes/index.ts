import { Router } from "express";
import { authentiRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { especificationRoutes } from "./especifications.routes";
import { usersRoutes } from "./users.routes";

export const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/especifications', especificationRoutes)
router.use('/users', usersRoutes)
router.use('/cars', carsRoutes)
router.use(authentiRoutes)