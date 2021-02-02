
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');


const Scratch = new Schema({
    categoryId:{type:Schema.ObjectId,ref:"categoies",default:null},
    stockId:{type:Schema.ObjectId,ref:"stocks",default:null},
    type: {type: String}, // by % or price
    minBill:{type: Number,default:0},
    maxBill:{type: Number,default:0},
    discountValue:{type: Number,default:0},
    isBlocked: {type: Boolean, default: false, required: true},
    branchId:{type:Schema.ObjectId,ref:"branchs"},
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Scratch', Scratch);