
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places , descriptors} = require('./seedHelpers');
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
  useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", ()=>{
    console.log("Database connected");
});
const sample = (array) => array[Math.floor(Math.random()* array.length)];

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i=0; i<50;i++){
        const random1000 = Math.floor(Math.random() *1000);
        const price = Math.floor(Math.random()*30) +10;
      const camp = new Campground({
          author: '62711a96194229f4fd53cb7e',
            location: `${cities[random1000]} , ${cities[random1000]}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi molestiae, voluptates illo rem tempore necessitatibus. Molestias recusandae aperiam quibusdam nulla, aliquam a culpa, amet accusamus odio placeat iste deserunt?',
            price
        })
        await camp.save();
    } 
    // const c = new Campground({title: 'purple field'});
    // await c.save();
}
seedDB().then(()=>{
mongoose.connection.close();
})

