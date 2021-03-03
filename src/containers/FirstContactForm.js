/* Imports */
import { connect } from 'react-redux';
import FirstContactForm from 'components/pages/Messaging/FirstContactForm';
import { loadStart } from 'actions/load';
import { firstContactFormSubmit } from 'actions/forms';
import { toggleItem } from 'actions/togglers';

/* State : Reading */
const mapStateToProps = (state) => ({
  isVisibleContactForm: state.togglers.isVisibleContactForm,
  isLoadingOnSubmit: state.load.isLoadingOnSubmit,
  contactFormErrorMessage:
    state.alerts.contactFormErrors.contactFormErrorMessage,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  firstContactFormSubmit: () => dispatch(firstContactFormSubmit()),
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(FirstContactForm);
