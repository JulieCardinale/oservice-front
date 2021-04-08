/* Import(s) */
import { useEffect } from 'react';
import mainMessages from 'datas/mainMessages';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Button from 'components/reusables/Button';
import AnnouncementsList from 'components/reusables/announcements/AnnouncementsList';
import PopUp from 'containers/Popup';
import PropTypes from 'prop-types';
import { mainFlex } from 'selectors';

/* * * * * * * * * * *
 * * My Announcements *
 *
 * @description : my announcements page
 *
 * @props -----------------------------------------------------------------
 * - loadStart (func)                => start loading
 * - getMyAnnouncementsList (func)   => get list of my announcements
 * - closePopUp (func)               => close pop up, reset it.
 * - myAnnouncementsList (func)      => List of my announcements
 * - isLoading (bool)                => is loading mode or not ?
 * - deleteAnnouncement (func)       => delete announcement using it id
 * ------------------------------------------------------------------------
 *
 * @selector --------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * ------------------------------------------------------------------------
 *
 *
 */
const MyAnnouncements = ({
  loadStart,
  getMyAnnouncementsList,
  closePopUp,
  myAnnouncementsList,
  isLoading,
  deleteAnnouncement,
}) => {
  /* * * * * * * *
   * * useEffects *
   */
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => getMyAnnouncementsList(), []);
  useEffect(() => closePopUp(), []);
  useEffect(() => {
    if (myAnnouncementsList.length === 0 || isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [myAnnouncementsList, isLoading]);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* MY ANNOUNCEMENTS - LOADER */}
      <Loader active={isLoading} />

      {/* MY ANNOUNCEMENTS - MAIN MESSAGE */}
      {!isLoading && myAnnouncementsList && (
        <>
          <PageMainMessage
            line01={
              myAnnouncementsList.length === 0
                ? mainMessages.myAnnouncements.line01
                : mainMessages.myAnnouncements.line01alt
            }
            line02={
              myAnnouncementsList.length === 0
                ? mainMessages.myAnnouncements.line02
                : mainMessages.myAnnouncements.line02alt
            }
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02={
              myAnnouncementsList.length === 0
                ? 'oservice-text-main-message--line02-my-announcements-empty'
                : 'oservice-text-main-message--line02-my-announcements'
            }
          />

          {/* MY ANNOUNCEMENTS - CREATE ANNOUNCEMENTS BUTTON DISPLAYED WHEN 0 ANNOUNCEMENTS */}
          {!isLoading && myAnnouncementsList.length === 0 && (
            <Button
              className="oservice-button-basic"
              text="Créer une annonce"
              linkToPage="/creer-une-annonce"
              aria="Lien vers la page de création d'une annonce"
            />
          )}

          {/* MY ANNOUNCEMENTS - LIST */}
          <AnnouncementsList
            className="oservice-announcements-list"
            announcementsList={myAnnouncementsList}
            announcementOptions
          />
        </>
      )}

      {/* MY ANNOUNCEMENTS - POP UP TO CONFIRM DELETE */}
      <PopUp
        messageLine01="Êtes-vous sûr(e) de vouloir supprimer l'annonce ?"
        confirmText="Oui"
        cancelText="Annuler"
        onClickConfirm={() => deleteAnnouncement()}
        onClickCancel={() => closePopUp()}
      />
    </>
  );
};

/* Props Validation */
MyAnnouncements.propTypes = {
  loadStart: PropTypes.func,
  getMyAnnouncementsList: PropTypes.func,
  closePopUp: PropTypes.func,
  myAnnouncementsList: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  deleteAnnouncement: PropTypes.func,
};

/* Export component */
export default MyAnnouncements;
