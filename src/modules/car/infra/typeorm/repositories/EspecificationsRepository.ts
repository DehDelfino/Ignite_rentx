import { getRepository, Repository } from "typeorm";
import { InterfaceEspecificationsRepository } from "../../../repositories/InterfaceEspecificationsRepository";
import { Especification } from "../entities/Especification";



class EspecificationsRepository implements InterfaceEspecificationsRepository {

  private Especifications: Repository<Especification>



  constructor() {
    this.Especifications = getRepository(Especification)
  }



  async create({ name, description }): Promise<void> {


    const specification = this.Especifications.create({
      name,
      description
    })

    await this.Especifications.save(specification)
  }

  async teste_return(): Promise<Especification[]> {

    const specifications = await this.Especifications.find()
    return specifications
  }

  async AlredyExist(name: string): Promise<Especification> {

    const specification = await this.Especifications.findOne({ name })
    return specification
  }


}

export { EspecificationsRepository }