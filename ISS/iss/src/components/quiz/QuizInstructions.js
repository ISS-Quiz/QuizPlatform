import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import answer from '../../assets/answer.png';
import fiftyFifty from '../../assets/fiftyFifty.png';
import hints from '../../assets/hints.png';
import options from '../../assets/options.png';


export default function QuizInstructions() {
    return (
    <Fragment>
        <Helmet>
            <title>Quiz Instructions - Quiz App</title>
        </Helmet>
        <div className="instructions-wrap container">
            <h1>How to play the game?</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul id="main-list" className="browser-default">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consist of 15 questions.</li>
                <li>
                    Every question contains 4 options
                    <img src={options} alt="Quiz App - Options example" />
                </li>
                <li>
                    Select the option which best answers provided question by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App - Answer example" />
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>50/50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50/50 lifeline by clicking the 
                    " <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span> " 
                    icon will remove 2 wrong answers,
                    leaving one wrong and a correct one. <br />
                        <img src={fiftyFifty} alt="Quiz App - 50/50 example" />
                </li>
                <li>
                    Using a hint by clicking the
                    " <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span> "
                    icon will remove one wrong answer,
                    leaving two wrong answers and a correct one.
                    You can use as many hints as possible on a single question.<br />
                    <img src={hints} alt="Quiz App - Hints example" />
                </li>
                <li>
                    Feel free to quit (or forfeit) from the game at any time. In that case your score
                    will be revealed afterwards.
                </li>
                <li>
                    The timer starts as soon as the game loads.
                </li>
                <li>
                    Let's do this if you think you've got what it takes?
                </li>
            </ul>
            <div>
                <span className="left">
                    <Link to="/">No, take me back!</Link>
                </span>
                <span className="right">
                    <Link to="/TakeQuiz/Play">Okay, let's do this!</Link>
                </span>
            </div>
        </div>
    </Fragment>
);

}