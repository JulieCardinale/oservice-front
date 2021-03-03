/* Imports */
import { connect } from 'react-redux';
import Header from 'components/layout/Header';
import { toggleItem } from 'actions/togglers';

/* State : Reading */
const mapStateToProps = (state) => ({
  isOpenHeaderMobile: state.togglers.isOpenHeaderMobile,
});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  toggleItem: (togglerKey) => dispatch(toggleItem(togglerKey)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Header);
