/* Imports */
import { connect } from 'react-redux';
import HeaderMobile from 'components/layout/Header/HeaderMobile';
import { toggleItem } from 'actions/togglers';
import { checkIfLogged } from 'actions/users';

/* State : Reading */
const mapStateToProps = (state) => ({
  isOpenHeaderMobile: state.togglers.isOpenHeaderMobile,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
  checkIfLogged: () => dispatch(checkIfLogged()),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);