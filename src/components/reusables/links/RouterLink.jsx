/* Import(s) */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from 'components/reusables/texts/Text';

/* * * * * * * * * * * *
 * * RouterLink component *
 *
 * @description : A component to display a router link.
 *
 * @props ------------------------------------------
 * path (str)      => Page path
 * text (str)      => Router link text
 * className (str) => A custom className
 * -------------------------------------------------
 */
const RouterLink = ({ path, text, className }) => (
  <Link to={path}>
    <Text className={className} content={text} />
  </Link>
);

/* PropTypes validation */
RouterLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

/* Export component */
export default RouterLink;
