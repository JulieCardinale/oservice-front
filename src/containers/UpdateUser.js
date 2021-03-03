/* Imports */
import { connect } from 'react-redux';
import UpdateUser from 'components/pages/UserForm/UpdateUser';
import { getUserDetailsToUpdate } from 'actions/users';
import { storeUrlSlug } from 'actions/utils';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  storeUrlSlug: (urlSlug) => dispatch(storeUrlSlug(urlSlug)),
  getUserDetailsToUpdate: () => dispatch(getUserDetailsToUpdate()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
