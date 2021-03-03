/* Import(s) */
import Text from 'components/reusables/texts/Text';
import PropTypes from 'prop-types';

/* * * * * * * * * * *
 * * PageMainMessage *
 *
 * @description : Page main message
 *
 * @props --------------------------------------------------------------------------------------
 * - line01 (str)                 => message line 01
 * - line02 (str)                 => message line 02
 * - classNameLine01 (str)        => className line 01
 * - classNameLine02 (str)        => className line 02
 * ---------------------------------------------------------------------------------------------
 *
 */
const PageMainMessage = ({
  line01,
  line02,
  classNameLine01,
  classNameLine02,
}) => (
  <div>
    <Text className={classNameLine01} content={line01} />
    {line02 && <Text className={classNameLine02} content={line02} />}
  </div>
);

/* PropTypes */
PageMainMessage.propTypes = {
  line01: PropTypes.string,
  line02: PropTypes.string,
  classNameLine01: PropTypes.string,
  classNameLine02: PropTypes.string,
};

/* Export component */
export default PageMainMessage;
