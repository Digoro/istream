var express = require('express');
var router = express.Router();
var Category = require('../model/db').Category;
var Video = require('../model/db').Video;
var Request = require('../model/db').Request;
var User = require('../model/db').User;
var Reply = require('../model/db').Reply;

var moment = require('moment');
router.get('/category', (req, res, next) => {
  Category.findAll().then(category => {
    res.json(category)
  })
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

router.get('/requestVideos/top/:cid', (req, res, next) => {
  var cid = req.params.cid;
  Request.findAll({
    where: { cid: cid },
    order: [['likes', 'DESC']],
    limit: 5
  }).then(requests => res.json(requests))
});

router.post('/requestVideo', (req, res, next) => {
  var title = req.body.title;
  var desc = req.body.desc;
  var uid = req.body.uid;
  // var deadline = req.body.deadline;
  var price = req.body.price;
  var cid = req.body.cid;

  Request.create({
    rid: 0,
    title: title,
    desc: desc,
    uid: uid,
    price: price,
    cid: cid,
    likes: 0,
    status: 0,
  }).then(resp => {
    res.json('success request video')
  })
})

router.get('/user/:uid', (req, res, next) => {
  var uid = req.params.uid;
  User.findOne({
    where: { uid: uid }
  }).then(user => res.json(user))
});

router.get('/request/:rid', (req, res, next) => {
  var rid = req.params.rid;
  Request.findOne({
    where: { rid: rid }
  }).then(request => res.json(request))
});

router.get('/video/:vid', (req, res, next) => {
  var vid = req.params.vid;
  Video.findOne({
    where: { vid: vid }
  }).then(video => res.json(video))
});

router.get('/video/request/:rid', (req, res, next) => {
  var rid = req.params.rid;
  Video.findOne({
    where: { rid: rid }
  }).then(video => res.json(video))
});

router.get('/reply/:rid', (req, res, next) => {
  var rid = req.params.rid;
  Reply.findAll({
    where: { rid: rid }
  }).then(reply => {
    res.json(reply)
  })
});

router.post('/reply', (req, res, next) => {
  var uid = req.body.uid;
  var rid = req.body.rid;
  var text = req.body.text;

  Reply.create({
    uid: uid,
    rid: rid,
    text: text,
  }).then(resp => res.json('success write reply'))
})

router.get('/topStreamer', (req, res, next) => {
  User.findAll({
    order: [['score', 'DESC']],
    limit: 5
  }).then(users => res.json(users))
});

module.exports = router;
