/* eslint-disable jsx-a11y/label-has-associated-control */
/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * *
 * * Burger *
 *
 * @description : Animated button to display or hide navigation on mobile on click
 *
 * @props --------------------------------------------------------------------------------------
 * - isOpenHeaderMobile (bool)        => is open header mobile or not ?
 * - toggleItem (dispatched func)     => change state property isOpenHeaderMobile
 * - checkIfLogged (dispatched func)  => check if user is logged.
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - classLiss.toggle       => add or delete a class on element. Here on body, on mobiles when nav is displayed.
 * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * ---------------------------------------------------------------------------------------------
 *
 */
const Burger = ({ checkIfLogged, isOpenHeaderMobile, toggleItem }) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnclick = () => {
    checkIfLogged();
    toggleItem('isOpenHeaderMobile');
    document.body.classList.toggle('body-overflow--hidden');
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div
      className="wrapper"
      onClick={handleOnclick}
      onKeyDown={handleOnclick}
      role="button"
      tabIndex={0}
      aria-label="Bouton burger"
    >
      <label htmlFor="burger" />
      <input
        id="burger"
        name="burger"
        type="checkbox"
        checked={isOpenHeaderMobile}
        readOnly
      />

      <div className="bun">
        <div className="burger" />
      </div>
    </div>
  );
};

/* PropTypes */
Burger.propTypes = {
  checkIfLogged: PropTypes.func,
  isOpenHeaderMobile: PropTypes.bool,
  toggleItem: PropTypes.func,
};

/* Export component */
export default Burger;
