import React from "react";
import {useState} from "react";
import Modal from "./Modal";
import './QuizItem.css';


function QuizItem(props){
    const [openModal,setOpenModal]=useState(false);

    console.log(props.quiz);
    
    return(
        <div className="container">
            <div className="card__container">
                <div className="card">
                    <div className="card__content">  
                        <h3 className="card__header">Question number {props.number}</h3>
                        <p className="card__info">{props.quiz.question}</p>
                        <button className="card__button" onClick={()=>{setOpenModal(true)}}>Update</button>
                        {openModal && <Modal  closeModal={setOpenModal} quiz={props.quiz}  />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuizItem;