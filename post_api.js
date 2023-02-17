const express=require("express");
require('./config');
const developers=require('./schema/developer');

const app=express();
app.use(express.json());

app.post('/create', async (req,resp)=>{
        const data=new developers(req.body);
        const result= await data.save();
        resp.send(result);
});

app.get("/list",async(req,resp)=>{
    const data=await developers.find();
    resp.send(data);
});


app.delete("/delete/:_id",async(req,resp)=>{
    const data=await developers.deleteOne(req.params);
    resp.send(data);
});


app.put("/update/:_id",async(req,resp)=>{
    const data=await developers.updateOne(
        req.params,
        {
            $set:req.body
        });
    resp.send(data);
});


app.listen(4000);