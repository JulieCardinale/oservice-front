/* Imports */
import { connect } from 'react-redux';
import HeaderNav from 'components/layout/Header/HeaderNav';
import { loadStart } from 'actions/load';
import { getCategoriesList } from 'actions/categories';
import { getDatabaseCitiesList } from 'actions/cities';
import { resetState } from 'actions/utils';
import {
  getLastAnnouncementsList,
  configureNumberOfResultsPerPage,
} from 'actions/announcements';

/* State : Reading */
const mapStateToProps = () => ({});

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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
