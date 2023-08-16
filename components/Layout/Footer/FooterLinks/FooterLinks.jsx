import { Li } from 'components/common/typography/Typography';

function FooterLinks() {
  return (
    <section className='footer-links'>
      <ul className='link-list-1 flex-col'>
        <Li>Home</Li>
        <Li>About Us</Li>
        <Li>Destination</Li>
        <Li>Community</Li>
        <Li>Contact Us</Li>
      </ul>

      <ul className='link-list-2 flex-col'>
        <Li>Legal</Li>
        <Li>Discover</Li>
        <Li>Special deals</Li>
        <Li>Community</Li>
        <Li>Blog</Li>
      </ul>
    </section>
  );
}

export default FooterLinks;
