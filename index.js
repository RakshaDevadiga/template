//const http =require('http')
//http.createServer((req,res)=>{
  //  res.end('Hello Word')
//}).listen(3001)

const express=require('express');
const app=express();
app.use(express.json())
const shippings=[];


//app.get(endpoint,callback)

//create a student record
app.post('/shippings',(req,res)=>{
  try{  
    const shipping=req.body;
    shippings.push(shipping);
    res.send(shippings);
  }catch(error){
    res.send(error)
  }
  //to read all student details
  app.get('/shippings',(req,res)=>{
try{
res.send(shippings);
}catch(error){
  res.send(error)
}
  })

  app.get("/shippings/:id",(req,res)=>{
  try{
   const shipping=shippings.find((shipping) => shipping.id==req.params.id);
   res.send(shipping);
  }catch(error){
    res.send(error);
  }
      })

  app.delete("/shippings/:id",(req,res)=>{
    try{
      const index=shippings.findIndex(shipping=>shipping.id==req.params.id);
      shippings.splice(index,1);
      res.send("deleted");

    }catch(error){
      res.send(error)
    }
  })

  

  app.put('/shippings/:id',(req,res)=>{
try{
    const id=req.params.id;
    const index=shippings.findIndex((shipping)=>shipping.id==id);
    shippings[index]=req.body;
    res.send(shippings);
  }catch(error){
    res.send(error);
  }

  })

 })
app.listen(3003,()=>{
    console.log("server is running on port 3003");
});