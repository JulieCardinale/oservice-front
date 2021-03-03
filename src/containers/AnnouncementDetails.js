/* Imports */
import { connect } from 'react-redux';
import AnnouncementDetails from 'components/pages/AnnouncementDetails';
import { loadStart } from 'actions/load';
import { storeUrlSlug } from 'actions/utils';
import { getAnnouncementDetailsUsingUrlSlug } from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state) => ({
  announcementDetails: state.announcements.announcementDetails,
  isLoading: state.load.isLoading,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  storeUrlSlug: (urlSlug) => dispatch(storeUrlSlug(urlSlug)),
  getAnnouncementDetailsUsingUrlSlug: () =>
    dispatch(getAnnouncementDetailsUsingUrlSlug()),
});

/* Export */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementDetails);
