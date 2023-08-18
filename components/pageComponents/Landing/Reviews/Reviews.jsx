import { B1, H2 } from 'components/common/typography/Typography';
import Card from './Card/Card';
import './Reviews.scss';
import profile_1 from './profile_1.svg';
import profile_2 from './profile_2.png';
import avatars_list from './avatars_list.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';

function Reviews() {
  return (
    <section className='review-container'>
      <H2 id='review-header'>What are the client saying about us</H2>

      <section className='avatars-list-container flex-col'>
        <img
          className='avatars_list'
          src={avatars_list.src}
          alt='Avatars List'
        />

        <B1>12k+ Review</B1>

        <section className='scroll-arrows'>
          <img
            className='left-arrow cursor-pointer'
            src={left_arrow.src}
            alt='Left Arrow'
          />

          <img
            className='right-arrow cursor-pointer'
            src={right_arrow.src}
            alt='Right Arrow'
          />
        </section>
      </section>

      <section className='review-cards-list'>
        <Card
          profileImg={profile_1.src}
          name='Zonalos Neko'
          address='Park Street, USA'
          rating='4.5'
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <Card
          profileImg={profile_2.src}
          name='Liri Neon'
          address='Star Avenue, USA'
          rating='4.5'
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </section>
    </section>
  );
}

export default Reviews;
