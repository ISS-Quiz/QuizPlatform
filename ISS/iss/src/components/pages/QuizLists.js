import React from "react";
import QuizItem from "./QuizItem";
import { useState } from "react";
import '../../App.css';


function QuizList(props) {
    
    const Quiz=props.quizItems;
    
    const [data,setdata]= useState(Quiz)
    console.log(Quiz);
    return(
        <div>
            <h3 className="questionsHeader">The questions:</h3>
            <div className="cards-container">
            {   
                data.map((info, index)=>{
                    console.log(info);
                    return (<QuizItem quiz={info} number={index+1}/>);
                })
            }
            </div>
            {/* <button className="button-3">Save </button> */}
        </div>

    );

}
export default QuizList