var express = require('express');
var router = express.Router();
var Category = require('../model/db').Category;
var Video = require('../model/db').Video;
var Request = require('../model/db').Request;

router.get('/category', (req, res, next) => {
  Category.findAll().then(category => res.json(category))
});

router.get('/topVideos', (req, res, next) => {
  Video.findAll({
    order: [['hits', 'DESC']], limit: 5
  }).then(videos => res.json(videos))
});

router.get('/topRequests', (req, res, next) => {
  Request.findAll({
    order: [['likes', 'DESC']],
    limit: 5
  }).then(requests => res.json(requests))
});

router.get('/requestVideos/:cid', (req, res, next) => {
  var cid = req.params.cid;
  Request.findAll({
    where: { cid: cid }
  }).then(requests => res.json(requests))
});

router.post('/requestVideo', (req, res, next) => {
  var title = req.body.title;
  var uid = req.body.uid;
  var deadline = req.body.deadline;
  var price = req.body.price;
  var cid = req.body.cid;

  Request.create({
    title: title,
    uid: uid,
    deadline: deadline,
    price: price,
    cid: cid
  }).then(resp => res.json('success request video'))
})

router.get('/user/:uid', (req, res, next) => {
  var uid = req.params.uid;
  User.findOne({
    where: { uid: uid }
  }).then(user => res.json(user))
});

module.exports = router;
