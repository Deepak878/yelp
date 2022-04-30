const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    description: String,
    title: String,
    image: String,
    price: Number,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('Campground',CampgroundSchema);
