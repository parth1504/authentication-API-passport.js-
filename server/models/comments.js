const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const Comments= new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description:String
})


module.exports= mongoose.model("comments", Comments);