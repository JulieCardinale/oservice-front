/* Imports */
import { connect } from 'react-redux';
import TextArea from 'components/reusables/inputs/TextArea';
import { formFieldOnChange } from 'actions/forms';

/* State : Reading */
const mapStateToProps = (state, ownProps) => ({
  value: state.forms[ownProps.formName][ownProps.formKey],
});

/* State : Writing */
const mapDispatchToProps = (dispatch, ownProps) => ({
  formFieldOnChange: (value) =>
    dispatch(formFieldOnChange(ownProps.formName, ownProps.formKey, value)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
