/**
 * Created by Shumi on 20/3/20.
 */
const Admin = require('./Admin');
const Branch = require('./Branch');
const User = require('./User');
const Stock = require('./Stock');
const Common = require('./Common');
const Captain = require('./Captain');
const Order = require('./Order');





const all = [].concat(
     Admin,
     Branch,
     User,
     Stock,
     Common,
     Captain,
     Order
);
module.exports = all;

