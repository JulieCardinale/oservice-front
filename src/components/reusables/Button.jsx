/* Import(s) */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* * * * * *
 * * Button *
 *
 * @description : A button
 *
 * @props -----------------------------------------------------------------
 * - className (str)               => Custom className
 * - submit (bool)                 => is button type submit ?
 * - onClick (dispatched func)     => On click action
 * - text (str)                    => Button text
 * - linkToPage (str)              => Image internal link, link to a page (router)
 * - aria (str)                    => clearly describe the action to anyone using an assistive technology
 * ------------------------------------------------------------------------
 *
 */
const Button = ({
  className,
  submit,
  onClick,
  text,
  icon,
  linkToPage,
  aria,
}) => (
  <>
    {
      /* IMAGE - WITH NO LINK */
      !linkToPage && (
        <button
          className={className}
          type={submit ? 'submit' : 'button'}
          onClick={onClick}
          aria-label={aria}
        >
          {text}
          {icon}
        </button>
      )
    }

    {
      /* BUTTON - WITH INTERNAL LINK, TO ANOTHER PAGE */
      linkToPage && (
        <Link to={linkToPage}>
          <button
            className={className}
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            aria-label={aria}
          >
            {text}
            {icon}
          </button>
        </Link>
      )
    }
  </>
);

/* PropTypes */
Button.propTypes = {
  className: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  text: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  linkToPage: PropTypes.string,
  aria: PropTypes.string,
};

Button.defaultProps = {
  linkToPage: '',
};

/* Export component */
export default Button;
