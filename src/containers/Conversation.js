/* Imports */
import { connect } from 'react-redux';
import Conversation from 'components/pages/Messaging/Conversation';

/* State : Reading */
const mapStateToProps = (state) => ({
  conversationFirstMessage: state.messaging.conversationFirstMessage,
  conversationMessagesList: state.messaging.conversationMessagesList,
  isVisibleConversation: state.togglers.isVisibleConversation,
});

/* State : Writing */
const mapDispatchToProps = () => ({});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
