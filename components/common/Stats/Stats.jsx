import { B2 } from '../typography/Typography';
import './Stats.scss';

function Stats({ imgSrc, stat }) {
  return (
    <section className='stats-container align-center'>
      <img src={imgSrc} />

      <B2>{stat}</B2>
    </section>
  );
}

export default Stats;
