/* Imports */
import { connect } from 'react-redux';
import AnnouncementForm from 'components/pages/AnnouncementForm';
import { loadStart } from 'actions/load';
import { getCategoriesList } from 'actions/categories';
import { resetState } from 'actions/utils';
import { announcementFormCheckErrors } from 'actions/alerts';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  isLoadingCategoriesList: state.load.isLoadingCategoriesList,
  announcementFormErrors: state.alerts.announcementFormErrors,
  categoriesList: state.categories.categoriesList,
  citiesList: state.cities.citiesList,
  isLoadingOnSubmit: state.load.isLoadingOnSubmit,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  resetState: (property) => dispatch(resetState(property)),
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getCategoriesList: () => dispatch(getCategoriesList()),
  announcementFormCheckErrors: (formMode) =>
    dispatch(announcementFormCheckErrors(formMode)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);
