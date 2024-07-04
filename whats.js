const express=require("express");
const body_parser=require("body-parser");
require('dotenv').config();
const app=express().use(body_parser.json())

const token=process.env.token;
const mytoken=process.env.mytoken;

app.listen(8000||process.env.PORT,()=>{
    console.log("webhook is listenong");
})

app.get("/webhoook",(req,res)=>{
    let mode=req.query["hub.mode"];
    let challenge =req.query["hub.challenge"];
    let token=req.query["hub.verify_token"];

    if(mode && token){
        if(mode=="subscribe" && token==mytoken){
            res.status(200).send(challenge)
        }
        else{
            res.status(403)
        }
    }
});

app.post("/webhook",(req,res)=>{
    let body_param=req.body;

    console.log(JSON.stringify(body_param,null,2));

    if(body_param.object){
        if(body_param.entry &&
         body_param.entry[0].changes &&
         body_param.entry[0].changes[0].value.message &&
         body_param.entry[0].changes[0].value.message[0]
         ){
            let phn_id=body_param.entry[0].changes[0].value.metadata.phone_number_id;
            let from=body_param.entry[0].changes[0].value.messages[0].from;
            let msg_body=body_param.entry[0].changes[0].value.messages[0].text.body;

            axios({
                method:"post",
                url:"https://graph.facebook.com/v18.0/"+phn_id+"/messages?access_token="+token,
                data:{
                     messaging_product: "whatsapp",    
                     recipient_type: "individual",
                     to: from,
                     type: "text",
                     text: {
                        body: "This is an amergancy"
                    }
                },
                Headers:{
                    "COntent-Type":"application/json"
                }

            });

            res.sendStatus(200);

        }
        else{
            res.sendStatus(403);
        }
    }
})
