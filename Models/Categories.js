const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');


const Categories = new Schema({
    name: {type: String, trim: true, index: true, default: null, sparse: true},
    type: {type: String}, // by Wine or Food
    image: {type: String},

    priority:{type: Number,default:0},

    isBlocked: {type: Boolean, default: false, required: true},
    branchId:{type:Schema.ObjectId,ref:"branchs"},
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Categories', Categories);