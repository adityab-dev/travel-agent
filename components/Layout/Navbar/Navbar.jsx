import Button from 'components/common/Button/Button';
import { Li, Logo } from 'components/common/typography/Typography';
import './Navbar.scss';
import NavbarIcons from './NavbarIcons/NavbarIcons';

function Navbar() {
  return (
    <header className='navbar-container align-center'>
      <nav className='navbar'>
        <Logo />
        <section className='nav-right'>
          <ul className='nav-list align-center'>
            <Li>Home</Li>
            <Li>About Us</Li>
            <Li>Service</Li>
            <Li>Shop</Li>
            <Li>Blog</Li>
            <Li>Contact</Li>
          </ul>
          <Button type='fill'>Contact Us</Button>
        </section>
        <NavbarIcons />
      </nav>
    </header>
  );
}

export default Navbar;
