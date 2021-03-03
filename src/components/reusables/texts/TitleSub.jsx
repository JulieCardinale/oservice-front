/* eslint-disable react/no-danger */
/* Import(s) */
import PropTypes from 'prop-types';
import { cleanHTML } from 'selectors';

/* * * * * * * * * * * *
 * * TitleSub component *
 *
 * @description : A component to display a subtitle.
 *
 * @props --------------------------------------------------------
 * className (str) => Custom className
 * content (str)   => The subtitle
 * ---------------------------------------------------------------
 *
 * @selector -----------------------------------------------------
 * - cleanHTML => Selector against code injections
 * ---------------------------------------------------------------
 */
const TitleSub = ({ className, content }) => (
  <h2 className={className} dangerouslySetInnerHTML={cleanHTML(content)} />
);

/* PropTypes validation */
TitleSub.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

/* Export component */
export default TitleSub;
