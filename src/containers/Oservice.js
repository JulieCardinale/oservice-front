/* Imports */
import { connect } from 'react-redux';
import { checkIfLogged } from 'actions/users';
// eslint-disable-next-line import/no-self-import
import Oservice from 'Oservice';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  checkIfLogged: () => dispatch(checkIfLogged()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Oservice);
