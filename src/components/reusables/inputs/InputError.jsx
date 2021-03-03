/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * * * *
 * * Input Error *
 *
 * @description : Input Error message
 *
 * @props -----------------------------------------------------------------
 * - errorMessage (str) => input error message
 * ------------------------------------------------------------------------
 *
 */
const InputError = ({ errorMessage }) => (
  <>
    {errorMessage && (
      <div className="oservice-text-input-error">{errorMessage}</div>
    )}
  </>
);

/* PropTypes */
InputError.propTypes = {
  errorMessage: PropTypes.string,
};

/* Export component */
export default InputError;
