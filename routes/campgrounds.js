const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const {isLoggedIn , isAuthor ,validateCampground} = require('../middleware');
const campgrounds = require('../controllers/campgrounds')

const {storage} = require('../cloudinary/index');
const multer = require('multer');
const upload = multer({ storage });
const cloudinary = require('cloudinary').v2;

router.route('/')
.get(catchAsync(campgrounds.index))
// .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))
.post(upload.array('image'), (req,res)=>{
    console.log(req.body , req.files)
    res.send('It worked' );
})

router.get('/new',isLoggedIn,campgrounds.renderForm)
router.route('/:id')
.get(catchAsync(campgrounds.showCampground))
.put(isLoggedIn,validateCampground,catchAsync(campgrounds.updateCampground))
.delete(isLoggedIn, catchAsync(campgrounds.deleteCampground))



router.get('/:id/edit',isLoggedIn,isAuthor, catchAsync(campgrounds.renderEditForm))

module.exports = router;