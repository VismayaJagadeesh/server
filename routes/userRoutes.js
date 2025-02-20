import express from 'express'
import {registerUser, loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middleWares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits',userAuth, userCredits)

export default userRouter

// localhost:4000/api/user/register - it executes registerUser function
// localhost:4000/api/user/loginUser - it executes loginUser function



