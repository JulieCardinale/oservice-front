/* Imports */
import { connect } from 'react-redux';
import PictureLoader from 'components/reusables/inputs/PictureLoader';
import { formFieldOnChange } from 'actions/forms';

/* State : Reading */
const mapStateToProps = (state, ownProps) => ({
  picturePreview: state.forms[ownProps.formName][ownProps.previewKey],
});

/* State : Writing */
const mapDispatchToProps = (dispatch, ownProps) => ({
  formFieldOnChange: (pictureLoaderFormValue, pictureLoaderFormKey) =>
    dispatch(
      formFieldOnChange(
        ownProps.formName,
        pictureLoaderFormKey,
        pictureLoaderFormValue
      )
    ),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(PictureLoader);
