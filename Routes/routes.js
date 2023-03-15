const mongoose = require('mongoose');
const express = require('express');
const User = require('../Models/userSchema');
const { response } = require('express');
const router = express.Router();

// GET all users
router.get('/user', async (req, res) => {
    await User.find()
    .then((users) => {
        res.status(200).send(users)
        console.log("users", users)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// Post users
router.post('/post', async (req, res) => {
    const postUser = new User({
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob,
        city: req.body.city
    })
    await postUser.save()
    .then((post) => {
        res.status(201).send(post)
        console.log("post", post)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// GET user by Id
router.get('/user/:id', async (req, res) => {
    await User.findById(req.params.id)
    .then((response) => {
        if(!response) {
            return res.status(404).send();
        } 
        res.send(response);
        console.log("response", response)
    }).catch((error) => {
        res.status(500).send(error);
    })
})

// POST user by Id
router.put('/post/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob,
        city: req.body.city
    })
    .then((response) => {
        if(!response) {
            res.status(400).send();
        }
        console.log("updated", response)
        res.send(response);
    }).catch((err) => {
        res.status(500).send(err)
        console.log("error", err)
    })
})


// DELETE user by Id
router.delete('/user/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id)
    .then((result) => {
        if(!result) {
            res.status(400).send()
        }
        console.log("successfully deleted the user by Id", result)
        res.send(result);
    }).catch((err) => {
        console.log("error", err)
    })
})

module.exports = router;