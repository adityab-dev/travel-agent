import { B1 } from 'components/common/typography/Typography';
import { SocialIcon } from 'components/common/Icons/Icons';

import instagram from '../FooterAssets/instagram.svg';
import linkedIn from '../FooterAssets/linkedIn.svg';
import twitter from '../FooterAssets/twitter.svg';
import youtube from '../FooterAssets/youtube.svg';

function FooterSocials() {
  return (
    <section className='footer-socials flex-col'>
      <B1>Follow Us</B1>

      <ul className='socials-list'>
        <SocialIcon
          src={instagram.src}
          alt='instagram'
        />
        <SocialIcon
          src={linkedIn.src}
          alt='linkedIn'
        />
        <SocialIcon
          src={youtube.src}
          alt='youtube'
        />
        <SocialIcon
          src={twitter.src}
          alt='twitter'
        />
      </ul>
    </section>
  );
}

export default FooterSocials;
