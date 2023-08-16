import { B1 } from 'components/common/typography/Typography';

import FooterDescription from './FooterDescription/FooterDescription';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterSocials from './FooterSocials/FooterSocials';

import './Footer.scss';
import './FooterMediaQueries.scss';

function Footer() {
  return (
    <footer className='footer-container'>
      <section className='footer-content'>
        <FooterDescription />
        <FooterLinks />
        <FooterSocials />
      </section>

      <B1 id='footer-stamp'>©2023 Design by Mekanism All rights reserved</B1>
    </footer>
  );
}

export default Footer;
