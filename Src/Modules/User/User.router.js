import express from 'express'
import * as usreController from './Controller/user.controller.js';
import  {auth} from '../../Middleware/Auth.Middleware.js';
const app = express();

app.get('/',auth,usreController.profile);

export default app;