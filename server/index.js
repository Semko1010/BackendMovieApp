const { MongoClient } = require("mongodb");
const url = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.2ew6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)
const express = require('express')
const formidable = require('formidable')
const app = express()
const PORT = 2020
const cors = require('cors')
const jwt = require('jsonwebtoken')
app.use(cors())
let array = []
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })
client
.connect()
.then((connected_client)=>{
const db = connected_client.db("movieUsers")

const generateToken = (user) => {
    const NOW = Date.now() / 1000
    const ONE_DAY = 24 * 60 * 60
    const NOW_IN_ONE_DAY = NOW + ONE_DAY
    
    const token = jwt.sign({
        sub: user,      // wer ist es
        iat: NOW, // dividieren durch 1000 um von millisekunden auf sekunden zu kommen...
        exp: NOW_IN_ONE_DAY, // wann er abläuft
        type: "access_token",
    }, "secret")

    return token
}


app.get("/login", (req, res) => {
                    
    console.log(req);
    
})

app.get("/register", (req, res) => {
    console.log("register");
    res.send("Hallo")
})

// Register

app.post("/register",jsonParser, (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
 
       
        //User anlegen, 
        const user = {
            username: username,
            email: email,
            password: password,
            }
        
        //username und email soll unique sein
        db.collection('users')
        .findOne({ 
            $or: [
                { username: username },
                { email: email, },
                ]
        }).then((foundUser) => {
            if (foundUser) {
                console.log("User Exist");
                console.log(email);
            } else {
                db.collection('users')
                .insertOne(user)
                .then(() => {
                  console.log("Works");
                  res.send("Works")
                })
            }
            
        })
        
   
})

// Loggin

app.post("/login", jsonParser,(req, res) => {
const email = req.body.email
const password = req.body.password

        db.collection('users')
        .findOne({email: email} && {password: password}).then((foundUser) => {
        
        if (!foundUser) {
            res.send({logged:false});
        }
        // array.push({logged:true,foundUser})
        // res.redirect('http://localhost:3000');
        const token = generateToken(foundUser)
        res.json({logged:true,token:token})
        
        console.log(req.headers);
        })
        
      
 
   
})

})



app.listen(PORT, () => console.log("server listening on port", PORT))