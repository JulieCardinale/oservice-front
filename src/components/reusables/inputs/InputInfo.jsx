/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * * * *
 * * Input Info *
 *
 * @description : Information to help user to complete form
 *
 * @props -----------------------------------------------------------------
 * - information (str) => input info message
 * ------------------------------------------------------------------------
 *
 */
const InputInfo = ({ information }) => (
  <>
    {information && (
      <div className="oservice-text-input-info">{information} </div>
    )}
  </>
);

/* PropTypes */
InputInfo.propTypes = {
  information: PropTypes.string,
};

/* Export component */
export default InputInfo;
