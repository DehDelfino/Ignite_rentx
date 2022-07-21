import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { InterfaceEspecificationsRepository } from "../../repositories/InterfaceEspecificationsRepository"




interface IRequest {
  name: string,
  description: string
}

@injectable()
class CreateEspecificationUseCase {




  constructor(
    @inject("EspecificationsRepository")
    private especificationsRepository: InterfaceEspecificationsRepository
  ) { }


  async execute({ name, description }: IRequest): Promise<void> {


    const especificationAlredyExist = await this.especificationsRepository.AlredyExist(name) // to verify if especification alredy existe, finding by name

    if (especificationAlredyExist) {

      throw new AppError("Especification alredy exist")


    }

    this.especificationsRepository.create({ name, description }) // to create a especification





  }


}


export { CreateEspecificationUseCase }