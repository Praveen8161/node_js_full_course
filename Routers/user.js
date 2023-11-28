import express from 'express';
import bcrypt from 'bcrypt';
import { getUser, registerUser } from '../controllers/user.js';
import { generateToken } from '../Auth/auth.js';

const router = express.Router();

//SignUp
router.post('/signup', async (req,res) => {
    try{
        if(Object.keys(req.body).length < 1 ){
            return res.status(400).json({Error:'Invalid Request'})
        }
        //Generate Salt Value
        const salt = await bcrypt.genSalt(10);
        //Check if the user already registered
        const checkUser = await getUser(req.body.email);
        if(!checkUser){
            //Hashing Password
            const hashedPass = await bcrypt.hash(req.body.password, salt);

            const encryptUser = { ...req.body, password:hashedPass }
            //Adding New User
            const user = await registerUser(encryptUser);

            if(!user.acknowledged) return res.status(400).json({error:'Error Adding Data'})
            //On Successful Add
            return res.status(201).json({
                message: 'Data Added Successfully',
                data:user
            });
        }

        //If user Exist before
        return res.status(400).json({error:'User Already Exist'})

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error', errorMessage: err});
    }
})

//Login
router.post('/login', async (req,res) => {
    try{

        if(Object.keys(req.body).length < 1){

            return res.status(400).json({error:'Invalid Request'});
        }
        //Check if Email Exist
        const checkUser = await getUser(req.body.email);
        if(!checkUser){
            return res.status(404).json({error:'Invalid Email ID'});
        }
        //check if Password Exist
        const validPass = await bcrypt.compare(
            req.body.password,
            checkUser.password
        )

        if(!validPass) return res.status(400).json({error:'Invalid Password'})
        
        const token = generateToken(checkUser._id);
        return res.status(200).json({message:'Login Successful',token})
        
    }catch(err){
        res.status(500).json({error:'Internal Server Error', errorMessage:err});
    }
})

export const userRouter = router;