var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');





var Stocks = new Schema({

    KIItemCode: {type: String, trim: true, index: true, default: ''},
    categoryId:{type:Schema.ObjectId,ref:"categoies",default:null},
    branchId:{type:Schema.ObjectId,ref:"branchs"},

    name:{type: String, trim: true, index: true, default: ''},
    isBottle:{type: String, enum: [
        Config.APP_CONSTANTS.DATABASE_CONSTANT.WINE_TYPE.BOTTLE,
        Config.APP_CONSTANTS.DATABASE_CONSTANT.WINE_TYPE.GLASS,
        Config.APP_CONSTANTS.DATABASE_CONSTANT.WINE_TYPE.PEG

    ]},
    itemType:{type: String, enum: [
        Config.APP_CONSTANTS.DATABASE_CONSTANT.ITEM_TYPE.FOOD,
        Config.APP_CONSTANTS.DATABASE_CONSTANT.ITEM_TYPE.WINE
    ]},
    basePrice:{type:Number},
    maxPrice:{type:Number},
    currentPrice:{type:Number},
    priceIncrement:{type:Number},
    priceIncrementUnit:{type:Number},
    stockUnitVariationSale: {type: Number, default: 0},
    maxIncrementUnit:{type:Number},
    maxIncrementPrice:{type:Number},
    landingCost:{type:Number},
    itemOffer:{type:String},
    suggestMixture:{type: Boolean},
    autoOffer:{type: Boolean},
    priceVariable:{type: Boolean},
    crashMarketPercentage:{type: Number, default : 0},
    crashMarketEndTime:{type: Number, default : 0},
    priority:{type: Number, default : 0},
    isBlocked: {type: Boolean, default: false, required: true},
    isDeleted: {type: Boolean, default: false, required: true},

},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

module.exports = mongoose.model('Stocks', Stocks);
