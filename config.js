const mongoose=require("mongoose");
const url="mongodb://localhost:27017/dev_portfolio";

// mongoose.connect(url)
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });

