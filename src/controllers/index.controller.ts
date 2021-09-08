import path from 'path';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      // res.sendStatus(200);
      const session = req.session;
      if (session.userid) {
        res.sendFile('public/index.html', { root: path.join(__dirname, '..') });
      } else {
        res.sendFile('public/login.html', { root: path.join(__dirname, '..') });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
