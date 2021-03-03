/* Import(s) */
import PropTypes from 'prop-types';
import NavigationLink from 'components/reusables/links/NavigationLink';

/* * * * * * * *
 * * Header Nav *
 *
 * @description : The navigation header
 *
 * @props --------------------------------------------------------------------------------------
 * - onClick (dispatched func)                         => on click action on Navigation Link
 * - loadStart (dispatched func)                       => start loading
 * - resetState (dispatched func)                      => reset category & city filter forms
 * - getCategoriesList (dispatched func)               => get categories list
 * - getDatabaseCitiesList (dispatched func)           => get database cities list
 * - configureNumberOfResultsPerPage (dispatched func) => reset per page
 * - getLastAnnouncementsList (dispatched func)        => get last announcement List
 * ---------------------------------------------------------------------------------------------
 *
 */
const HeaderNav = ({
  onClick,
  loadStart,
  resetState,
  getCategoriesList,
  getDatabaseCitiesList,
  configureNumberOfResultsPerPage,
  getLastAnnouncementsList,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnClick = () => {
    loadStart('isLoading');
    resetState('categoryFilterForm');
    resetState('cityFilterForm');
    getCategoriesList();
    getDatabaseCitiesList();
    configureNumberOfResultsPerPage();
    getLastAnnouncementsList();
  };

  /* * * * *
   * * JSX *
   */
  return (
    <nav className="oservice-header-nav">
      {/* HEADER NAV - LINK TO HOME PAGE */}
      <NavigationLink
        linkToPage="/"
        text="Accueil"
        onClick={handleOnClick && onClick}
      />

      {/* HEADER NAV - LINK TO MY PROFILE PAGE */}
      <NavigationLink
        linkToPage="/mon-profil"
        text="Mon profil"
        onClick={onClick}
      />

      {/* HEADER NAV - LINK TO MY ANNOUNCEMENTS PAGE */}
      <NavigationLink
        linkToPage="/mes-annonces"
        text="Mes annonces"
        onClick={onClick}
      />

      {/* HEADER NAV - LINK TO CREATE ANNOUNCEMENTS PAGE */}
      <NavigationLink
        linkToPage="/creer-une-annonce"
        text="Créer une annonce"
        onClick={onClick}
      />

      {/* HEADER NAV - LINK TO MESSAGING PAGE */}
      <NavigationLink
        linkToPage="/messagerie"
        text="Ma messagerie"
        onClick={onClick}
      />
    </nav>
  );
};

/* PropTypes */
HeaderNav.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loadStart: PropTypes.func,
  resetState: PropTypes.func,
  getCategoriesList: PropTypes.func,
  getDatabaseCitiesList: PropTypes.func,
  configureNumberOfResultsPerPage: PropTypes.func,
  getLastAnnouncementsList: PropTypes.func,
};

/* Export component */
export default HeaderNav;
