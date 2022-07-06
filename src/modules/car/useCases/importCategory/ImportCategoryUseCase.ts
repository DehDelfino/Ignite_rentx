import fs from 'fs'
// import {parse} from 'csv-parse'
import { parse } from "csv-parse"
import { CategoriesRepository } from "../../repositories/CategoriesRepository";


interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {

  constructor(private categoriesRespository: CategoriesRepository) {

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

      this.categoriesRespository.create({ name, description })
    })





  }

}