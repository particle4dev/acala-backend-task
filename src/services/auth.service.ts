import bcrypt from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class AuthService {
  public users = userModel;

  public async login(userData: CreateUserDto): Promise<{ findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    const findUser: User = this.users[0];

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    return { findUser };
  }
}

export default AuthService;
