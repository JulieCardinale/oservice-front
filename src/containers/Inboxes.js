/* Imports */
import { connect } from 'react-redux';
import Inboxes from 'components/pages/Messaging/Inboxes';
import {
  getMyInboxMessagesListForMyAnnouncements,
  getMyInboxMessagesListForOtherAnnouncements,
} from 'actions/messaging';

/* State : Reading */
const mapStateToProps = (state) => ({
  myInboxMessagesListForMyAnnouncements:
    state.messaging.myInboxMessagesListForMyAnnouncements,
  myInboxMessagesListForOtherAnnouncements:
    state.messaging.myInboxMessagesListForOtherAnnouncements,
  isVisibleConversation: state.togglers.isVisibleConversation,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  getMyInboxMessagesListForMyAnnouncements: () =>
    dispatch(getMyInboxMessagesListForMyAnnouncements()),
  getMyInboxMessagesListForOtherAnnouncements: () =>
    dispatch(getMyInboxMessagesListForOtherAnnouncements()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Inboxes);
