/* Imports */
import { connect } from 'react-redux';
import LastAnnouncements from 'components/pages/LastAnnouncements';
import { loadStart } from 'actions/load';
import { getCategoriesList } from 'actions/categories';
import { getDatabaseCitiesList } from 'actions/cities';
import { resetState } from 'actions/utils';
import {
  getLastAnnouncementsList,
  configureNumberOfResultsPerPage,
} from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  lastAnnouncementsList: state.announcements.lastAnnouncementsList,
  categoriesList: state.categories.categoriesList,
  citiesList: state.cities.citiesList,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getCategoriesList: () => dispatch(getCategoriesList()),
  getDatabaseCitiesList: () => dispatch(getDatabaseCitiesList()),
  getLastAnnouncementsList: () => dispatch(getLastAnnouncementsList()),
  configureNumberOfResultsPerPage: () =>
    dispatch(configureNumberOfResultsPerPage()),
  resetState: (property) => dispatch(resetState(property)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(LastAnnouncements);
