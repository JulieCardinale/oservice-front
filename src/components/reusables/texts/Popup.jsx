/* Import(s) */
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Button from 'components/reusables/Button';
import Text from 'components/reusables/texts/Text';

/* * * * * * *
 * * Pop up *
 *
 * @description : pop up window, to confirm, or be informed about something
 *
 * @props --------------------------------------------------------------------------------------
 * - openPopUp (func)        => open the pop up window
 * - messageLine01 (str)     => pop up message line 01
 * - messageLigne02 (str)    => pop up message line 02
 * - confirmButtonLink (str) => confirm button link to
 * - confirmText (str)       => confirm button text
 * - onClickConfirm (func)   => confirm button action
 * - cancelText (str)        => cancel button text
 * - onClickCancel (func)    => cancel button action
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - CSSTransition  => http://reactcommunity.org/react-transition-group/css-transition
 * ---------------------------------------------------------------------------------------------
 *
 */
const Popup = ({
  openPopUp,
  messageLine01,
  messageLigne02,
  confirmButtonLink,
  confirmText,
  onClickConfirm,
  cancelText,
  onClickCancel,
}) => (
  <CSSTransition
    in={openPopUp}
    timeout={300}
    classNames="pop-up-transition"
    unmountOnExit
  >
    <div className="pop-up">
      {/* POP UP - TEXT */}
      <div className="pop-up__window">
        <div className="pop-up__messages">
          <Text className="oservice-text-pop-up" content={messageLine01} />
          {messageLigne02 && (
            <Text className="oservice-text-pop-up" content={messageLigne02} />
          )}
        </div>
        {/* POP UP - BUTTONS */}
        <div className="pop-up__buttons">
          <Button
            aria="Bouton de confirmation"
            className="oservice-button-pop-up"
            text={confirmText}
            onClick={onClickConfirm}
            linkToPage={confirmButtonLink && confirmButtonLink}
          />
          <Button
            aria="Bouton d'annulation"
            className="oservice-button-pop-up"
            text={cancelText}
            onClick={onClickCancel}
          />
        </div>
      </div>
    </div>
  </CSSTransition>
);

/* PropTypes validation */
Popup.propTypes = {
  openPopUp: PropTypes.bool,
  messageLine01: PropTypes.string,
  messageLigne02: PropTypes.string,
  confirmButtonLink: PropTypes.string,
  confirmText: PropTypes.string,
  onClickConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onClickCancel: PropTypes.func,
};

/* Export component */
export default Popup;
