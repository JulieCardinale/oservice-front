/* Imports */
import { connect } from 'react-redux';
import ConversationMessagesList from 'components/pages/Messaging/ConversationMessagesList';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoadingMessagesList: state.load.isLoadingMessagesList,
});

/* State : Writing */
const mapDispatchToProps = () => ({});

/* Export */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationMessagesList);
