import { Especification } from "../../entities/Especification";
import { EspecificationsRepository } from "../../repositories/EspecificationsRepository";


export class ListEspecificationsUseCase {


  constructor(private especificationRepository: EspecificationsRepository) {

  }

  execute(): Especification[] {



    return this.especificationRepository.teste_return()
  }


}