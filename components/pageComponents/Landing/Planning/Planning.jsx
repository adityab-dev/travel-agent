import { B1, PlanHeading } from 'components/common/typography/Typography';
import './Planning.scss';
import Button from 'components/common/Button/Button';
import plane from './plane.svg';
import plane_m from './plane_m.svg';
import traveller_plane from './traveller_plane.svg';
import traveller from './traveller.png';
import play from './play.svg';

function Planning() {
  return (
    <section className='planning-container'>
      <img
        className='plane-img'
        src={plane.src}
        alt='Plane'
      />
      <img
        className='plane-img-m'
        src={plane_m.src}
        alt='Plane'
      />
      <img
        className='traveller-img'
        src={traveller.src}
        alt='Traveller'
      />
      <img
        className='traveller-plane-img'
        src={traveller_plane.src}
        alt='Traveller'
      />
      <img />
      <section className='planning-content'>
        <PlanHeading>Plan Your Trip with Vantage Voyages</PlanHeading>
        <section className='planning-body'>
          <B1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </B1>

          <section className='planning-footer align-center'>
            <Button>Discover More</Button>

            <section className='planning-footer-watch align-center'>
              <Button
                type='outline'
                className='flex-center-2d'
                id='planning-play'
              >
                <img
                  src={play.src}
                  alt='Play'
                />
              </Button>
              <B1>Watch Video</B1>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Planning;
