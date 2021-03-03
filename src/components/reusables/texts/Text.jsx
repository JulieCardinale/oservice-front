/* eslint-disable react/no-danger */
/* Import(s) */
import PropTypes from 'prop-types';
import { cleanHTML } from 'selectors';

/* * * * * * * * * *
 * * Text component *
 *
 * @description : A component to display a text like a paragraph.
 *
 * @props --------------------------------------------------------
 * className (str) => Custom className
 * content (str)   => The text
 * ---------------------------------------------------------------
 *
 * @selector -----------------------------------------------------
 * - cleanHTML => Selector against code injections
 * ---------------------------------------------------------------
 *
 */
const Text = ({ className, content }) => (
  <p className={className} dangerouslySetInnerHTML={cleanHTML(content)} />
);

/* PropTypes validation */
Text.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
};

/* Export component */
export default Text;
