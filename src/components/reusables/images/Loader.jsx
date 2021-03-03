/* Import(s) */
import PropTypes from 'prop-types';
import loader from 'images/loader.svg';
import Image from 'components/reusables/images/Image';

/* * * * * * *
 * * Loader *
 *
 * @description : The loader, displayed on loading mode
 *
 * @props ---------------------------------------------------------------------
 * - active  => If this props is true, loading mode is active.
 * ----------------------------------------------------------------------------
 *
 */
const Loader = ({ active }) =>
  active && <Image className="oservice-loader" src={loader} alt="loader" />;

/* PropTypes */
Loader.propTypes = {
  active: PropTypes.bool,
};

/* Export component */
export default Loader;
