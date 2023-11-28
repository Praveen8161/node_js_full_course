import express from 'express';
import dotenv from 'dotenv';
import { doctorRouter } from './Routers/doctor.js';
import { userRouter } from './Routers/user.js'
import cors from 'cors';
import { isAuthorized } from './Auth/auth.js';

//Initiating a server
const app = express();

//Middlewares
app.use(express.json())
app.use(cors());

//env configuration
dotenv.config();

//Initiating a PORT
const PORT = process.env.PORT;

//Application Routes
app.use('/doctor', isAuthorized, doctorRouter);
app.use('/user', userRouter);


//Listening to a server
app.listen(PORT, () => {
    console.log(`Server is runnig at http://localhost:${PORT}`);
})