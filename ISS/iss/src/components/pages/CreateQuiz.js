import React, {Component,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import { IoIosAddCircleOutline } from "react-icons/io";
import {GrFormPreviousLink} from "react-icons/gr";
import {MdDisabledByDefault} from "react-icons/md"
import '../../App.css';


export default function CreateQuiz() {
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
    <input placeholder='Question' class="w3-input w3-border-0"/>
    <div className='options-container'>
       <input className='option' placeholder='option 1'/>
       <input className='option' placeholder='option 3'/>
    </div>
    <div className='options-container'>
        <input className='option' placeholder='option 2'/>
        <input className='option' placeholder='option 4'/>
        </div>
    <div className='button-container'>
      <button><span><GrFormPreviousLink/>  Previous </span></button>
      <button> Add    <IoIosAddCircleOutline/></button>
      <button> Quit <MdDisabledByDefault/></button>  
    </div>
    </div>
    </div>
  </Fragment>
  );
}