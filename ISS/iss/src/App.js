
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import CreateQuiz from './components/pages/CreateQuiz';
import TakeQuiz from './components/pages/TakeQuiz';
import Login from './components/pages/Login'
import QuizItems from './components/pages/QuizItems'
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
      <Router>

  
       <Navbar />
       <Routes>
          <Route exact path='/' element={<Home />} />
      </Routes>
       <Routes>
          <Route exact path='/createQuiz' element={<CreateQuiz />} />
       </Routes>
      <Routes>   
         <Route exact path='/Quizzes' element={<TakeQuiz />} />

         <Route path="/" exact component={Home}/>
         <Route path="/TakeQuiz" exact element={<TakeQuiz />}/>
         <Route exact path="/TakeQuiz/instructions" element ={<QuizInstructions/>} />
         <Route  exact path="/TakeQuiz/Play" element={<Play/>} />
         <Route exact path="/TakeQuiz/QuizSummary" element ={<QuizSummary/>} />
      
       </Routes>
       <Routes>
          <Route exact path='/Login' element={<Login />} />
      </Routes>
       <Routes>
          <Route exact path='/sign-up' element={<SignUp />} />
      </Routes>
      <Routes>
          <Route exact path='/quizItems' element={<QuizItems />} />
      </Routes>



      </Router>


      
    </>
  );
}

export default App;
