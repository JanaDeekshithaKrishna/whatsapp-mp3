const express=require('express')

const app=express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log('here')
    res.render('index',{text2323 :'World'})
})

app.listen(3000)

