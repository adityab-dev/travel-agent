import hamburgMenu from '../Assets/hamburg.svg';
import navbarSearch from '../Assets/navbar-search.svg';
import navbarCall from '../Assets/navbar-call.svg';

function NavbarIcons() {
  return (
    <section className='navbar-icons'>
      <img
        src={navbarSearch.src}
        alt='search'
      />
      <img
        src={navbarCall.src}
        alt='contact us'
      />
      <img
        src={hamburgMenu.src}
        alt='Menu'
      />
    </section>
  );
}

export default NavbarIcons;
