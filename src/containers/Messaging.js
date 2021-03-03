/* Imports */
import { connect } from 'react-redux';
import Messaging from 'components/pages/Messaging';
import {
  getMyInboxMessagesListForMyAnnouncements,
  getMyInboxMessagesListForOtherAnnouncements,
} from 'actions/messaging';
import { loadStart } from 'actions/load';
import { checkIfLogged } from 'actions/users';

/* State : Reading */
const mapStateToProps = (state) => ({
  myInboxMessagesListForMyAnnouncements:
    state.messaging.myInboxMessagesListForMyAnnouncements,
  myInboxMessagesListForOtherAnnouncements:
    state.messaging.myInboxMessagesListForOtherAnnouncements,
  conversationMessagesList: state.messaging.conversationMessagesList,
  isLoading: state.load.isLoading,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  getMyInboxMessagesListForMyAnnouncements: () =>
    dispatch(getMyInboxMessagesListForMyAnnouncements()),
  getMyInboxMessagesListForOtherAnnouncements: () =>
    dispatch(getMyInboxMessagesListForOtherAnnouncements()),
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  checkIfLogged: () => dispatch(checkIfLogged()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
