import { ICreateCarDTO } from "../dtos/ICreateCarDTO"
import { Car } from "../infra/typeorm/entities/Car"





export interface InterfaceCarsRepository {


  create(date: ICreateCarDTO): Promise<Car>

  returnAllCars(): Promise<Car[]>

  findByLicensePlate(license_plate: string): Promise<Car>



}
