import { EspecificationsRepository } from "../../repositories/EspecificationsRepository";
import { ListEspecificationsUseCase } from "./listCategoriesUseCase";
import { ListEspecificationsController } from "./listEspecificationsController";


const especificationRepository = EspecificationsRepository.instance
export const listEspecificationUseCase = new ListEspecificationsUseCase(especificationRepository)
export const listEspecificationsController = new ListEspecificationsController(listEspecificationUseCase)