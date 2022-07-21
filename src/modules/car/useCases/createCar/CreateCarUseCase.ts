import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { InterfaceCarsRepository } from "../../repositories/InterfaceCarsRepository";

export interface IRequest {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  category_id: string
}


@injectable()
export class CreateCarUseCase {

  constructor(
    @inject("CarsRepository")
    private carsRepository: InterfaceCarsRepository
  ) { }


  async execute({ name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id }: IRequest): Promise<Car> {

    const licensePlanteAlredyExist = await this.carsRepository.findByLicensePlate(license_plate)

    if (licensePlanteAlredyExist) {
      throw new AppError("License plate alredy exist!!")
    }


    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    })

    return car
  }
}