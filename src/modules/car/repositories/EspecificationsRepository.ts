import { Especification } from "../entities/Especification";
import { InterfaceEspecificationsRepository } from "./InterfaceEspecificationsRepository";



class EspecificationsRepository implements InterfaceEspecificationsRepository {

  private Especifications: Especification[]

  private static INSTANCE: EspecificationsRepository

  private constructor() {
    this.Especifications = []
  }

  static get instance(): EspecificationsRepository {

    if (!EspecificationsRepository.INSTANCE) {
      EspecificationsRepository.INSTANCE = new EspecificationsRepository()
    }

    return EspecificationsRepository.INSTANCE
  }

  create({ name, description }): void {


    const category = new Especification(name, description)

    this.Especifications.push(category)
  }

  teste_return(): Especification[] {


    return this.Especifications
  }

  AlredyExist(name: string): Especification {

    const category = this.Especifications.find(category => name === category.getName())
    return category
  }


}

export { EspecificationsRepository }