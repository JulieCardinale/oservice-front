/* Imports */
import { connect } from 'react-redux';
import PageTitle from 'configuration/PageTitle';

/* State : Reading */
const mapStateToProps = (state) => ({
  urlSlug: state.utils.urlSlug,
});

/* State : Writing */
const mapDispatchToProps = () => ({});

/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
