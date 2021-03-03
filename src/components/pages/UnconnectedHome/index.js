/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import PropTypes from 'prop-types';
import mainMessages from 'datas/mainMessages';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Button from 'components/reusables/Button';
import PopUp from 'containers/Popup';
import AnnouncementsList from 'components/reusables/announcements/AnnouncementsList';

/* * * * * * * * * * *
 * * UnconnectedHome *
 *
 * @description : Unconnected first page, displays three last ads
 *
 * @props -----------------------------------------------------------------------------
 * - loadStart (func)                     => start loading mode
 * - getLastThreeAnnouncements (func)     => API request to get last 3 ads
 * - closePopUp (func)                    => close pop up
 * - isLoading (bool)                     => is loading mode or not ?
 * - lastThreeAnnouncements               => last three announcements infos
 * - openPopUp (func)                     => open pop up
 * ------------------------------------------------------------------------------------
 *
 * @selector --------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * ------------------------------------------------------------------------------------
 *
 */
const UnconnectedHome = ({
  loadStart,
  getLastThreeAnnouncements,
  closePopUp,
  isLoading,
  lastThreeAnnouncements,
  openPopUp,
}) => {
  /* * * * * * * *
   * * useEffects *
   */
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => getLastThreeAnnouncements(), []);
  useEffect(() => closePopUp(), []);
  useEffect(() => {
    if (isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [isLoading]);

  /* * * * *
   * * JSX *
   */
  return (
    <div className="oservice-unconnected-home">
      <Loader active={isLoading} />
      {!isLoading && lastThreeAnnouncements[0].id && (
        <>
          {/* UNCONNECTED HOME - MAIN MESSAGE */}
          <PageMainMessage
            line01={mainMessages.unconnectedHome.line01}
            line02={mainMessages.unconnectedHome.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />
          {/* UNCONNECTED HOME - BUTTON */}
          <Button
            className="oservice-button-basic"
            text="Inscription"
            linkToPage="/inscription"
            aria="Lien vers le formulaire d'inscription"
          />
          {/* UNCONNECTED HOME - POP UP */}
          <PopUp
            messageLine01="Vous devez être connecté(e) pour accéder aux annonces."
            messageLigne02="Pas encore inscrit(e) ?"
            confirmButtonLink="/inscription"
            confirmText="C'est par ici !"
            cancelText="Annuler"
            onClickCancel={() => closePopUp()}
          />
          {/* UNCONNECTED HOME - THREE LAST ANNOUNCEMENTS */}
          <AnnouncementsList
            className="oservice-announcements-list"
            announcementsList={lastThreeAnnouncements}
            onClick={() => openPopUp()}
          />
        </>
      )}
    </div>
  );
};

/* PropTypes */
UnconnectedHome.propTypes = {
  loadStart: PropTypes.func,
  getLastThreeAnnouncements: PropTypes.func,
  closePopUp: PropTypes.func,
  isLoading: PropTypes.bool,
  lastThreeAnnouncements: PropTypes.arrayOf(PropTypes.object),
  openPopUp: PropTypes.func,
};

/* Export component */
export default UnconnectedHome;
