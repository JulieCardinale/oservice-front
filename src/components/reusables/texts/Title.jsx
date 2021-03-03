/* eslint-disable react/no-danger */
/* Import(s) */
import { cleanHTML } from 'selectors';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * Title component *
 *
 * @description : A component to display a title.
 *
 * @props --------------------------------------------------------
 * className (str) => Custom className
 * content (str)   => The title
 * ---------------------------------------------------------------
 *
 * @selector -----------------------------------------------------
 * - cleanHTML => Selector against code injections
 * ---------------------------------------------------------------
 */
const Title = ({ className, content }) => (
  <h1 className={className} dangerouslySetInnerHTML={cleanHTML(content)} />
);

/* PropTypes validation */
Title.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Title.defaultProps = {
  content: '',
};

/* Export component */
export default Title;
