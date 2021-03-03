/* Import(s) */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * NavigationLink *
 *
 * @description : a navigation link (header & footer)
 *
 * @props ----------------------------------------------------------------------
 * - linkToPage     => link to page
 * - onClick        => on click action
 * - text           => link text
 * -----------------------------------------------------------------------------
 *
 */
const NavigationLink = ({ linkToPage, onClick, text }) => (
  <NavLink
    className="oservice-text-navigation-link"
    activeClassName="active"
    to={linkToPage}
    onClick={onClick || undefined}
    exact
  >
    <p>{text}</p>
  </NavLink>
);

/* PropTypes validation */
NavigationLink.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkToPage: PropTypes.string,
  text: PropTypes.string,
};

/* Export component */
export default NavigationLink;
