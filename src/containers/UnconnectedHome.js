/* Imports */
import { connect } from 'react-redux';
import UnconnectedHome from 'components/pages/UnconnectedHome';
import { getLastThreeAnnouncements } from 'actions/announcements';
import { loadStart } from 'actions/load';
import { openPopUp, closePopUp } from 'actions/alerts';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  lastThreeAnnouncements: state.announcements.lastThreeAnnouncements,
  openPopUp: state.alerts.openPopUp,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getLastThreeAnnouncements: () => dispatch(getLastThreeAnnouncements()),
  openPopUp: () => dispatch(openPopUp()),
  closePopUp: () => dispatch(closePopUp()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedHome);
