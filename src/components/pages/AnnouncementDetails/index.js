/* Import(s) */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import AnnouncementDetailsInfos from 'containers/AnnouncementDetailsInfos';
import AnnouncementDetailsAuthor from 'components/pages/AnnouncementDetails/AnnouncementDetailsAuthor';
import FirstContactForm from 'containers/FirstContactForm';
import mainMessages from 'datas/mainMessages';
import PropTypes from 'prop-types';
import { mainFlex } from 'selectors';

/* * * * * * * * * * * * *
 * * AnnouncementDetails *
 *
 * @description : Detail of one announcement
 *
 * @props ----------------------------------------------------------------------------------------------------------------------------------------------
 * - loadStart                           ==> Start loading
 * - storeUrlSlug                        ==> Store slug URL (announcement id) in state
 * - getAnnouncementDetailsUsingUrlSlug  ==> Get announcement details to display it using URL slug
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------------------------------------------------
 * - useParams => when page is displayed, slug URL (announcement id) is used to get announcement details, we use it to make an API call.
 * https://reactrouter.com/web/api/Hooks/useparams
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const AnnouncementDetails = ({
  loadStart,
  storeUrlSlug,
  getAnnouncementDetailsUsingUrlSlug,
  announcementDetails,
  isLoading,
}) => {
  /* * * * * * * * * * * * * *
   * * useParams, UseEffects *
   */
  const { slug } = useParams();
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => storeUrlSlug(slug), []);
  useEffect(() => getAnnouncementDetailsUsingUrlSlug(), []);
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
    <div className="oservice-announcement-details">
      {/* ANNOUNCEMENT DETAILS - LOADER */}
      <Loader active={isLoading} />

      {!isLoading && (
        <>
          {/* ANNOUNCEMENT DETAILS - MAIN MESSAGE */}
          <PageMainMessage
            line01={mainMessages.announcementDetails.line01}
            line02={mainMessages.announcementDetails.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />

          {/* ANNOUNCEMENT DETAILS - INFOS */}
          <AnnouncementDetailsInfos announcementDetails={announcementDetails} />
          {/* ANNOUNCEMENT DETAILS - AUTHOR */}
          <AnnouncementDetailsAuthor
            announcementDetails={announcementDetails}
          />
        </>
      )}

      {/* ANNOUNCEMENT DETAILS - FIRST CONTACT */}
      <FirstContactForm />
    </div>
  );
};

/* PropTypes validation */
AnnouncementDetails.propTypes = {
  loadStart: PropTypes.func,
  storeUrlSlug: PropTypes.func,
  getAnnouncementDetailsUsingUrlSlug: PropTypes.func,
  announcementDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isLoading: PropTypes.bool,
};

/* Export component */
export default AnnouncementDetails;
