/* Import(s) */
import PropTypes from 'prop-types';
import OSLogo from 'images/OSLogo.png';
import Image from 'components/reusables/images/Image';

/* * * * * * * * *
 * * LogoOService *
 *
 * @description : The header
 *
 * @props -------------------------------------------------------------------------------------------
 * - isOpenHeaderMobile (bool)                         => is open header mobile or not ?
 * - loadStart (dispatched func)                       => start loading
 * - resetState (dispatched func)                      => reset category filter & city filter forms
 * - getCategoriesList (dispatched func)               => get categories list
 * - getDatabaseCitiesList (dispatched func)           => get database cities list
 * - configureNumberOfResultsPerPage (dispatched func) => reset per page
 * - getLastAnnouncementsList (dispatched func)        => get last announcement List
 * - toggleItem (dispatched func)                      => change state property isOpenHeaderMobile
 * - checkIfLogged (dispatched func)                   => check if user is logged.
 * ---------------------------------------------------------------------------------------------------
 *
 */
const LogoOService = ({
  isOpenHeaderMobile,
  loadStart,
  resetState,
  getCategoriesList,
  getDatabaseCitiesList,
  configureNumberOfResultsPerPage,
  getLastAnnouncementsList,
  toggleItem,
  checkIfLogged,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnclick = () => {
    checkIfLogged();
    loadStart('isLoading');
    resetState('categoryFilterForm');
    resetState('cityFilterForm');
    getCategoriesList();
    getDatabaseCitiesList();
    configureNumberOfResultsPerPage();
    getLastAnnouncementsList();
    if (isOpenHeaderMobile) {
      toggleItem('isOpenHeaderMobile');
      document.body.classList.toggle('body-overflow--hidden');
    }
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div
      onClick={handleOnclick}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    >
      <Image
        className="oservice-logo"
        src={OSLogo}
        alt="Logo O'Service"
        linkToPage="/"
      />
    </div>
  );
};

/* PropTypes */
LogoOService.propTypes = {
  isOpenHeaderMobile: PropTypes.bool,
  loadStart: PropTypes.func,
  resetState: PropTypes.func,
  getCategoriesList: PropTypes.func,
  getDatabaseCitiesList: PropTypes.func,
  configureNumberOfResultsPerPage: PropTypes.func,
  getLastAnnouncementsList: PropTypes.func,
  toggleItem: PropTypes.func,
  checkIfLogged: PropTypes.func,
};

/* Export component */
export default LogoOService;
