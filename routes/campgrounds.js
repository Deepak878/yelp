const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const campgrounds = require('../controllers/campgrounds')

const {isLoggedIn , isAuthor ,validateCampground} = require('../middleware');

router.route('/')
.get(catchAsync(campgrounds.index))
.post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))


router.get('/new',isLoggedIn,campgrounds.renderForm)

router
router.get('/:id', catchAsync(campgrounds.showCampground));
router.get('/:id/edit',isLoggedIn,isAuthor, catchAsync(campgrounds.renderEditForm))

router.put('/:id', isLoggedIn,validateCampground,catchAsync(campgrounds.updateCampground))

router.delete('/:id',isLoggedIn, catchAsync(campgrounds.deleteCampground));
 module.exports = router;