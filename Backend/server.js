const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000; 

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello from Tudu backend 🚀");
});
app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})

