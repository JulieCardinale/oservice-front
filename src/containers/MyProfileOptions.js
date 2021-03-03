/* Imports */
import { connect } from 'react-redux';
import { openPopUp } from 'actions/alerts';
import myProfileOptions from 'components/pages/MyProfile/MyProfileOptions';

/* State : Reading */
const mapStateToProps = () => ({});

/* State : Writing */
const mapDispatchToProps = (dispatch) => ({
  openPopUp: (announcementId) => dispatch(openPopUp(announcementId)),
});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(myProfileOptions);
