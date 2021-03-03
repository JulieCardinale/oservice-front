/* Imports */
import { connect } from 'react-redux';
import { openPopUp } from 'actions/alerts';
import AnnouncementOptions from 'components/pages/MyAnnouncements/AnnouncementOptions';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  openPopUp: (announcementId) => dispatch(openPopUp(announcementId)),
});

/* Export */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementOptions);
