import { AppError } from "../../../../shared/errors/AppError"
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase, IRequest } from "./CreateCarUseCase"

let carsRepositoryInMemory: CarsRepositoryInMemory
let createCarUseCase: CreateCarUseCase

describe("Create car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it("Shoul be able to creat a new car", async () => {



    const car = await createCarUseCase.execute({
      name: "car name test",
      description: "description car test",
      daily_rate: 250,
      license_plate: "GZN-6399",
      fine_amount: 10212241,
      brand: "brand test",
      category_id: "category id test"

    })




    expect(car).toHaveProperty("id")


  })


  it("Should not be able to create a new car if license plate alredy exist", () => {


    expect(async () => {

      const car1: IRequest = {
        name: "car name test",
        description: "description car test",
        daily_rate: 250,
        license_plate: "GZN-6399",
        fine_amount: 10212241,
        brand: "brand test",
        category_id: "category id test"

      }

      const car2: IRequest = {
        name: "car name2 test2",
        description: "description car test2",
        daily_rate: 2540,
        license_plate: "GZN-6399",
        fine_amount: 102122,
        brand: "brand test2",
        category_id: "category id test2"

      }

      await createCarUseCase.execute(car1)
      await createCarUseCase.execute(car2)

    }).rejects.toBeInstanceOf(AppError)
  })

  it("Should be able to create a new car with available true by default ", async () => {

    const car = await createCarUseCase.execute({
      name: "car name test",
      description: "description car test",
      daily_rate: 250,
      license_plate: "GZN-6399",
      fine_amount: 10212241,
      brand: "brand test",
      category_id: "category id test"
    })



    expect(car.available).toBe(true)
  })


})