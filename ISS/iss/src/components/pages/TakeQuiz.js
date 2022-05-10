import React from 'react';
import { Route, Router } from 'react-router-dom';
import '../../App.css';
import QuizInstructions from '../quiz/QuizInstructions';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import QuizSummary from '../quiz/QuizSummary';
import Play from '../quiz/Play';

 function TakeQuiz() {
  return (
    <>
  <QuizInstructions/>
 
  
 
 
 </>
  );

}
export default TakeQuiz;