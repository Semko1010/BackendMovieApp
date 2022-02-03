const { MongoClient } = require("mongodb");
const url = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.2ew6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)
const formidable = require('formidable')
const express = require("express")
function accsesDb(){
    const form = formidable({ multiples: true});
    form.parse((err, fields, files) => {
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
            console.log(foundUser);
        })
        // console.log("InputFields:",fields);
    });
}

module.exports = {accsesDb}