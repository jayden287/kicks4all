const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;
/* GET api listing. */
router.get('/', (req, res) => {
res.send('api works');
});


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var db;
MongoClient.connect('mongodb+srv://test1:testone1@cluster0.uw8tw8n.mongodb.net/kicks4all?retryWrites=true&w=majority', { useNewUrlParser: true ,
useUnifiedTopology: true }, (err, database) => {
if (err) return console.log(err);
db = database.db('kicks4all');
});
// create new shoe
router.route('/shoes').post(function (req, res) {
db.collection('shoes').insertOne(req.body, (err, results) => {
if (err) return console.log(err);
console.log('saved to database');
res.send(results);
});
});
router.route('/shoes').get(function (req, res) {
    db.collection('shoes').find().toArray((err, results) => { res.send(results) });
  });


// retrieve all shoes
// update post based on id
router.route('/shoes/:_id').put(function (req, res) {
  db.collection('shoes').updateOne(
    { "_id": ObjectId(req.params._id) }, { $set: req.body }, (err, results) => {
    res.send(results);
  });
});
    // delete post based on id
    router.route('/shoes/:_id').delete(function(req, res) {
    db.collection('shoes').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
    results) => {
    res.send(results);
    });
    });

    router.route('/contacts').post(function (req, res) {
      db.collection('contacts').insertOne(req.body, (err, results) => {
      if (err) return console.log(err);
      console.log('saved to database');
      res.send(results);
      });
      });
      router.route('/contacts').get(function (req, res) {
          db.collection('contacts').find().toArray((err, results) => { res.send(results) });
        });

        router.route('/contacts/:_id').delete(function(req, res) {
          db.collection('contacts').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
          results) => {
          res.send(results);
          });
          });

          router.route('/authuser').post(function(req, res2) {
            var username = req.body.username;
             var password = req.body.password;
             db.collection('users').findOne({"name": username}, { password: 1, role: 1,
              _id: 0 }, function(err, result) {
              if (result == null) res2.send([{"auth": false}]);
              else{
              bcrypt.compare(password, result.password, function(err, res) {
              if(err || res == false) {
               res2.send([{"auth": false}]);
              } else {
               res2.send([{"auth": true, "role": result.role}]);
              }
              });
              }
              });
              });
              router.route('/reguser').post(function(req, res) {
                var username = req.body.username;
                 var password = req.body.password;
                var role = req.body.role;
                bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
                 db.collection('users').insertOne({"name" : username, "password" : hash,
                "role" : role }, (err, result) => {
                if (err) return console.log(err)
                console.log('user registered')
                res.send(result);
                 });
                });
                })
module.exports = router;
