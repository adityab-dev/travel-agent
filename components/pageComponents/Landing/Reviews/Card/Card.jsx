import { useState } from 'react';
import './Card.scss';
import { B1, B2 } from 'components/common/typography/Typography';
import star from './star.svg';
import quotes from './quotes.svg';

function Card(props) {
  const { profileImg, name, address, rating, review } = props;

  const [cursorEntered, setCursorEntered] = useState(false);

  return (
    <article
      onPointerEnter={setCursorEntered.bind(null, true)}
      onPointerLeave={setCursorEntered.bind(null, false)}
      className={`blog-container review-card-container cursor-pointer ${
        cursorEntered ? 'selected-blog' : ''
      }`}
    >
      <section className='align-center review-card-header'>
        <img
          className='review-profile-pic'
          src={profileImg}
          alt='profile'
        />

        <section className='review-creds'>
          <B1>{name}</B1>
          <B2>{address}</B2>
        </section>

        <B2 id='review-rating'>
          {rating}
          <img
            src={star.src}
            alt='star'
          />
        </B2>
      </section>

      <img
        className='review-quotes'
        src={quotes.src}
        alt='quotes'
      />

      <B1 id='review-text'>{review}</B1>
    </article>
  );
}

export default Card;
