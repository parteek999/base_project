var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Config = require('../Config');

var captains = new Schema({
    name: {type: String, trim: true, index: true, default: null, sparse: true},
    email: {type: String, trim: true,sparse: true, index: true},
    password: {type: String, required:true},
    isBlocked: {type: Boolean, default: false, required: true},
    deviceToken: {type: String, trim: true},
    deviceType: {
        type: String, enum: [
            Config.APP_CONSTANTS.DATABASE_CONSTANT.DEVICE_TYPES.IOS,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.DEVICE_TYPES.ANDROID
        ]
    },
    // city:{type: String},
    branchId:[{type:Schema.ObjectId,ref:"branchs",default:null}],
    table:[{ type: String }],
    totalOrder:{type: Number}
},
{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});


module.exports = mongoose.model('captains', captains);