/* Import(s) */
import HeaderNav from 'containers/HeaderNav';
import AuthForm from 'containers/AuthForm';
import Button from 'components/reusables/Button';
import PageTitle from 'containers/PageTitle';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * HeaderDesktop *
 *
 * @description : Header desktop version
 *
 * @props --------------------------------------------------------------------------------------
 * - userIsLogged (bool)     => userIsLogged information
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - sessionStorage.clear()  => clear userDatas from storage
 * https://developer.mozilla.org/fr/docs/Web/API/Storage/clear
 * - window.location         => redirect to /connexion page
 * https://developer.mozilla.org/fr/docs/Web/API/window/location
 * ---------------------------------------------------------------------------------------------
 *
 */
const HeaderDesktop = ({ userIsLogged }) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnSubmitLogout = () => {
    sessionStorage.clear();
    window.location = '/connexion';
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div className="oservice-header-desktop">
      <div className="oservice-header-desktop__top-green-block">
        <div className="oservice-header-desktop__logo-placeholder" />

        {/* HEADER DESKTOP - HEADER NAV */}
        {userIsLogged && (
          <div className="oservice-header-desktop__navigation">
            <HeaderNav />
          </div>
        )}

        {/* HEADER DESKTOP - AUTH FORM */}
        {!userIsLogged && (
          <div className="oservice-header-desktop__connectionForm">
            <AuthForm />
          </div>
        )}

        {/* HEADER DESKTOP - BUTTON LOGIN/LOGOUT */}
        {userIsLogged && (
          <Button
            className="oservice-button-disconnect-desktop"
            text="Déconnexion"
            onClick={handleOnSubmitLogout}
            aria="Bouton de connexion/déconnexion"
          />
        )}
      </div>

      <div className="oservice-header-desktop__bottom-blue-block">
        {/* HEADER DESKTOP - PAGE TITLE */}
        <PageTitle className="header__pageTitle" />
      </div>
    </div>
  );
};

/* PropTypes */
HeaderDesktop.propTypes = {
  userIsLogged: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

/* Export component */
export default HeaderDesktop;
