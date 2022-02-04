const { MongoClient } = require("mongodb");
const url = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.2ew6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)
const express = require('express')
const formidable = require('formidable')
const app = express()
const PORT = 2020
const cors = require('cors')
app.use(cors())
let array = []
client
.connect()
.then((connected_client)=>{
const db = connected_client.db("movieUsers")


app.get("/login", (req, res) => {
                    
    res.send(array[0])
    
})

app.get("/register", (req, res) => {
    console.log("register");
    res.send("Hallo")
})

// Register

app.post("/register", (req, res) => {
    const form = formidable({ multiples: true});
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log("Error");
            return;
        }
        //User anlegen, 
        const user = {
            username: fields.username,
            email: fields.email,
            password: fields.password,
            }
        
        //username und email soll unique sein
        db.collection('users')
        .findOne({ 
            $or: [
                { username: fields.username },
                { email: fields.email, },
                ]
        }).then((foundUser) => {
            if (foundUser) {
                console.log("User Exist");
            } else {
                db.collection('users')
                .insertOne(user)
                .then(() => {
                  console.log("Works");
                  res.send("Works")
                })
            }
            
        })
        
    });
})

// Loggin

app.post("/login", (req, res) => {
    const form = formidable({ multiples: true});
   
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log("Error");
            return;
        }
        db.collection('users')
        .findOne({email: fields.email} && {password: fields.password}).then((foundUser) => {
        
        if (!foundUser) {
            res.send({logged:false});
        }
        array.push({logged:true,foundUser})
        res.redirect('http://localhost:3000');
        
        
        console.log(foundUser);
        })
        
      
    });
   
})

})



app.listen(PORT, () => console.log("server listening on port", PORT))