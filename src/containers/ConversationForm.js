/* Imports */
import { connect } from 'react-redux';
import ConversationForm from 'components/pages/Messaging/ConversationForm';
import { conversationFormSubmit } from 'actions/forms';

/* State : Reading */
const mapStateToProps = (state) => ({
  conversationFormErrorMessage:
    state.alerts.conversationFormErrors.conversationFormErrorMessage,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  conversationFormSubmit: (conversationFirstMessageId, conversationPostId) =>
    dispatch(
      conversationFormSubmit(conversationFirstMessageId, conversationPostId)
    ),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm);
