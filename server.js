const express = require('express')
const path = require('path')
const indexrouter = require('./routes/indexroutes')
const isnotenglish = require('./fuckenglish')

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")));
// app.use(isnotenglish)
app.use("/", indexrouter)

app.listen(3000, (ex)=>{
    console.log('Running at localhost 3000')
})