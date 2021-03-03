/* Imports */
import { connect } from 'react-redux';
import Select from 'components/reusables/inputs/Select';
import { toggleItem } from 'actions/togglers';
import { formFieldOnChange } from 'actions/forms';
import { createCityTerm } from 'actions/cities';
import {
  configureNumberOfResultsPerPage,
  getLastAnnouncementsList,
} from 'actions/announcements';

/* State : Reading */
const mapStateToProps = (state, ownProps) => ({
  selectedItem: state.forms[ownProps.formName][ownProps.nameKey],
  announcementOptions: state.togglers[ownProps.togglerKey],
});

/* State : Writing */
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
  formFieldOnChange: (value, formKey) =>
    dispatch(formFieldOnChange(ownProps.formName, formKey, value)),
  createCityTerm: () => dispatch(createCityTerm()),
  configureNumberOfResultsPerPage: () =>
    dispatch(configureNumberOfResultsPerPage()),
  getLastAnnouncementsList: () => dispatch(getLastAnnouncementsList()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Select);
