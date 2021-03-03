/* Import(s) */
import PropTypes from 'prop-types';
import HeaderNav from 'containers/HeaderNav';
import AuthForm from 'containers/AuthForm';
import Button from 'components/reusables/Button';

/* * * * * * * * * *
 * * Header Mobile *
 *
 * @description : Header mobile version
 *
 * @props --------------------------------------------------------------------------------------
 * - userIsLogged (bool)              => userIsLogged information
 * - isOpenHeaderMobile (bool)        => is open header mobile or not ?
 * - toggleItem (dispatched func)     => change state property isOpenHeaderMobile
 * - checkIfLogged (dispatched func)  => check if user is logged.
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - sessionStorage.clear()  => clear userDatas from storage
 * https://developer.mozilla.org/fr/docs/Web/API/Storage/clear
 * - window.location         => redirect to /connexion page
 * https://developer.mozilla.org/fr/docs/Web/API/window/location
 * - classLiss.toggle       => add or delete a class on element. Here on body, on mobiles when nav is displayed.
 * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * ---------------------------------------------------------------------------------------------
 *
 */
const HeaderMobile = ({
  userIsLogged,
  toggleItem,
  isOpenHeaderMobile,
  checkIfLogged,
}) => {
  /* * * * * * *
   * * handlers *
   */
  const handleOnclick = () => {
    checkIfLogged();
    toggleItem('isOpenHeaderMobile');
    document.body.classList.toggle('body-overflow--hidden');
  };

  const handleOnSubmitLogout = () => {
    sessionStorage.clear();
    window.location = '/connexion';
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div className="oservice-header-mobile">
      <div className="oservice-header-mobile__logo-placeholder" />

      {/* HEADER MOBILE - HEADER NAV */}
      {userIsLogged && (
        <div className="oservice-header-mobile__navigation">
          <HeaderNav onClick={handleOnclick} />
        </div>
      )}

      {/* HEADER MOBILE - AUTH FORM */}
      {!userIsLogged && isOpenHeaderMobile && (
        <AuthForm className="oservice-header-mobile__connectionForm" />
      )}

      {/* HEADER MOBILE - BUTTON LOGIN/LOGOUT */}
      {userIsLogged && (
        <Button
          className="oservice-button-disconnect-mobile"
          text="Déconnexion"
          onClick={handleOnSubmitLogout}
          aria="Bouton de connexion/déconnexion"
        />
      )}
    </div>
  );
};

/* PropTypes */
HeaderMobile.propTypes = {
  toggleItem: PropTypes.func,
  isOpenHeaderMobile: PropTypes.bool,
  userIsLogged: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  checkIfLogged: PropTypes.func,
};

/* Export component */
export default HeaderMobile;
