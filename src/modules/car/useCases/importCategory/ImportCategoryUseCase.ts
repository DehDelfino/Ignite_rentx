import fs from 'fs'
// import {parse} from 'csv-parse'
import { parse } from "csv-parse"
import { inject, injectable } from 'tsyringe';
import { CategoriesRepository } from '../../infra/typeorm/repositories/CategoriesRepository';


interface IImportCategory {
  name: string
  description: string
}

@injectable()
export class ImportCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRespository: CategoriesRepository) {

  }


  loadFile(file: Express.Multer.File): Promise<IImportCategory[]> {

    return new Promise((resolve, reject) => {

      const categories: IImportCategory[] = []


      const stream = fs.createReadStream(file.path)
      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {



        const [name, description] = line
        categories.push({
          name,
          description
        })

      })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (error) => reject(error))


    })

  }

  async execute(file: Express.Multer.File): Promise<void> {

    const categories = await this.loadFile(file)



    categories.map(async (category) => {

      const { name, description } = category

      const existCategory = await this.categoriesRespository.AlredyExist(name)


      if (!existCategory) {

        this.categoriesRespository.create({ name, description })
      }

    })





  }

}