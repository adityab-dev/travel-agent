import { H1 } from 'components/common/typography/Typography';
import './Hero.scss';
import Button from 'components/common/Button/Button';

const Hero = () => {
  return (
    <div className='hero'>
      <H1>Hero</H1>
      <Button onClick={() => console.log('asdasd')}>Contact Us</Button>
    </div>
  );
};

export default Hero;
