/* Import(s) */
import { formatDateNumericDMY } from 'selectors';
import Image from 'components/reusables/images/Image';
import Text from 'components/reusables/texts/Text';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/* * * * * * * * * * * * *
 * * Conversation message *
 *
 * @description : conversation one message
 *
 * @props ------------------------------------------------------------------------------------------------------
 * - messageAuthorId      => message author id
 * - messageAuthorPicture => message author picture
 * - messageContent       => message content
 * - messageDate          => message date
 * -------------------------------------------------------------------------------------------------------------
 *
 * @use --------------------------------------------------------------------------------------------------------
 * - sessionStorage => to get connected user id
 * - classNames()   =>  https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * -------------------------------------------------------------------------------------------------------------
 */
const ConversationMessage = ({
  messageAuthorId,
  messageAuthorPicture,
  messageContent,
  messageDate,
}) => {
  /* * * * * * * * * * * * * * * *
   * * sessionStorage classNames *
   */
  const { connectedUserId } = sessionStorage;

  /*
   * Conditionnal classNames
   * My messages : align right
   * Other messages : align left
   */
  const messagingConversationOneMessageBlock = classNames(
    'oservice-conversation-message',
    {
      'oservice-conversation-message--me':
        parseInt(connectedUserId, 10) === parseInt(messageAuthorId, 10),
    }
  );

  /*
   * Conditionnal classNames
   * My messages : margin left
   * Other messages : margin right
   */
  const messagingConversationOneMessagePicture = classNames(
    'oservice-conversation-message__picture',
    {
      'oservice-conversation-message__picture--me':
        parseInt(connectedUserId, 10) === parseInt(messageAuthorId, 10),
    }
  );

  /*
   * Conditionnal classNames
   * My messages : background green, border bottom right radius 0;
   * Other messages : background blue, border bottom left radius 0;
   */
  const messagingConversationOneMessageContent = classNames(
    'oservice-conversation-message__content',
    {
      'oservice-conversation-message__content--me':
        parseInt(connectedUserId, 10) === parseInt(messageAuthorId, 10),
    }
  );

  /*
   * Conditionnal classNames
   * My messages : date ==> justify-content: flex-end
   * Other messages : date ==> justify-content: flex-start
   */
  const messagingConversationOneMessageDate = classNames(
    'oservice-conversation-message__date',
    {
      'oservice-conversation-message__date--me':
        parseInt(connectedUserId, 10) === parseInt(messageAuthorId, 10),
    }
  );

  /* * * * *
   * * JSX *
   */
  return (
    <div className={messagingConversationOneMessageBlock}>
      {/* CONVERSATION MESSAGE - IMAGE */}
      <Image
        src={messageAuthorPicture}
        className={`${messagingConversationOneMessagePicture} oservice-rounded-image-messages-list`}
        alt="Image de l'utilisateur"
        linkToPage={`/profil-utilisateur/${messageAuthorId}`}
      />
      <div className="oservice-conversation-message__content-and-date">
        {/* CONVERSATION MESSAGE - CONTENT */}
        <Text
          className={`${messagingConversationOneMessageContent} oservice-text-message-list-content`}
          content={messageContent}
        />
        {/* CONVERSATION MESSAGE - DATE */}
        <Text
          className={`${messagingConversationOneMessageDate} oservice-text-inbox-message-list-date`}
          content={
            messageDate &&
            `${formatDateNumericDMY(
              messageDate.slice(0, 4),
              messageDate.slice(5, 7),
              messageDate.slice(8, 10)
            )} ${messageDate.slice(11, 16)}`
          }
        />
      </div>
    </div>
  );
};

/* PropTypes */
ConversationMessage.propTypes = {
  messageAuthorId: PropTypes.number,
  messageAuthorPicture: PropTypes.arrayOf(PropTypes.string),
  messageContent: PropTypes.string,
  messageDate: PropTypes.string,
};

/* Export component */
export default ConversationMessage;
