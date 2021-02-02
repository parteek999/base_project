var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Config = require('../Config');


var Users = new Schema({
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    loyalityLevel:{type: Number, default: 1},
    loginType:{
        type: String, enum: [
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ACCOUNT_TYPE.GMAIL,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ACCOUNT_TYPE.FACEBOOK,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ACCOUNT_TYPE.EMAIL,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ACCOUNT_TYPE.APPLE_ID

        ],index: true
    },
    socialId:{type: String, index: true, unique: true, trim: true,sparse: true},
    email: {type: String, index:true, trim: true},
    password: {type: String},
    passwordResetToken: {type: String, trim: true, index: true, sparse: true},
    gender: {type: String},
    dob: {type: String},
    phoneNo: {type: String},
    deviceToken: {type: String,default:null, trim: true},
    deviceType: {
        type: String, enum: [
            Config.APP_CONSTANTS.DATABASE_CONSTANT.DEVICE_TYPES.IOS,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.DEVICE_TYPES.ANDROID
        ]
    },
    isBlocked: {type: Boolean, default: false, required: true},
    profilePicURL: {type: String, default: null},
    cashback:{type: Number, default: 0}
    
});

module.exports = mongoose.model('Users', Users);