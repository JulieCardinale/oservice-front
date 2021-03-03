/* Imports */
import { connect } from 'react-redux';
import MyProfile from 'components/pages/MyProfile';
import { loadStart } from 'actions/load';
import { getMyDetails, deleteUser } from 'actions/users';
import { openPopUp, closePopUp } from 'actions/alerts';

/* State : Reading */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  myDetailsList: state.users.myDetailsList,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  loadStart: (loaderKey) => dispatch(loadStart(loaderKey)),
  getMyDetails: () => dispatch(getMyDetails()),
  openPopUp: (userId) => dispatch(openPopUp(userId)),
  closePopUp: () => dispatch(closePopUp()),
  deleteUser: () => dispatch(deleteUser()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
