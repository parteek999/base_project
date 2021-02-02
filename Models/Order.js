const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Config = require('../Config');



const stock = new Schema({
    categoryId:{type:Schema.ObjectId,ref:"Categories",default:null},
    _id:{type:Schema.ObjectId},
    type: {
        type: String, enum: [
        Config.APP_CONSTANTS.DATABASE_CONSTANT.ITEM_TYPE.FOOD,
        Config.APP_CONSTANTS.DATABASE_CONSTANT.ITEM_TYPE.WINE
        ], 
        default: Config.APP_CONSTANTS.DATABASE_CONSTANT.ITEM_TYPE.WINE
    },
    quantity:{type:Number},
    price:{type:Number},
});

const mixture = new Schema({
    _id:{type:Schema.ObjectId,ref:"Mixtures",default:null},
    quantity:{type:Number},
    price:{type:Number}
});

const Order = new Schema({
    branchId:{type:Schema.ObjectId,ref:"branchs",default:null},
    tableNo:{type:String},
    captainId:{type:Schema.ObjectId,ref:"captains",default:null},
    userId:{type:Schema.ObjectId,ref:"Users",index: true},
    stock:[stock],
    mixture:[mixture],
    totalAmount:{type:Number},
    // totalPaid:{type:Number},
    cashbackUsed:{type:Number, default: 0},
    isBlocked: {type: Boolean, default: false, required: true},
    discount: {
        type: { type: Number}, // 0 for discount, 1 for cashback, 2 for scratch
        amount: { type: Number }
    },
    status: {
        type: String, enum: [
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ORDER_STATUS.REJECT,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ORDER_STATUS.CONFIRMED,
            Config.APP_CONSTANTS.DATABASE_CONSTANT.ORDER_STATUS.PENDING
        ],
        default: Config.APP_CONSTANTS.DATABASE_CONSTANT.ORDER_STATUS.PENDING
    },
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});


module.exports = mongoose.model('Order',Order);