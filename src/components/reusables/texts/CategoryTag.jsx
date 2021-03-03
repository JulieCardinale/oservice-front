/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * * * *
 * * CategoryTag *
 *
 * @description : A component to display a category tag.
 *
 * @props ------------------------------------------
 * tagName (str)   => category tag name
 * className (str) => custom className
 * -------------------------------------------------
 */
const CategoryTag = ({ tagName, className }) => (
  <div className={className}>{tagName}</div>
);

/* PropTypes */
CategoryTag.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
};

/* Export component */
export default CategoryTag;
