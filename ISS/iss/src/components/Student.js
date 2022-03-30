import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Student.css';

function Student() {
  return (
   
    <div className='studentContainer'>
      
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Your Ultimate Quiz Platform</h1>
      <p>The road to academic sucess</p>
      <div className='student-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create Quiz
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Test yourself<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    
  );
  
}

export default Student;