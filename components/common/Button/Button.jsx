import { B1 } from '../typography/Typography';
import './Button.scss';

const Button = ({ children, type = 'fill', ...extraProps }) => {
  return (
    <button
      className={'Button ' + `${type} cursor-pointer`}
      {...extraProps}
    >
      <B1>{children}</B1>
    </button>
  );
};

export default Button;
