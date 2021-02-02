const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');


const Table = new Schema({
    name: {type: String, trim: true},
    branchId:{type:Schema.ObjectId,ref:"branchs", index: true},
    captain:[{type:Schema.ObjectId,ref:"captains"}],

    isBlocked: {type: Boolean, default: false, required: true},
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Table', Table);