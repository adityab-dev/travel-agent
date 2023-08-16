import Blog from 'components/common/Blog/Blog';
import { H2 } from 'components/common/typography/Typography';
import './Blogs.scss';

import Travel from 'public/Blogs/travel.png';
import marketing from 'public/Blogs/marketing.png';
import vacation from 'public/Blogs/vacation.png';

function Blogs() {
  return (
    <section className='blogs-container'>
      <section className='blogs-heading'>
        <H2>Our Blog and Articles</H2>
      </section>

      <section className='blogs-list'>
        <Blog
          coverPic={Travel.src}
          coverAlt='Travel'
          type='Inspiration'
          heading='Travel Tips & Inspiration'
          commentsStat='250'
          viewStat='23K+ views'
        />
        <Blog
          selected={true}
          coverPic={marketing.src}
          coverAlt='Marketing'
          type='Travel'
          heading='Travel Marketing'
          commentsStat='250'
          viewStat='23K+ views'
        />
        <Blog
          coverPic={vacation.src}
          coverAlt='vacation'
          type='Vacation'
          heading='Effective Vacation Trip'
          commentsStat='250'
          viewStat='23K+ views'
        />
      </section>
    </section>
  );
}

export default Blogs;
