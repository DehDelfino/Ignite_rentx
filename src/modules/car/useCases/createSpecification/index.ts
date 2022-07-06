import { EspecificationsRepository } from "../../repositories/EspecificationsRepository";
import { CreateCateogoryUseCase } from "../createCategory/CreateCateogoryUseCase";
import { CreateEspecificationController } from "./CreateEspecificationController";
import { CreateEspecificationUseCase } from "./CreateEspecificationUseCase";

export const especificationsRepository = EspecificationsRepository.instance
export const createEspecificationUseCase = new CreateEspecificationUseCase(especificationsRepository)
export const createEspecificationController = new CreateEspecificationController(createEspecificationUseCase)