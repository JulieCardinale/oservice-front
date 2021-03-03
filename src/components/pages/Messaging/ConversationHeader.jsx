/* Import(s) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/reusables/images/Image';
import RouterLink from 'components/reusables/links/RouterLink';
import Button from 'components/reusables/Button';
import PropTypes from 'prop-types';

/* * * * * * * * * * * * *
 * * Conversation header *
 *
 * @description : conversation header, contains announcement name, recipient name, picture & link to profile
 *
 * @props ------------------------------------------------------------------------------------------------------
 * - announcementName   => announcement name
 * - toggleItem         => display or not conversation
 * - announcementId     => announcement id
 * - recipientId        => recipient id
 * - recipientName      => recipient name
 * - recipientPicture   => recipient picture
 * -------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------
 * - classLiss.toggle => add or delete a class on element. Here on main, on mobiles when conversation is displayed.
 * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * -------------------------------------------------------------------------------------------------------------
 *
 */
const ConversationHeader = ({
  announcementName,
  toggleItem,
  announcementId,
  recipientId,
  recipientName,
  recipientPicture,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnclick = () => {
    toggleItem('isVisibleConversation');
    document.querySelector('main').classList.toggle('main-min-height--none');
  };
  /* * * * *
   * * JSX *
   */
  return (
    <div className="oservice-conversation-header">
      {announcementName && (
        <>
          <div className="oservice-conversation-header__left-block">
            {/* CONVERSATION HEADER - BACK ICON (mobiles only) */}
            <FontAwesomeIcon
              onClick={handleOnclick}
              icon={faArrowCircleLeft}
              className="oservice-conversation-header__left-block-icon"
            />
            <div>
              {/* CONVERSATION HEADER - LINK ANNOUNCEMENT NAME */}
              <RouterLink
                path={`/annonce-details/${announcementId}`}
                text={announcementName}
                className="oservice-text-conversation-header-announcement"
              />
              {/* CONVERSATION HEADER - LINK RECIPIENT NAME */}
              <RouterLink
                path={`/profil-utilisateur/${recipientId}`}
                text={recipientName}
                className="oservice-text-conversation-header-recipient"
              />
            </div>
          </div>
          <div className="oservice-conversation-header__right-block">
            {/* CONVERSATION HEADER - RECIPIENT PICTURE LINK TO RECIPIENT PROFILE */}
            <Image
              src={recipientPicture || undefined}
              className="oservice-rounded-image-messaging-header"
              alt="Image du destinataire"
              linkToPage={`/profil-utilisateur/${recipientId}`}
            />
            {/* CONVERSATION HEADER - LINK TO RECIPIENT PROFILE */}
            <Button
              className="oservice-button-messaging-header"
              text="Voir le profil"
              linkToPage={`/profil-utilisateur/${recipientId}`}
              aria="Lien vers le profil de l'interlocuteur"
            />
          </div>
        </>
      )}
    </div>
  );
};

/* PropTypes */
ConversationHeader.propTypes = {
  announcementName: PropTypes.string,
  toggleItem: PropTypes.func,
  announcementId: PropTypes.number,
  recipientId: PropTypes.number,
  recipientName: PropTypes.string,
  recipientPicture: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
  ]),
};

/* Export component */
export default ConversationHeader;
