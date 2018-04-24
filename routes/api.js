var express = require('express');
var User = require('../models/user')
var router = express.Router();


//get list of users from db
router.get('/user', function(req,res,next){
    User.find({}).then(function(user){
        res.send(user);
    })
})
//add a new user in db
router.post('/user', function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next)
})
//update a user in db
router.put('/user/:id', function(req,res,next){
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user)
        })
    })
})
//delete a user fro db
router.delete('/user/:id', function(req,res,next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
    }) 
})


module.exports = router;