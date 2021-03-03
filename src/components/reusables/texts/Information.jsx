/* eslint-disable react/no-danger */
/* Import(s) */
import PropTypes from 'prop-types';
import Text from 'components/reusables/texts/Text';

/* * * * * * * * *
 * * Information *
 *
 * @description : Information, label & text
 *
 * @props --------------------------------------------------------------------------------------
 * - label (str)  => Information label
 * - text (str)   => Information text
 * ---------------------------------------------------------------------------------------------
 *
 */
const Information = ({ label, text }) => (
  <div className="oservice-information">
    <Text className="oservice-text-label" content={`${label} :`} />
    <Text className="oservice-text-basic" content={text} />
  </div>
);

/* PropTypes */
Information.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

/* Export component */
export default Information;
