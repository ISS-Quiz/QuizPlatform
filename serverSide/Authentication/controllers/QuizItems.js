const QuizItems = require("../models/QuizItems")

exports.addOne = (req,res) => {
    const quizItem = new QuizItems(req.body);
    quizItem.save((err, quizItem) => {
        if(err) {
            return res.status(400).json({
                error:"Unable to add quizItem"
            
            })
        }
        console.log(quizItem)
        return res.json({
            message: "Success",
            quizItem
        })
    })
    .catch((error)=> {
        res.status(500).json(error);
    })
};
