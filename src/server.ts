process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import session from 'express-session';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

declare module 'express-session' {
  export interface SessionData {
    userid: any;
  }
}

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
