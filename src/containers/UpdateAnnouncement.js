/* Imports */
import { connect } from 'react-redux';
import UpdateAnnouncement from 'components/pages/AnnouncementForm/UpdateAnnouncement';
import { storeUrlSlug } from 'actions/utils';
import { getAnnouncementDetailsToUpdate } from 'actions/announcements';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  storeUrlSlug: (urlSlug) => dispatch(storeUrlSlug(urlSlug)),
  getAnnouncementDetailsToUpdate: () =>
    dispatch(getAnnouncementDetailsToUpdate()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(UpdateAnnouncement);
