import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function TakeQuiz() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Quizes of the week!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://th.bing.com/th/id/R.d86cf69cb6336c6ef64796e4b948f70d?rik=wCfnIaxtLo6Fwg&pid=ImgRaw&r=0'
              text='History'
              label='History'
              path='/Quizzes'
            />
            
          </ul>
         
        </div>
      </div>
    </div>
  )
}