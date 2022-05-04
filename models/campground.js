const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review')
const CampgroundSchema = new Schema({
    description: String,
    title: String,
    image: String,
    price: Number,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})
CampgroundSchema.post('findOneAndDelete', async function(doc){
    console.log(doc)
    if(doc){
        await Review.deleteMany({
           _id: {
            $in: doc.reviews
           }
            
        })
    }
})

module.exports = mongoose.model('Campground',CampgroundSchema);
