/* Connect import */
import { connect } from 'react-redux';
import UserForm from 'components/pages/UserForm';
import { loadStart } from 'actions/load';
import { userFormCheckErrors } from 'actions/alerts';
import { resetState } from 'actions/utils';
import { toggleItem } from 'actions/togglers';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  citiesList: state.cities.citiesList,
  isVisiblePassword: state.togglers.isVisiblePassword,
  isLoadingOnSubmit: state.load.isLoadingOnSubmit,
  userFormPassword: state.forms.userForm.userFormPassword,
  userFormPasswordConfirmation:
    state.forms.userForm.userFormPasswordConfirmation,
  userFormErrorsMessages: state.alerts.userFormErrors,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  userFormCheckErrors: (formMode) => dispatch(userFormCheckErrors(formMode)),
  resetState: (property) => dispatch(resetState(property)),
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
