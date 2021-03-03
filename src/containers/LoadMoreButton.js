/* Imports */
import { connect } from 'react-redux';
import LoadMoreButton from 'components/pages/LastAnnouncements/LoadMoreButton';
import { loadStart } from 'actions/load';
import { getMoreAnnouncements } from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoadingMore: state.load.isLoadingMore,
  numberOfTotalResults: state.announcements.numberOfTotalResults,
  numberOfDisplayedResults: state.announcements.numberOfDisplayedResults,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getMoreAnnouncements: () => dispatch(getMoreAnnouncements()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
