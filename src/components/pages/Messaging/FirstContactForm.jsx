/* Import(s) */
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from 'components/reusables/Button';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import TextArea from 'containers/TextArea';
import mainMessages from 'datas/mainMessages';
import successMessages from 'datas/successMessages';
import SuccessMessage from 'containers/SuccessMessage';
import Loader from 'components/reusables/images/Loader';

/* * * * * * * * * * * *
 * * First contact form *
 *
 * @description : First contact form. To reply to a particular announcement for the first time.
 *
 * @props --------------------------------------------------------------------------------------
 * - loadStart                => start loading mode
 * - firstContactFormSubmit        => submit contact form
 * - toggleItem               => display or not first contact form
 * - contactFormErrorMessage  => error message for contact form
 * - isLoadingOnSubmit        => is loading or not on submit ?
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - CSSTransition  => http://reactcommunity.org/react-transition-group/css-transition
 * ---------------------------------------------------------------------------------------------
 */
const FirstContactForm = ({
  loadStart,
  firstContactFormSubmit,
  isVisibleContactForm,
  toggleItem,
  contactFormErrorMessage,
  isLoadingOnSubmit,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    loadStart('isLoadingOnSubmit');
    firstContactFormSubmit();
  };

  /* * * * *
   * * JSX *
   */
  return (
    <CSSTransition
      in={isVisibleContactForm}
      timeout={300}
      classNames="oservice-first-contact-form-transition"
      unmountOnExit
    >
      <div className="oservice-first-contact-form">
        <div className="oservice-first-contact-form__background">
          <form
            onSubmit={handleOnSubmit}
            className="oservice-first-contact-form__form-box"
            id="oservice-first-contact-form"
          >
            {/* FIRST CONTACT FORM - CLOSE BUTTON */}
            <Button
              className="oservice-button-close"
              onClick={() => toggleItem('isVisibleContactForm')}
              icon={<FontAwesomeIcon icon={faTimesCircle} />}
              aria="Bouton pour fermer la fenêtre"
            />

            {/* FIRST CONTACT FORM - MAIN MESSAGE */}
            <PageMainMessage
              line01={mainMessages.firstContactForm.line01}
              line02={mainMessages.firstContactForm.line02}
              classNameLine01="oservice-text-main-message--line01"
              classNameLine02="oservice-text-main-message--line02"
            />

            {/* FIRST CONTACT FORM - INPUT */}
            <TextArea
              className="oservice-input-basic"
              label="Votre message *"
              formName="firstContactForm"
              formKey="firstContactFormMessageValue"
              maxLength={300}
              rows={5}
              placeholder="Entrez votre message"
              information="Max. 300 caractères."
              errorMessage={contactFormErrorMessage}
            />

            {/* FIRST CONTACT FORM - LOADER ON SUBMIT */}
            <Loader active={isLoadingOnSubmit} />

            {/* FIRST CONTACT FORM - SUCCESS MESSAGE */}
            <SuccessMessage
              title={successMessages.firstContactForm.title}
              content={successMessages.firstContactForm.content}
            />

            {/* FIRST CONTACT FORM - SUBMIT BUTTON */}
            <Button
              aria="Bouton pour envoyer le message"
              className="oservice-button-small"
              submit
              text="Envoyer"
            />
          </form>
        </div>
      </div>
    </CSSTransition>
  );
};

/* Props Validation */
FirstContactForm.propTypes = {
  loadStart: PropTypes.func,
  firstContactFormSubmit: PropTypes.func,
  isVisibleContactForm: PropTypes.bool,
  toggleItem: PropTypes.func,
  contactFormErrorMessage: PropTypes.string,
  isLoadingOnSubmit: PropTypes.bool,
};

/* Export component */
export default FirstContactForm;
