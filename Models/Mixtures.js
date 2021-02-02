const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');





const Mixtures = new Schema({
    name: {type: String, trim: true, index: true, default: null, sparse: true},
    KIItemCode: {type: String, trim: true, index: true, default: ''},
    isDeleted: {type: Boolean, default: false, required: true},
    isBlocked: {type: Boolean, default: false, required: true},
    price:{type:Number},
    branchId:{type:Schema.ObjectId,ref:"branchs"},
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Mixtures', Mixtures);