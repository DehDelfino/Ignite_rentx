import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { InterfaceCarsRepository } from "../InterfaceCarsRepository";


export class CarsRepositoryInMemory implements InterfaceCarsRepository {


  cars: Car[] = []

  async create(date: ICreateCarDTO): Promise<Car> {
    const car = new Car()
    Object.assign(car, date)

    this.cars.push(car)

    return car
  }

  async returnAllCars(): Promise<Car[]> {
    return this.cars
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {

    return this.cars.find(car => car.license_plate === license_plate)
  }


}