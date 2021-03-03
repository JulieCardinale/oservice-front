/* eslint-disable react/no-danger */
/* Import(s) */
import PropTypes from 'prop-types';
import Text from 'components/reusables/texts/Text';

/* * * * * * *
 * * Quotes *
 *
 * @description : Text between oservice-quotes with label
 *
 * @props -------------------------------------------------
 * - label (str )  => Text label
 * - text (str )   => text between oservice-quotes
 * --------------------------------------------------------
 *
 */
const Quotes = ({ label, text }) => (
  <div className="oservice-quotes">
    {label && <Text className="oservice-text-label" content={`${label} :`} />}
    <div className="oservice-quotes__quote oservice-quotes__quote-start">“</div>
    <Text className="oservice-text-basic" content={text} />
    <div className="oservice-quotes__quote oservice-quotes__quote-end"> ”</div>
  </div>
);

/* PropTypes */
Quotes.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};
/* Export component */
export default Quotes;
