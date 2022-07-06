import { InterfaceEspecificationsRepository } from "../../repositories/InterfaceEspecificationsRepository"




interface IRequest{
  name:string,
  description:string
}

class CreateEspecificationUseCase{


  private especificationsRepository: InterfaceEspecificationsRepository

  constructor(especificationsRepository:InterfaceEspecificationsRepository){
    this.especificationsRepository = especificationsRepository
  }


  execute({name, description}:IRequest){


    const especificationAlredyExist = this.especificationsRepository.AlredyExist(name) // to verify if especification alredy existe, finding by name

    if(especificationAlredyExist){
  
      throw new Error("Especification alredy exist")
      
    
    }
  
    this.especificationsRepository.create({name, description}) // to create a especification





  }


}


export {CreateEspecificationUseCase}