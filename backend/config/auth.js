const jwt = require ('jsonwebtoken');
const User = require('../models/User');


//authication middleware
exports.authMiddleware = (roles=[])=>{
    //convert roles to array if it's a single role
    if (typeof roles ==='string'){
        roles = [roles];
    }

    return (req, res,next)=>{
        const token = req.header('Authorization')?.split(' ')[1];

        if(!token){
            return res.status(401).json({msg:'no token , Authorization denied'});

        }
        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            req.user = decoded.user;

            //check if user's role is Authorization
            if(roles.length && !roles.includes(req.user.role)){
                return res.status(403).json({msg: 'Aceess denied'});
            }

            next();
        } catch (err) {
            res.status(401).json({msg: 'token is not valid'});

        }
    };
};

// middleware to verify if user is authenticated
exports.isAuthenticated = (req,res,next)=>{
    const token = req.header('Authorization')?.split('')[1];

    if(!token){
        return res.status(401).json({msg: 'no token, Authorization denied'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'});
        
    }
};

// middleware to verify if the user has a specific role
exports.isAuthorized = (role)=>(req,res,next)=>{
    if (req.User && req.user.role === role){
        next();

    } else {
        res.status(403).json({msg: 'Access denied'});
    }
};