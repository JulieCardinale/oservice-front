/* Imports */
import { connect } from 'react-redux';
import AnnouncementDetailsInfos from 'components/pages/AnnouncementDetails/AnnouncementDetailsInfos';
import { checkIfIhaveAlreadySentMessage } from 'actions/messaging';
import { toggleItem } from 'actions/togglers';

/* State : Reading */
const mapStateToProps = (state) => ({
  myMessagesListForThisAnnouncement:
    state.messaging.myMessagesListForThisAnnouncement,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  checkIfIhaveAlreadySentMessage: () =>
    dispatch(checkIfIhaveAlreadySentMessage()),
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
});

/* Export */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementDetailsInfos);
