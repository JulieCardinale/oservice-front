/* Imports */
import { connect } from 'react-redux';
import LogoOService from 'components/layout/Header/LogoOService';
import { loadStart } from 'actions/load';
import { getCategoriesList } from 'actions/categories';
import { getDatabaseCitiesList } from 'actions/cities';
import { resetState } from 'actions/utils';
import { checkIfLogged } from 'actions/users';
import { toggleItem } from 'actions/togglers';
import {
  getLastAnnouncementsList,
  configureNumberOfResultsPerPage,
} from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state) => ({
  isOpenHeaderMobile: state.togglers.isOpenHeaderMobile,
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
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
  checkIfLogged: () => dispatch(checkIfLogged()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(LogoOService);
