import { inject, injectable } from "tsyringe"
import { deleteFile } from "../../../../utils/file"
import { InterfaceUsersRepository } from "../../repositories/InterfaceUsersRespository"

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
export class UpdateUserAvatarUseCase {

  constructor(

    @inject('usersRepository')
    private usersRepository: InterfaceUsersRepository
  ) { }


  async execute({ user_id, avatar_file }: IRequest): Promise<void> {

    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) {

      await deleteFile(`./tmp/avatar/${user.avatar}`)

    }


    user.avatar = avatar_file

    this.usersRepository.create(user)

  }






}