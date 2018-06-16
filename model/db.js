var db = require('./config').connection;
var Sequelize = require('sequelize');
const sequelize = new Sequelize(db, { autoIncrement: true });

const SCHEMA_OPTIONS = { timestamps: false, freezeTableName: true }
const SCHEMA_ID = { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }
const SCHEMA_STRING = { type: Sequelize.STRING, allowNull: false }
const SCHEMA_DATE = { type: Sequelize.DATE, allowNull: false }
const SCHEMA_INTEGER = { type: Sequelize.INTEGER, allowNull: false }

var User = sequelize.define('user', {
    uid: SCHEMA_ID,
    name: SCHEMA_STRING,
    email: SCHEMA_STRING,
    thumnail: SCHEMA_STRING,
    finishedStremingCount: SCHEMA_INTEGER,
    totalHits: SCHEMA_INTEGER,
    score: SCHEMA_INTEGER
}, SCHEMA_OPTIONS);

var Category = sequelize.define('category', {
    cid: SCHEMA_ID,
    name: SCHEMA_STRING
}, SCHEMA_OPTIONS);

var Video = sequelize.define('video', {
    vid: SCHEMA_ID,
    title: SCHEMA_STRING,
    url: SCHEMA_STRING,
    rid: SCHEMA_INTEGER,
    length: SCHEMA_INTEGER,
    uid: SCHEMA_INTEGER,
    hits: SCHEMA_INTEGER,
    thumnail: SCHEMA_STRING
}, SCHEMA_OPTIONS);

var Request = sequelize.define('request', {
    rid: SCHEMA_ID,
    title: SCHEMA_STRING,
    desc: SCHEMA_STRING,
    uid: SCHEMA_INTEGER,
    createdDT: SCHEMA_DATE,
    deadline: SCHEMA_DATE,
    // 0: wait, 1: streaming, 2: end
    status: SCHEMA_INTEGER,
    price: SCHEMA_INTEGER,
    cid: SCHEMA_INTEGER,
    likes: SCHEMA_INTEGER
}, SCHEMA_OPTIONS);

var Reply = sequelize.define('reply', {
    replyid: SCHEMA_ID,
    createdDT: SCHEMA_DATE,
    rid: SCHEMA_INTEGER,
    text: SCHEMA_STRING
}, SCHEMA_OPTIONS);

module.exports = { User, Category, Video, Request, Reply };