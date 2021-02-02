const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('../Config');


const BotContent = new Schema({
    text: {type: String, trim: true},
    type: {type: String}, 
    image: {type: String},
    read: {type: Boolean},
    branchId:{type:Schema.ObjectId,ref:"branchs"},
    isBlocked: {type: Boolean, default: false}
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('BotContent', BotContent);