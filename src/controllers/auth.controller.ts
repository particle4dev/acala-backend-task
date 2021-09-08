import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const { findUser } = await this.authService.login(userData);
      const session = req.session;
      session.userid = findUser.id;
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
