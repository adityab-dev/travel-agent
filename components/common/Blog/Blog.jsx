import { useState } from 'react';
import Stats from '../Stats/Stats';
import { B1, H3 } from '../typography/Typography';
import './Blog.scss';
import comments from './comments.svg';
import views from './views.png';
import Button from '../Button/Button';

// const BtnStyles = { position: 'absolute', top: '45%', left: '30%' };

function Blog({ coverPic, coverAlt, type, heading, commentsStat, viewStat }) {
  const [cursorEntered, setCursorEntered] = useState(false);

  return (
    <article
      onPointerEnter={setCursorEntered.bind(null, true)}
      onPointerLeave={setCursorEntered.bind(null, false)}
      className={`blog-container cursor-pointer ${
        cursorEntered ? 'selected-blog' : ''
      }`}
    >
      <section className='blog-image-container'>
        <img
          src={coverPic}
          alt={coverAlt}
        />

        {cursorEntered ? <Button id='blog-btn'>Discover More</Button> : null}
      </section>

      <section className='blog-content flex-col'>
        <B1>{type}</B1>

        <H3>{heading}</H3>

        <section className='blog-stats-container'>
          <Stats
            imgSrc={comments.src}
            stat={commentsStat}
          />
          <Stats
            imgSrc={views.src}
            stat={viewStat}
          />
        </section>
      </section>
    </article>
  );
}

export default Blog;
