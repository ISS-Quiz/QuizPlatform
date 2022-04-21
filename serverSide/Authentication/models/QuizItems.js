const mongoose = require("mongoose")
const User = require("./user")

const QuizItemSchema = new mongoose.Schema({
    
        question: {
            type: String
        },
        answers: [
            {Answer1: {
                type: String,
            }}, 
            {Answer2: {
                type: String,
            }},
            {Answer3: {
                type: String,
            }},
            {Answer4: {
                type: String,
            }},
            {rightAnswer: {
                type: String,
            }},
        ]
    
});

const QuizItemsSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    matrix: [[QuizItemSchema]]

})




module.exports = mongoose.model("QuizItems", QuizItemsSchema);

