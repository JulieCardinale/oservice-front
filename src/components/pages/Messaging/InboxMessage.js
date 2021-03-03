/* eslint-disable react/no-danger */
/* Import(s) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { convertStringToArray, formatDateNumericDMY } from 'selectors';
import classNames from 'classnames';
import Image from 'components/reusables/images/Image';
import Text from 'components/reusables/texts/Text';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * Inbox Message *
 *
 * @description : A message of inbox
 *
 * @props ---------------------------------------------------------------------------------------------------------------
 * - messageInboxId                     => messages id
 * - conversationFirstMessage           => first message of a conversation. Parent message.
 * - messageInboxLastChildId            => last message inbox id
 * - getConversationFirstMessage        => get first message of a conversation. Parent message.
 * - getConversationMessagesList        => get whole conversation. childs.
 * - toggleItem                         => display or not inbox on mobiles.
 * - loadStart                          => loader is displayed when conversation is loading
 * - messageInboxRecipientName          => message recipient name
 * - messageInboxPicture                => message picture
 * - messageInboxAnnouncementName       => message announcement name
 * - messageInboxLastMessageDate        => last message date
 * - messageInboxNumberOfMessage        => number of messages
 * -----------------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------------------
 * - classNames()             => Change background color when inbox message is 'open' / 'selected'
 * https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * - classLiss.toggle         => add or delete a class on element. Here on main, on mobiles when conversation is displayed.
 * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * -----------------------------------------------------------------------------------------------------------------------
 *
 * @selectors ------------------------------------------------------------------------------------------------------------
 * - convertStringToArray()   => Create array with recipient identity to only select index 0 & only display first name
 * - formatDateNumericDMY     => change date format to DD/MM/YY
 * -----------------------------------------------------------------------------------------------------------------------
 */
const InboxMessage = ({
  messageInboxId,
  conversationFirstMessage,
  messageInboxLastChildId,
  getConversationFirstMessage,
  getConversationMessagesList,
  toggleItem,
  loadStart,
  messageInboxRecipientName,
  messageInboxPicture,
  messageInboxAnnouncementName,
  messageInboxLastMessageDate,
  messageInboxNumberOfMessages,
}) => {
  /* * * * * * * * * * * * * * * * * * * * * * * *
   * * classNames, handler, convertStringToArray *
   */
  const inboxMessageIsSelectedOrNot = classNames('oservice-inbox-message', {
    'oservice-inbox-message--selected':
      messageInboxId === conversationFirstMessage.id,
  });

  const handleInboxOneMessageOnClick = () => {
    getConversationFirstMessage(messageInboxId);
    getConversationMessagesList(messageInboxId);
    toggleItem('isVisibleConversation');
    loadStart('isLoadingMessagesList');
    window.scrollTo(0, 0);
    document.querySelector('main').classList.toggle('main-min-height--none');
  };

  const recipientIdentityArray = convertStringToArray(
    messageInboxRecipientName
  );

  /* * * * *
   * * JSX *
   */
  return (
    <div
      onClick={handleInboxOneMessageOnClick}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
      className={inboxMessageIsSelectedOrNot}
      /* Messages are display flex, flex order is determined by id value */
      style={{
        order: messageInboxLastChildId,
      }}
    >
      <div className="oservice-inbox-message__picture-announcement-recipient">
        {/* INBOX MESSAGE - IMAGE */}
        <Image
          src={messageInboxPicture}
          className="oservice-rounded-image-inbox"
          alt="Image de l'annonce"
        />

        {/* INBOX MESSAGE - ANNOUNCEMENT NAME */}
        <div>
          {/* Announcement name */}
          <Text
            className="oservice-text-inbox-announcement-name"
            content={messageInboxAnnouncementName}
          />
          <Text
            className="oservice-text-inbox-recipient-name"
            content={recipientIdentityArray[0]}
          />
        </div>
      </div>

      {/* INBOX MESSAGE - MESSAGE COUNTER */}
      <div className="oservice-inbox-message__number-date">
        <>
          <div className="oservice-inbox-message__number">
            <Text
              className="oservice-text-inbox-number-of-messages"
              content={messageInboxNumberOfMessages}
            />
            <FontAwesomeIcon
              icon={faCommentAlt}
              className="oservice-inbox-message__number--icon"
            />
          </div>
        </>

        {/* INBOX MESSAGE - LAST MESSAGE DATE */}
        <Text
          className="oservice-text-inbox-message-date"
          content={
            messageInboxLastMessageDate &&
            `Dernier message le ${formatDateNumericDMY(
              messageInboxLastMessageDate.slice(0, 4),
              messageInboxLastMessageDate.slice(5, 7),
              messageInboxLastMessageDate.slice(8, 10)
            )} à ${messageInboxLastMessageDate.slice(11, 16)}`
          }
        />
      </div>
    </div>
  );
};
/* PropTypes validation */
InboxMessage.propTypes = {
  messageInboxId: PropTypes.number,
  conversationFirstMessage: PropTypes.objectOf(PropTypes.any),
  messageInboxLastChildId: PropTypes.number,
  getConversationFirstMessage: PropTypes.func,
  getConversationMessagesList: PropTypes.func,
  toggleItem: PropTypes.func,
  loadStart: PropTypes.func,
  messageInboxRecipientName: PropTypes.string,
  messageInboxPicture: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  messageInboxAnnouncementName: PropTypes.string,
  messageInboxLastMessageDate: PropTypes.string,
  messageInboxNumberOfMessages: PropTypes.number,
};

/* Export component */
export default InboxMessage;
