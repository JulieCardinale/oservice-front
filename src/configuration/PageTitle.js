/* Import(s) */
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { OserviceDocumentTitle } from 'selectors';
import Title from 'components/reusables/texts/Title';

/* * * * * * * *
 * * PageTitle *
 *
 * @description : Dynamic header title configuration & document title
 *
 * @props ----------------------------------------------------------------------
 * - urlSlug  => url slug
 * -----------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------
 * - useLocation  => Use URL slug (page path) to determine page title
 * https://reactrouter.com/web/api/Hooks/uselocation
 * -----------------------------------------------------------------------------
 *
 * @selectors ------------------------------------------------------------------------
 * - OserviceDocumentTitle => Use URL slug (page path) to determine title
 * -----------------------------------------------------------------------------
 *
 */
const PageTitle = ({ urlSlug }) => {
  const pathName = useLocation().pathname;
  let pageTitle = '';
  switch (pathName) {
    case '/':
      pageTitle = 'Les dernières annonces';
      break;
    case '/connexion':
      pageTitle = "Bienvenue sur O'Service";
      break;
    case '/inscription':
      pageTitle = 'Inscription';
      break;
    case `/modifier-mon-profil/${urlSlug}`:
      pageTitle = 'Modifier mon profil';
      break;
    case '/mon-profil':
      pageTitle = 'Mon profil';
      break;
    case `/profil-utilisateur/${urlSlug}`:
      pageTitle = 'Détail du profil';
      break;
    case '/mes-annonces':
      pageTitle = 'Mes annonces';
      break;
    case `/annonce-details/${urlSlug}`:
      pageTitle = "Détail de l'annonce";
      break;
    case '/creer-une-annonce':
      pageTitle = 'Créer une annonce';
      break;
    case `/modifier-une-annonce/${urlSlug}`:
      pageTitle = 'Modifier une annonce';
      break;
    case '/messagerie':
      pageTitle = 'Ma messagerie';
      break;
    case '/mentions-legales':
      pageTitle = 'Mentions Légales';
      break;
    case '/contact':
      pageTitle = "L'équipe O'Service";
      break;
    case '/a-propos':
      pageTitle = 'À propos';
      break;
    default:
      pageTitle = '';
  }

  document.title = OserviceDocumentTitle("O'Service", pageTitle);

  return <Title content={pageTitle} className="oservice-title-basic" />;
};

/* PropTypes */
PageTitle.propTypes = {
  urlSlug: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

/* Export component */
export default PageTitle;
