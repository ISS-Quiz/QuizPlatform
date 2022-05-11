import React,{useState} from "react";
import './Modal.css'
import '../../App'

function Modal({closeModal,quiz}){
    const [answer1, setAnswer1] = useState({
        'value': quiz.answers[0].value,
        'Boolean': quiz.answers[0].Boolean
      }) 
    
      const [answer2, setAnswer2] = useState({
        'value': quiz.answers[1].value,
        'Boolean': quiz.answers[1].Boolean
      }) 
    
      const [answer3, setAnswer3] = useState({
        'value': quiz.answers[2].value,
        'Boolean': quiz.answers[2].Boolean
      }) 
    
      const [answer4, setAnswer4] = useState({
        'value': quiz.answers[3].value,
        'Boolean': quiz.answers[3].Boolean
      }) 
      const [rightAnswer, setRightAnswer] = useState('')
    
      const [answers,setAnswers] = useState([])  
     
      const [QuizItem, setQuizItem] = useState({
        'answers': answers,
        'question': '',
      }) 
    
    console.log(quiz);
    console.log(quiz.answers);
    
    return(
        <div className="modalBackground">
            <div className='modalContainer'>
                <input className="questionInput" placeholder="Enter the question" defaultValue={quiz.question}/>
                <br/>
                <div className="quizItemInputs">
                    {quiz.answers.map(function(option){
                        return(
                            <div className="optionContainer">
                                <input className="optionInput" placeholder="opt" defaultValue={option.value}/>
                                <input className="checkboxInput"  type="checkbox" onChange={()=>{console.log('do the function');}} checked={option.Boolean} />
                            </div>
                        )
                    })}
                </div>
                <div className="modalButtons">
                    <button className="button-2" onClick={()=>closeModal(false)}>Cancel</button>
                    <button className="button-2" onClick={()=>closeModal(false)}>Confirm</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;