const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Freshgrub:lavinakalda0303@cluster0.ibfzjs3.mongodb.net/FreshGrub?retryWrites=true&w=majority'
const mongoDB = async () => {
  mongoose.set('strictQuery', false)
  await mongoose.connect(mongoURI, async (err, result) => {
    if (err) {
      console.log("----", err);
    }
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function (err, data) {
        if(err) console.log(err);
        else {
          global.food_items = data;

        }
        })
        const foodCategory =    await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            
            global.foodCategory = catData;
            

          }

        
      })
    }
  });
}




module.exports = mongoDB;