/* Imports */
import { connect } from 'react-redux';
import Input from 'components/reusables/inputs/Input';
import { toggleItem } from 'actions/togglers';
import { formFieldOnChange } from 'actions/forms';
import { getGeoApiCitiesListUsingPostcode } from 'actions/cities';

/* State : Reading */
const mapStateToProps = (state, ownProps) => ({
  isVisiblePassword: state.togglers.isVisiblePassword,
  value: state.forms[ownProps.formName][ownProps.formKey],
});

/* State : Writing */
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
  formFieldOnChange: (value) =>
    dispatch(formFieldOnChange(ownProps.formName, ownProps.formKey, value)),
  getGeoApiCitiesListUsingPostcode: (postcode, formName, linkedCityFieldName) =>
    dispatch(
      getGeoApiCitiesListUsingPostcode(postcode, formName, linkedCityFieldName)
    ),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Input);
