/* Import(s) */
import { useEffect } from 'react';
import { formatDateNumericDMY } from 'selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import TitleSub from 'components/reusables/texts/TitleSub';
import CategoryTag from 'components/reusables/texts/CategoryTag';
import Quotes from 'components/reusables/texts/Quotes';
import Button from 'components/reusables/Button';
import Image from 'components/reusables/images/Image';
import Information from 'components/reusables/texts/Information';

/* * * * * * * * * * * * * * * *
 * * AnnouncementDetailsAuthor *
 *
 * @description : Announcement details author part
 *
 * @props -----------------------------------------------------------------------------------------------------------
 * - checkIfIhaveAlreadySentMessage (dispatched func )  => check if i've already sent message to this announcement
 * - toggleItem (dispatched func)                       => change state property isVisibleContactForm
 * - myMessagesListForThisAnnouncement                  => my message list for this announcement
 * - announcementDetails                                => announcement details
 * ------------------------------------------------------------------------------------------------------------------
 *
 * @use -------------------------------------------------------------------------------------------------------------
 * - window.location         => redirect to /connexion page
 * https://developer.mozilla.org/fr/docs/Web/API/window/location
 * ------------------------------------------------------------------------------------------------------------------
 *
 */
const AnnouncementDetailsInfos = ({
  checkIfIhaveAlreadySentMessage,
  toggleItem,
  myMessagesListForThisAnnouncement,
  announcementDetails,
}) => {
  /* * * * * * * * * * * * * * * * * * * *
   * * sessionStoragen useEffect, handler *
   */
  const { connectedUserId } = sessionStorage;

  useEffect(() => checkIfIhaveAlreadySentMessage(), []);

  const handleOnClickMessageButton = () => {
    if (myMessagesListForThisAnnouncement.length === 0) {
      toggleItem('isVisibleContactForm');
    } else {
      window.location = '/messagerie';
    }
  };

  /* * * * *
   * * JSX *
   */
  return (
    <section className="oservice-announcement-details-infos">
      <div className="oservice-announcement-details-infos__title-category-description-message-button">
        {/* ANNOUNCEMENT DETAILS INFOS - TITLE */}
        <TitleSub
          content={
            announcementDetails &&
            announcementDetails.title &&
            announcementDetails.title.rendered &&
            announcementDetails.title.rendered
          }
          className="oservice-title-sub-basic"
        />

        {/* ANNOUNCEMENT DETAILS INFOS - CATEGORY */}
        <CategoryTag
          className="oservice-category-tag-basic"
          tagName={
            announcementDetails &&
            announcementDetails.category_name &&
            announcementDetails.category_name[0] &&
            announcementDetails.category_name[0].name
          }
        />

        {/* ANNOUNCEMENT DETAILS INFOS - DESCRIPTION */}
        <Quotes
          label="Description"
          text={
            announcementDetails &&
            announcementDetails.content &&
            announcementDetails.content.rendered &&
            announcementDetails.content.rendered
          }
        />

        {/* ANNOUNCEMENT DETAILS INFOS - MESSAGE BUTTON (not visible if it's my announcement) */}
        {announcementDetails.author !== parseInt(connectedUserId, 10) && (
          <Button
            className="oservice-button-first-message"
            aria="Bouton pour contacter l'auteur de l'annonce"
            text={
              myMessagesListForThisAnnouncement.length >= 1
                ? `Vous avez déjà contacté ${
                    announcementDetails.author_name &&
                    announcementDetails.author_name
                  }`
                : "Répondre à l'annonce"
            }
            icon={
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="oservice-announcement-details-infos__button-icon"
              />
            }
            onClick={handleOnClickMessageButton}
          />
        )}
      </div>

      <div className="oservice-announcement-details-infos__picture-date-postcode-city">
        {/* ANNOUNCEMENT DETAILS INFOS - IMAGE */}
        <Image
          className="oservice-square-image"
          src={
            announcementDetails &&
            announcementDetails.featured_media_url &&
            announcementDetails.featured_media_url
          }
          alt="Image de l'annonce"
        />

        {/* ANNOUNCEMENT DETAILS INFOS - DATE */}
        <Information
          label="Date de publication"
          text={
            announcementDetails &&
            announcementDetails.modified &&
            formatDateNumericDMY(
              announcementDetails.modified.slice(0, 4),
              announcementDetails.modified.slice(5, 7),
              announcementDetails.modified.slice(8, 10)
            )
          }
        />

        {/* ANNOUNCEMENT DETAILS INFOS - INFORMATION */}
        <Information
          label="Code postal"
          text={
            announcementDetails &&
            announcementDetails.postal_code &&
            announcementDetails.postal_code[0] &&
            announcementDetails.postal_code[0]
          }
        />

        {/* ANNOUNCEMENT DETAILS INFOS - CITY */}
        <Information
          label="Ville"
          text={
            announcementDetails &&
            announcementDetails.city_name &&
            announcementDetails.city_name[0] &&
            announcementDetails.city_name[0]
          }
        />
      </div>
    </section>
  );
};

/* PropTypes validation */
AnnouncementDetailsInfos.propTypes = {
  checkIfIhaveAlreadySentMessage: PropTypes.func,
  toggleItem: PropTypes.func,
  myMessagesListForThisAnnouncement: PropTypes.arrayOf(PropTypes.object),
  announcementDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

/* Export component */
export default AnnouncementDetailsInfos;
