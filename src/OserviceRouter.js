/* Import(s) */
import { Route, Switch, Redirect } from 'react-router-dom';
import LastAnnouncements from 'containers/LastAnnouncements';
import UnconnectedHome from 'containers/UnconnectedHome';
import CreateUser from 'components/pages/UserForm/CreateUser';
import UpdateUser from 'containers/UpdateUser';
import MyProfile from 'containers/MyProfile';
import UserProfile from 'containers/UserProfile';
import MyAnnouncements from 'containers/MyAnnouncements';
import AnnouncementDetails from 'containers/AnnouncementDetails';
import CreateAnnouncement from 'components/pages/AnnouncementForm/CreateAnnouncement';
import UpdateAnnouncement from 'containers/UpdateAnnouncement';
import Messaging from 'containers//Messaging';
import LegalsNotices from 'components/pages/LegalsNotices';
import Contact from 'components/pages/Contact';
import About from 'components/pages/About';
import Error404 from 'components/pages/Error404';
import ScrollToTop from 'components/reusables/ScrollToTop';

/* * * * * * * * * * *
 * * Oservice Router *
 *
 * @description : The router. The Switch component analyze URL and display the requested page.
 * If there is no correspondence it redirect to home page. On page change we scroll to top.
 *
 * @use ----------------------------------------------------------------------------------------
 * - Switch              https://reactrouter.com/web/api/Switch
 * - scroll-restoration  https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
 * - sessionStorage      => to know if user is logged or not.
 * https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
 * ---------------------------------------------------------------------------------------------
 *
 */
const OserviceRouter = () => {
  /* * * * * * * * * *
   * * sessionStorage *
   */
  const { userIsLogged } = sessionStorage;

  return (
    <main id="main">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          {userIsLogged ? <LastAnnouncements /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/connexion">
          {!userIsLogged ? <UnconnectedHome /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/inscription">
          {!userIsLogged ? <CreateUser /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/modifier-mon-profil/:slug">
          {userIsLogged ? <UpdateUser /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/mon-profil">
          {userIsLogged ? <MyProfile /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/profil-utilisateur/:slug">
          {userIsLogged ? <UserProfile /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/mes-annonces">
          {userIsLogged ? <MyAnnouncements /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/annonce-details/:slug">
          {userIsLogged ? (
            <AnnouncementDetails />
          ) : (
            <Redirect to="/connexion" />
          )}
        </Route>

        <Route exact path="/creer-une-annonce">
          {userIsLogged ? <CreateAnnouncement /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/modifier-une-annonce/:slug">
          {userIsLogged ? <UpdateAnnouncement /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/messagerie">
          {userIsLogged ? <Messaging /> : <Redirect to="/connexion" />}
        </Route>

        <Route exact path="/mentions-legales" component={LegalsNotices} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/a-propos" component={About} />

        <Route>
          {userIsLogged ? <Error404 /> : <Redirect to="/connexion" />}
        </Route>
      </Switch>
    </main>
  );
};

/* Export component */
export default OserviceRouter;
