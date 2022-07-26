const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    field: String,
    experience:Number
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.models['User'] || mongoose.model('User', UserSchema)

//module.exports= mongoose.model('User', UserSchema);