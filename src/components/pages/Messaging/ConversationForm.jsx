/* Import(s) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Input from 'containers/Input';
import Button from 'components/reusables/Button';

/* * * * * * * * * * *
 * * Conversation Form *
 *
 * @description : form to add message in the conversation
 *
 * @props ----------------------------------------------------------------------------------------------------------------------------------------------
 * - conversationFirstMessageId    => conversation first message id (we need it because the others messages respond to the first)
 * - conversationPostId            => related post ID (we need it to the request)
 * - conversationFormSubmit        => submit the conversation form, send message.
 * - conversationFormErrorMessage  => conversation form error message
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------------------------------------------------
 * - event.preventDefault() => submit form
 * https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 */
const ConversationForm = ({
  conversationFirstMessageId,
  conversationPostId,
  conversationFormSubmit,
  conversationFormErrorMessage,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    conversationFormSubmit(conversationFirstMessageId, conversationPostId);
  };

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {conversationPostId && (
        <form
          onSubmit={handleOnSubmit}
          className="oservice-conversation-form"
          id="conversation-form"
        >
          {/* MESSAGING FORM - INPUT */}
          <Input
            className="oservice-input-conversation-form"
            type="text"
            formName="conversationForm"
            formKey="conversationFormMessageValue"
            maxLength={300}
            placeholder="Entrez votre message"
            information="Max. 300 caractères."
            errorMessage={conversationFormErrorMessage}
          />

          {/* MESSAGING FORM - SUBMIT BUTTON */}
          <Button
            className="oservice-button-conversation-form"
            submit
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            aria="Bouton pour envoyer un message"
          />
        </form>
      )}
    </>
  );
};

/* PropTypes validation */
ConversationForm.propTypes = {
  conversationFirstMessageId: PropTypes.number,
  conversationPostId: PropTypes.number,
  conversationFormSubmit: PropTypes.func,
  conversationFormErrorMessage: PropTypes.string,
};

/* Export component */
export default ConversationForm;
