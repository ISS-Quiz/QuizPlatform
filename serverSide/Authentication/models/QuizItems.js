const mongoose = require("mongoose")
const User = require("./user")

const QuizItemsSchema = new mongoose.Schema(
    
        {
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            quizItems:[
                {QuizItem:{
                    answers: [ {
                        answer1: {
                            value: String,
                            Boolean: {type:Boolean,default:false}
                        }, 
                        answer2: {
                            value: String,
                            Boolean: Boolean 
                        },
                        answer3: {
                            value: String,
                            Boolean: Boolean
                        },
                        answer4: {
                            value: String,
                            Boolean: Boolean
                        },
                        rightAnswer: {
                            type: String,
                        },
                    }
                    ],
                    question: {
                        type: String
                    }
                }
            }
            ]
        }
    
);

module.exports = mongoose.model("QuizItems", QuizItemsSchema);

