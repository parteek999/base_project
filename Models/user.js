var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const imageSchema = new Schema({
//      _id:{type:Schema.ObjectId,ref:"Mixtures",default:null}, 
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
var Users = new Schema({
    fullname : {type: String, trim: true},
    gender:{type:String,
        enum: [
           male,female,others
        ]
    },
    dob: {type: String},
    phoneNo: {type: String},
    password: {type: String},
    verifypassword: {type: String},
    // imageSchema:[imageSchema],
    img:
        {
            data: Buffer,
            contentType: String
        },
    profilePicURL: {type: String, default: null},
})