const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 7,
  review: "Pretty solid fruit."
});
const apple = new Fruit({
  name: "apple",
  rating: 8,
  review: "Pretty good fruit."
});

// Fruit.insertMany([kiwi,apple],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully saved fruits");
//   }
// });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log(fruits);
  }
  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });
});
