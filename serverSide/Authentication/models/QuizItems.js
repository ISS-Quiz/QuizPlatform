const mongoose = require("mongoose")
const User = require("./user")

const QuizItemsSchema = new mongoose.Schema(
    
        {
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            quizItems:[
                {
                    answers:  [
                        {
                            "value": String,
                            "Boolean": Boolean
                        }, 
                        {
                            "value": String,
                            "Boolean": Boolean
                        },
                        {
                            "value": String,
                            "Boolean": Boolean
                        },
                        {
                            "value": String,
                            "Boolean": Boolean
                        }
                    ]
                    ,
                    question: {
                        type: String
                    }
                }
            ]
        }
    
);


module.exports = mongoose.model("QuizItems", QuizItemsSchema);

