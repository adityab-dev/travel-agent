import './typography.scss';
import logo from '../../Layout/Navbar/Assets/logo.svg';

const H1 = ({ children, ...extraProps }) => {
  return (
    <h1
      {...extraProps}
      className='h1 font-primary'
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, ...extraProps }) => {
  return (
    <h2
      {...extraProps}
      className='h2 font-primary'
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, ...extraProps }) => {
  return (
    <h3
      {...extraProps}
      className='h3 font-primary'
    >
      {children}
    </h3>
  );
};

const H4 = ({ children, ...extraProps }) => {
  return (
    <h4
      {...extraProps}
      className='h4 font-primary'
    >
      {children}
    </h4>
  );
};

const B1 = ({ children, ...extraProps }) => {
  return (
    <p
      {...extraProps}
      className='b1 font-primary'
    >
      {children}
    </p>
  );
};

const B2 = ({ children, ...extraProps }) => {
  return (
    <p
      {...extraProps}
      className='b2 font-primary'
    >
      {children}
    </p>
  );
};

const Li = ({ children, ...extraProps }) => {
  return (
    <li
      {...extraProps}
      className='li cursor-pointer'
    >
      <B1 style={{ color: 'black' }}>{children}</B1>
    </li>
  );
};

const Logo = () => {
  return (
    <img
      className='logo cursor-pointer'
      src={logo.src}
      alt='Vantage Voyages'
    />
  );
};

const FeedLabel = ({ children, ...extraProps }) => {
  return (
    <h3
      className='feed-label cursor-pointer'
      {...extraProps}
    >
      {children}
    </h3>
  );
};

export { H1, H2, H3, H4, B1, B2, Li, Logo, FeedLabel };
