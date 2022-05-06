
const express = require('express')
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')
const passport = require('passport');

router.get('/register' ,users.renderRegister)

router.post('/register',catchAsync(users.register ))
router.get('/login', users.renderLogin)

router.post('/login', passport.authenticate('local',{failureFlash:true , failureRedirect:'/login'}),users.Login)
router.get('/logout', users.logout)
module.exports = router;
