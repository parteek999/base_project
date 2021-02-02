const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');


const Citys = new Schema({
    name: {type: String, trim: true, index: true, default: null, sparse: true},

    isBlocked: {type: Boolean, default: false, required: true},
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Citys', Citys);