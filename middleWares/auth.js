import jwt from 'jsonwebtoken'


const userAuth = async(req, res, next)=>{
    const {token} = req.headers;

    if(!token){
        return res.json({success:false, message:'Not Authorized. Login again'});

    }

    try {
        const tokenDecode = jwt.verify(token, process.nextTick.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success:false, message:'Not Authorized. Login Agian.'});

        }
        next();
        
    } catch (error) {
        res.json({success:false, message: error.message});
        
    }

}

export default userAuth;