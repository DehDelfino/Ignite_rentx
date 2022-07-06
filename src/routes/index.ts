import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { especificationRoutes } from "./especifications.routes";

export const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/especifications', especificationRoutes)