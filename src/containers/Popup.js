/* Imports */
import { connect } from 'react-redux';
import Popup from 'components/reusables/texts/Popup';

/*  State : Reading */
const mapStateToProps = (state) => ({
  openPopUp: state.alerts.openPopUp,
});

/* State : Writing */
const mapDispatchToProps = () => ({});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
