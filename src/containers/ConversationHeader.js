/* Imports */
import { connect } from 'react-redux';
import ConversationHeader from 'components/pages/Messaging/ConversationHeader';
import { toggleItem } from 'actions/togglers';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(ConversationHeader);
