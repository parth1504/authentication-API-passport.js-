const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const Blog = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title:String,
    description:String,
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:'comments'
        } 
    ]
    
})

module.exports= mongoose.model("Blog", Blog);