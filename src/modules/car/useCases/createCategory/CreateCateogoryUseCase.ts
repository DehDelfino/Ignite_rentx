import { InterfaceCategoriesRepository } from "../../repositories/InterfaceCategoriesRepository"
import { InterfaceEspecificationsRepository } from "../../repositories/InterfaceEspecificationsRepository"




interface IRequest{
  name:string,
  description:string
}

class CreateCateogoryUseCase{


  private categoriesRepository: InterfaceCategoriesRepository

  constructor(CategoriesRepository:InterfaceCategoriesRepository){
    this.categoriesRepository = CategoriesRepository
  }


  execute({name, description}:IRequest){


    const gategoryAlredyExist = this.categoriesRepository.AlredyExist(name) // to verify if category alredy existe, finding by name

    if(gategoryAlredyExist){
  
      throw new Error("Category alredy exist")
      
    
    }
  
    const category = this.categoriesRepository.create({name, description}) // to create a category

    return category



  }


}


export {CreateCateogoryUseCase}