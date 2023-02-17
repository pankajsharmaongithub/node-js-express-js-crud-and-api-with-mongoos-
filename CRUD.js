const mongoose=require("mongoose");

const url="mongodb://localhost:27017/dev_portfolio";

// await mongoose.connect(url);
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });

// ===========Create==Schema====
const developerScheme=new mongoose.Schema({
    name:String,
    role:String,
    age:Number
});

// ==========Save/create Data====
const saveData=async ()=>{
    const developerModel=mongoose.model('developers',developerScheme);

    let data=new developerModel({
        name:"ps pankaj sharma 22",
        role:"Web Developer 22",
        age:29
    });

    let result=await data.save();
    console.log(result);
}


// ==========Find/read Data====
const findData=async ()=>{
    const developerModel=mongoose.model('developers',developerScheme);
    let result=await developerModel.find({name:"ps pankaj sharma"});
    console.log(result);
}



// =====Update===Data==
const updateData=async()=>{
    const developerModel=mongoose.model('developers',developerScheme);

    // let data=await developerModel.updateOne(
      let data=await developerModel.updateMany(
            {name:"ps pankaj sharma"},
        {
            $set:{ role:"Full stack Web Developer",age:28}
        }
    );
    console.log(data);
}


// =====Delete===Data==
const deleteData=async()=>{
    const developerModel=mongoose.model('developers',developerScheme);

    // let data=await developerModel.updateOne(
      let data=await developerModel.deleteMany({name:"ps pankaj sharma"});
    console.log(data);
}

// Calling function here...uncomment to run
// saveData();
// findData();
// updateData();
// deleteData();

