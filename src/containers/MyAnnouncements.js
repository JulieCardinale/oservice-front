/* Imports */
import { connect } from 'react-redux';
import MyAnnouncements from 'components/pages/MyAnnouncements';
import { openPopUp, closePopUp } from 'actions/alerts';
import { loadStart } from 'actions/load';
import {
  getMyAnnouncementsList,
  deleteAnnouncement,
} from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state) => ({
  openPopUp: state.alerts.openPopUp,
  isLoading: state.load.isLoading,
  myAnnouncementsList: state.announcements.myAnnouncementsList,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  openPopUp: (selectedElementId) => dispatch(openPopUp(selectedElementId)),
  closePopUp: () => dispatch(closePopUp()),
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getMyAnnouncementsList: () => dispatch(getMyAnnouncementsList()),
  deleteAnnouncement: () => dispatch(deleteAnnouncement()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(MyAnnouncements);
