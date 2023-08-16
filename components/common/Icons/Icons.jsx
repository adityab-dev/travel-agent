import './Icons.scss';

const HamburgerIcon = ({ children }) => {
  return (
    <div className='ham-icon cursor-pointer flex-center-2d'>{children}</div>
  );
};

const SocialIcon = ({ src, alt, ...otherProps }) => {
  return (
    <article
      className='social-icon flex-center-2d cursor-pointer'
      {...otherProps}
    >
      <img
        src={src}
        alt={alt}
      />
    </article>
  );
};

export { HamburgerIcon, SocialIcon };
