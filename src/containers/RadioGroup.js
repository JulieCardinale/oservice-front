/* Imports */
import { connect } from 'react-redux';
import RadioGroup from 'components/reusables/inputs/RadioGroup';
import { formFieldOnChange } from 'actions/forms';

/* State : Reading */
const mapStateToProps = (state, ownProps) => ({
  value: state.forms[ownProps.formName][ownProps.radioGroupKey],
});

/* State : Writing */
const mapDispatchToProps = (dispatch, ownProps) => ({
  formFieldOnChange: (value) =>
    dispatch(
      formFieldOnChange(ownProps.formName, ownProps.radioGroupKey, value)
    ),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(RadioGroup);
