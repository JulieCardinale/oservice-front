/* Imports */
import { connect } from 'react-redux';
import SuccessMessage from 'components/reusables/texts/SuccessMessage';

/* State : Reading */
const mapStateToProps = (state) => ({
  isVisibleSuccessMessage: state.alerts.isVisibleSuccessMessage,
});

/* State : Writing */
const mapDispatchToProps = () => ({});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(SuccessMessage);
