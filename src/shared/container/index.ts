import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { InterfaceUsersRepository } from '../../modules/accounts/repositories/InterfaceUsersRespository'
import { CarsRepository } from '../../modules/car/infra/typeorm/repositories/CarsRepository'
import { CategoriesRepository } from '../../modules/car/infra/typeorm/repositories/CategoriesRepository'
import { EspecificationsRepository } from '../../modules/car/infra/typeorm/repositories/EspecificationsRepository'
import { InterfaceCarsRepository } from '../../modules/car/repositories/InterfaceCarsRepository'
import { InterfaceCategoriesRepository } from '../../modules/car/repositories/InterfaceCategoriesRepository'
import { InterfaceEspecificationsRepository } from '../../modules/car/repositories/InterfaceEspecificationsRepository'



container.registerSingleton<InterfaceEspecificationsRepository>(
  "EspecificationsRepository",
  EspecificationsRepository
)


container.registerSingleton<InterfaceCategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<InterfaceUsersRepository>(
  "usersRepository",
  UsersRepository
)

container.registerSingleton<InterfaceCarsRepository>(
  "CarsRepository",
  CarsRepository
)

