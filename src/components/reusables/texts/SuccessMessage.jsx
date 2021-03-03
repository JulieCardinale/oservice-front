/* Import(s) */
import { CSSTransition } from 'react-transition-group';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollToElement } from 'selectors';
import Text from 'components/reusables/texts/Text';
import PropTypes from 'prop-types';

/* * * * * *
 * * Select *
 *
 * @description : Input type select
 *
 * @props --------------------------------------------------------------------------------------
 * - isVisibleSuccessMessage (bool)           => is visible or not success message ?
 * - title (str)                              => Success message title
 * - content (str)                            => Success message content
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - CSSTransition  => http://reactcommunity.org/react-transition-group/css-transition
 * ---------------------------------------------------------------------------------------------
 *
 */
const SuccessMessage = ({ isVisibleSuccessMessage, title, content }) => (
  <CSSTransition
    in={isVisibleSuccessMessage}
    timeout={0}
    unmountOnExit
    onEnter={() => scrollToElement('.oservice-success-message', 'smooth')}
  >
    <div className="oservice-success-message">
      {/* SUCCESS MESSAGE - TITLE */}
      <Text className="oservice-text-success-title" content={title} />
      {/* SUCCESS MESSAGE - ICON */}
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="oservice-text-success-icon"
      />
      {/* SUCCESS MESSAGE - CONTENT */}
      <Text className="oservice-text-success-content" content={content} />
    </div>
  </CSSTransition>
);

/* PropTypes validation */
SuccessMessage.propTypes = {
  isVisibleSuccessMessage: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
};

/* Export component */
export default SuccessMessage;
