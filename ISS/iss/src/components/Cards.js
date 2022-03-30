import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Quizes of the week!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://th.bing.com/th/id/R.4b3c01fc2fd77022df679778d45b626e?rik=DTEGlltLBzw5dw&riu=http%3a%2f%2fsgugenetics.pbworks.com%2ff%2f1492795830%2fdna.jpg&ehk=z%2fSv69TNUIxS2Tuuh0UHcuc8t8WtMqDe25XV5F0tC6c%3d&risl=&pid=ImgRaw&r=0'
              text='DNA Replication Quiz'
              label='Science'
              path='/Quizzes'
            />
            <CardItem
              src='https://www.mykidstime.com/wp-content/uploads/2020/04/Math-websites-for-kids-1.jpg'
              text='Multiplication Quiz'
              label='Maths'
              path='/Quizzes'
            />
            <CardItem
              src='https://th.bing.com/th/id/R.d86cf69cb6336c6ef64796e4b948f70d?rik=wCfnIaxtLo6Fwg&pid=ImgRaw&r=0'
              text='History of World War II'
              label='History'
              path='/Quizzes'
            />
            <CardItem
              src='https://th.bing.com/th/id/R.3280653a168f2297a567abdd0cac4107?rik=JvRJ4hnBPBdVaQ&riu=http%3a%2f%2fwww.milwaukeeindependent.com%2fwp-content%2fuploads%2f2019%2f08%2f080219_PopulationCrowd.jpg&ehk=QCjjgeGgTmgL%2bLrrHCj2Q3phJagWaFU2bdO7ydd8xtg%3d&risl=&pid=ImgRaw&r=0'
              text='Population'
              label='Geography'
              path='/Quizzes'
            />
            <CardItem
              src='https://assets.cricketnews.com/s3fs-public/2021-11/tennis.jpg'
              text='History of Tennis'
              label='Sports'
              path='/Quizzes'
            />
            <CardItem
              src='https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(64)(207).jpg'
              text='Test Your Cinema Knowledge'
              label='Arts'
              path='/Quizzes'
            />
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;