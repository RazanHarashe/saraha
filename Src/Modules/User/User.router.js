import { Router } from 'express'
import * as usreController from './Controller/user.controller.js';
import  {auth} from '../../Middleware/Auth.Middleware.js';
import fileUpload, { fileValidation } from '../../Services/cloudMulter.js';
const router = Router();

router.get('/',fileUpload(fileValidation.image).single('image'),auth,usreController.profile);
router.patch('/cover',fileUpload(fileValidation.image).array('image',5),auth,usreController.coverPic);
export default router;  