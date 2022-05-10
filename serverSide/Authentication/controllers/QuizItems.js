const QuizItems = require("../models/QuizItems")

exports.addOne = (req,res) => {
    const quiz = new QuizItems(req.body);
    console.log(quiz)
    quiz.save()
    .then ((quiz) => {
        res.status(200).json(quiz)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json("Something went wrong");
    })
};
