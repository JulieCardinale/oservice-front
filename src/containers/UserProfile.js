/* Imports */
import { connect } from 'react-redux';
import UserProfile from 'components/pages/UserProfile';
import { getUserDetailsUsingUrlSlug } from 'actions/users';
import { storeUrlSlug } from 'actions/utils';
import { loadStart } from 'actions/load';

/* State : Reading */
const mapStateToProps = (state) => ({
  userDetails: state.users.userDetails,
  isLoading: state.load.isLoading,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  storeUrlSlug: (urlSlug) => dispatch(storeUrlSlug(urlSlug)),
  getUserDetailsUsingUrlSlug: () => dispatch(getUserDetailsUsingUrlSlug()),
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
