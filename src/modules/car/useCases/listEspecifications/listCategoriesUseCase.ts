import { inject, injectable } from "tsyringe";
import { Especification } from "../../infra/typeorm/entities/Especification";
import { EspecificationsRepository } from "../../infra/typeorm/repositories/EspecificationsRepository";


@injectable()
export class ListEspecificationsUseCase {


  constructor(
    @inject("EspecificationsRepository")
    private especificationRepository: EspecificationsRepository
  ) { }

  async execute(): Promise<Especification[]> {



    return await this.especificationRepository.teste_return()
  }


}