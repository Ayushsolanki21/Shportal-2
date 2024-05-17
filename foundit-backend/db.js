const mongoose=require('mongoose');

require('dotenv').config();

//const mongoURI = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
const mongoURI ='mongodb+srv://ayush123:ayush123@shportal.e354clx.mongodb.net/?retryWrites=true&w=majority&appName=shportal'
const connectToMongo=()=>{
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true},      
).then((link) => {
  console.log("Connected to mongo successfully")
})
.catch(() => {
  console.log("Database not connected.");
})
}

module.exports=connectToMongo;