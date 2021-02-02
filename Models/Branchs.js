/**
 * Created by Shumi on 21/3/20.
 */

'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Config = require('../Config');

const Branchs = new Schema({
    
    name: {type: String, required:true},
    image: {type: String, default:'default.jpeg'},
    city:{type:Schema.ObjectId,ref:"citys"},
    email: {type: String, required:true, index: true},
    password: {type: String, required:true},
    location: {type: [Number], index: '2d'},
    phoneNo:{type: String, required:true},
    managerName: {type: String, required:true},
    passwordResetToken: {type: String, sparse:true},
    crashMarket: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    OutletCode:{type: String},
    Outletpswd:{type: String},


}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Branchs', Branchs);