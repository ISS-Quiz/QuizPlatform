const QuizItems = require("../models/QuizItems")

exports.addOne = (req,res) => {
    const quiz = new QuizItems(req.body);
    console.log(quiz.quizItems[0])
    quiz.save()
    .then ((quizItem) => {
        res.status(200).send(quizItem)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send("Something went wrong");
    })
};
