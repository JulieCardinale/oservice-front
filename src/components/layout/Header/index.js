/* Import(s) */
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import LogoOService from 'containers/LogoOService';
import Burger from 'containers/Burger';
import HeaderMobile from 'containers/HeaderMobile';
import HeaderDesktop from 'components/layout/Header/HeaderDesktop';

/* * * * * *
 * * Header *
 *
 * @description : The header
 *
 * @props --------------------------------------------------------------------------------------
 * - toggleItem (dispatched func)  => change state property isOpenHeaderMobile
 * - isOpenHeaderMobile (bool)     => is open header mobile or not ?
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - CSSTransition  => http://reactcommunity.org/react-transition-group/css-transition
 * ---------------------------------------------------------------------------------------------
 *
 */
const Header = ({ toggleItem, isOpenHeaderMobile }) => {
  /* * * * * * * * * *
   * * sessionStorage *
   */
  const { userIsLogged } = sessionStorage;

  /* * * * *
   * * JSX *
   */
  return (
    <header className="header">
      {/* HEADER - LOGO O'SERVICE */}
      <LogoOService />

      {/* HEADER - HEADER DESKTOP */}
      <HeaderDesktop userIsLogged={userIsLogged} />

      {/* HEADER - TRANSITION FOR HEADER MOBILE */}
      <CSSTransition
        in={isOpenHeaderMobile}
        timeout={100}
        classNames="header__mobile-transition"
      >
        {/* HEADER - HEADER MOBILE */}
        <HeaderMobile userIsLogged={userIsLogged} />
      </CSSTransition>

      {/* HEADER - BURGER */}
      <Burger toggleItem={toggleItem} />
    </header>
  );
};

/* PropTypes */
Header.propTypes = {
  toggleItem: PropTypes.func,
  isOpenHeaderMobile: PropTypes.bool,
};

/* Export component */
export default Header;
