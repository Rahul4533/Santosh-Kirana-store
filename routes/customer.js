import express from 'express';
import { DeleteUser, UpdateUser, UserData, customer } from '../controller/userctrl.js';

const router=express.Router();



router.post('/register',customer);
router.get('/trans',UserData);
router.post('/delete',DeleteUser);
router.post('/update',UpdateUser);
export default router;