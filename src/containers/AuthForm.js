/* Imports */
import { connect } from 'react-redux';
import AuthForm from 'components/pages/UnconnectedHome/AuthForm';
import { authFormLogin } from 'actions/users';

/* State : Reading */
const mapStateToProps = (state) => ({
  isVisiblePassword: state.togglers.isVisiblePassword,
  isOpenHeaderMobile: state.togglers.isOpenHeaderMobile,
  authFormErrorsMessages: state.alerts.authFormErrors,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  authFormLogin: () => dispatch(authFormLogin()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
