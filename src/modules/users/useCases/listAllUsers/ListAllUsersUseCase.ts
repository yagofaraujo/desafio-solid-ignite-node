import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Can not show user list from a non-existent user!");
    }

    if (!user.admin) {
      throw new Error("You need to be an admin to list all users!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
