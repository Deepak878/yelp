module.exports.isLoggedIn = (req,res,next)=>{
console.log(req.user);
    if(!req.isAuthenticated()){
      req.session.returnTo =req.originalUrl;
      
        //store the url
        req.flash('error', 'You must be Signed in first');
       return res.redirect('/login')
    }
    next();
} 