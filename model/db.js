var db = require('./config').connection;
var Sequelize = require('sequelize');
const sequelize = new Sequelize(db, { autoIncrement: true });

const SCHEMA_OPTIONS = { timestamps: false, freezeTableName: true }

var User = sequelize.define('user', {
    uid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    thumbnail: { type: Sequelize.STRING, allowNull: false },
    streamCount: { type: Sequelize.INTEGER, allowNull: false },
    totalHits: { type: Sequelize.INTEGER, allowNull: false },
    score: { type: Sequelize.FLOAT, allowNull: false }
}, SCHEMA_OPTIONS);

var Category = sequelize.define('category', {
    cid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false }
}, SCHEMA_OPTIONS);

var Video = sequelize.define('video', {
    vid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    rid: { type: Sequelize.INTEGER, allowNull: false },
    uid: { type: Sequelize.INTEGER, allowNull: false },
    hits: { type: Sequelize.INTEGER, allowNull: false },
    thumbnail: { type: Sequelize.STRING, allowNull: false }
}, SCHEMA_OPTIONS);

var Request = sequelize.define('request', {
    rid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: false },
    desc: { type: Sequelize.STRING, allowNull: false },
    uid: { type: Sequelize.INTEGER, allowNull: false },
    createdDT: { type: Sequelize.DATE, allowNull: false },
    deadline: { type: Sequelize.DATE, allowNull: false },
    // 0: wait, 1: streaming, 2: end
    status: { type: Sequelize.INTEGER, allowNull: false },
    price: { type: Sequelize.INTEGER, allowNull: false },
    cid: { type: Sequelize.INTEGER, allowNull: false },
    likes: { type: Sequelize.INTEGER, allowNull: false }
}, SCHEMA_OPTIONS);

var Reply = sequelize.define('reply', {
    reid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    uid: { type: Sequelize.INTEGER, allowNull: false },
    createdDT: { type: Sequelize.DATE, allowNull: false },
    rid: { type: Sequelize.INTEGER, allowNull: false },
    text: { type: Sequelize.STRING, allowNull: false },
    userName: { type: Sequelize.STRING, allowNull: false },
    userThumbnail: { type: Sequelize.STRING, allowNull: false }
}, SCHEMA_OPTIONS);

module.exports = { User, Category, Video, Request, Reply };