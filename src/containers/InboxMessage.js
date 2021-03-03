/* Imports */
import { connect } from 'react-redux';
import InboxMessage from 'components/pages/Messaging/InboxMessage';
import { toggleItem } from 'actions/togglers';
import { loadStart } from 'actions/load';
import {
  getConversationFirstMessage,
  getConversationMessagesList,
} from 'actions/messaging';

/* State : Reading */
const mapStateToProps = (state) => ({
  conversationFirstMessage: state.messaging.conversationFirstMessage,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  getConversationFirstMessage: (conversationFirstMessageId) =>
    dispatch(getConversationFirstMessage(conversationFirstMessageId)),
  getConversationMessagesList: (conversationFirstMessageId) =>
    dispatch(getConversationMessagesList(conversationFirstMessageId)),
  toggleItem: (toggleKey) => dispatch(toggleItem(toggleKey)),
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(InboxMessage);
