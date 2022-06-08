import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Testimonials</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img 1.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pulvinar augue, id tempus nulla. Integer dictum accumsan molestie. Suspendisse ut ultrices libero, quis vulputate orci. Nullam feugiat non diam eu sagittis. Phasellus ultricies feugiat luctus. Aliquam in ultricies arcu.'
              path='/'
            />
            <CardItem
              src='images/img 2.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pulvinar augue, id tempus nulla. Integer dictum accumsan molestie. Suspendisse ut ultrices libero, quis vulputate orci. Nullam feugiat non diam eu sagittis. Phasellus ultricies feugiat luctus. Aliquam in ultricies arcu.'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img 3.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pulvinar augue, id tempus nulla. Integer dictum accumsan molestie. Suspendisse ut ultrices libero, quis vulputate orci. Nullam feugiat non diam eu sagittis. Phasellus ultricies feugiat luctus. Aliquam in ultricies arcu.'
              path='/'
            />
            <CardItem
              src='images/img 4.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pulvinar augue, id tempus nulla. Integer dictum accumsan molestie. Suspendisse ut ultrices libero, quis vulputate orci. Nullam feugiat non diam eu sagittis. Phasellus ultricies feugiat luctus. Aliquam in ultricies arcu.'
              path='/'
            />
            <CardItem
              src='images/img 3.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pulvinar augue, id tempus nulla. Integer dictum accumsan molestie. Suspendisse ut ultrices libero, quis vulputate orci. Nullam feugiat non diam eu sagittis. Phasellus ultricies feugiat luctus. Aliquam in ultricies arcu.'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
