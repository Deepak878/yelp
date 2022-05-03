module.exports.isLoggedIn = (req,res,next)=>{

    if(!req.isAuthenticated()){
      req.session.returnTo =req.originalUrl;
      
        //store the url
        req.flash('error', 'You must be Signed in first');
       return res.redirect('/login')
    }
    next();
} 