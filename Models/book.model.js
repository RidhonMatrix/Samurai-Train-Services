const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
   id: { type: Number, required: true},
   title: { type: String, required: true },
   author: { type: String, required: true },
   genre: { type: String, required: true },
   price: { type: Number, required: true },
});

bookSchema.set('toJSON', {
   transform: (doc, ret) => {
    //  ret.id = ret._id;
     delete ret._id;
     delete ret.__v;
     return ret;
   },
 });
////////////////////////////////////////////
//userSchema
 const userSchema = new mongoose.Schema({
   user_id: { type: Number, required: true},
   user_name: { type: String, required: true },
   balance: { type: Number, required: true }

});
userSchema.set('toJSON', {
   transform: (doc, ret) => {
    //  ret.id = ret._id;
     delete ret._id;
     delete ret.__v;
     return ret;
   },
 });

 //trainSchema
 const trainSchema = new mongoose.Schema({
  train_id: { type: Number, required: true },
  train_name: { type: String, required: true },
  capacity: { type: Number, required: true },
  stops: [
     {
        station_id: { type: Number, required: true },
        arrival_time: { type: String, default: null }, 
        departure_time: { type: String, default: null }, 
        fare: { type: Number, required: true }
     }
  ]
});


trainSchema.set('toJSON', {
  transform: (doc, ret) => {
   //  ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});


 

 

const Book = mongoose.model("Book", bookSchema);
const User = mongoose.model("User", userSchema);
const Train = mongoose.model('Train', trainSchema);

module.exports = {Book, 
                  User,
                  Train
                };

