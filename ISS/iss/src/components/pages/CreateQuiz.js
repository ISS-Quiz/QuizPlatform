import React, {Fragment, useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import {GrFormPreviousLink} from "react-icons/gr";
import {MdDisabledByDefault} from "react-icons/md"
import '../../App.css';


export default function CreateQuiz() {
 
  const [answer1, setAnswer1] = useState({
    'value': '',
    'Boolean': false
  }) 

  const [answer2, setAnswer2] = useState({
    'value': '',
    'Boolean': false
  }) 

  const [answer3, setAnswer3] = useState({
    'value': '',
    'Boolean': false
  }) 

  const [answer4, setAnswer4] = useState({
    'value': '',
    'Boolean': false
  }) 

  const [answers,setAnswers] = useState([])  
 
  const [questions, setQuestions] = useState({
    'question': '',
    'answers': answers
  }) 
  const navigate = useNavigate()
  


 const change = (e) => {
   answers.push(answer1)
   answers.push(answer2)
   answers.push(answer3)
   answers.push(answer4)
   setQuestions({ ...questions,"answers": answers})
   console.log("=", questions)
   navigate("/createQuiz")
 }

 const onChange1 =()=>{
   setAnswer1({...answer1,'Boolean': true})
   setAnswer2({...answer2,'Boolean':false})
   setAnswer3({...answer3,'Boolean':false})
   setAnswer4({...answer4,'Boolean':false})
 }

 const onChange2 =()=>{
  setAnswer2({...answer2,'Boolean': true})
  setAnswer1({...answer1,'Boolean':false})
  setAnswer3({...answer3,'Boolean':false})
  setAnswer4({...answer4,'Boolean':false})
}

const onChange3 =()=>{
  setAnswer3({...answer3,'Boolean': true})
  setAnswer2({...answer2,'Boolean':false})
  setAnswer1({...answer1,'Boolean':false})
  setAnswer4({...answer4,'Boolean':false})
}

const onChange4 =()=>{
  setAnswer4({...answer4,'Boolean': true})
  setAnswer2({...answer2,'Boolean':false})
  setAnswer3({...answer3,'Boolean':false})
  setAnswer1({...answer1,'Boolean':false})
}




 
  return (
  <Fragment>
    <Helmet><title>JaWEB - Create a quiz</title></Helmet>
    <div className='createquiz'>
      <div className='quiz-wrapper'>
        <div className='lifeline-container'>
          <p>
            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
          </p>
          <p>
            <span className='mdi mdi-lightlub-on-outline mdi-24px lifeline-icon'></span>
          </p>
        </div>
    <input placeholder='Question' className="Question" onChange={e => setQuestions({ ...questions,"question": e.target.value})}  />
    <div className='options-container'>
  
         <span><input className='option'  placeholder='option 1'  onChange={e => {setAnswer1(prevState => ({...prevState,'value':e.target.value})); }}  /> <input type='checkbox' className='box' onClick={onChange1}  checked={answer1.Boolean} /> </span>
         <span><input className='option'   placeholder='option 3' onChange={e => {setAnswer3(prevState => ({...prevState,'value':e.target.value})); }} /> <input  type='checkbox' className='box' onClick={onChange3} checked={answer3.Boolean}/> </span>
       
      
    </div>
    <div className='options-container'>
       <span> <input className='option'   placeholder='option 2'  onChange={e => {setAnswer2({...answer2,'value': e.target.value})}}/> <input type='checkbox' className='box' onClick={onChange2} checked={answer2.Boolean}/> </span>
        <span><input className='option'   placeholder='option 4' onChange={e => {setAnswer4({...answer4,'value': e.target.value})}} /> <input type='checkbox' className='box' onClick={onChange4} checked={answer4.Boolean}/> </span>
  
        </div>
    <div className='button-container'>
      
      <button onClick={change}>add <IoIosAddCircleOutline/></button>
      <button onClick={() => console.log(questions)}> <Link to='/createQuiz'>save</Link>  </button>  
    </div>
    </div>
    </div>
  </Fragment>
  );
}