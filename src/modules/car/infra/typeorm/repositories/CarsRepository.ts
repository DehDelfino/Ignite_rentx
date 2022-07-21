import { injectable } from "tsyringe"
import { getRepository, Repository } from "typeorm"
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO"
import { InterfaceCarsRepository } from "../../../repositories/InterfaceCarsRepository"
import { Car } from "../entities/Car"


export class CarsRepository implements InterfaceCarsRepository {

  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }


  async create({
    name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate }: ICreateCarDTO): Promise<Car> {


    const car = this.repository.create({ name, brand, category_id, daily_rate, description, fine_amount: fine_amount, license_plate })

    await this.repository.save(car)

    return car
  }

  async returnAllCars(): Promise<Car[]> {
    return
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {

    return await this.repository.findOne(license_plate)
  }


}