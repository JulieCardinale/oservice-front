/* Import(s) */
import ConversationHeader from 'containers/ConversationHeader';
import ConversationMessagesList from 'containers/ConversationMessagesList';
import ConversationForm from 'containers/ConversationForm';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/* * * * * * * * *
 * * Conversation *
 *
 * @description : Messaging conversation part
 *
 * @props ---------------------------------------------------------------------------
 * - conversationFirstMessage   => first message of the conversation (parent)
 * - isVisibleConversation      => is visible conversation or not ?
 * - conversationMessagesList   => whole conversation (children)
 * ----------------------------------------------------------------------------------
 *
 * @use --------------------------------------------------------------------------------------------------------
 * - sessionStorage => to get connected user id
 * - classNames()   =>  https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * -------------------------------------------------------------------------------------------------------------
 *
 */
const Conversation = ({
  conversationFirstMessage,
  isVisibleConversation,
  conversationMessagesList,
}) => {
  /* * * * * * * * * * * * * * * * * * * *
   * * sessionStorage, consts, classNames *
   */
  const { connectedUserId } = sessionStorage;

  /*
   * In Conversation header we display our recipient informations
   * This is how obtain recipient id
   * if the first message is mine
   * Recipient id === conversationFirstMessage.author
   * else
   * Recipient id === conversationFirstMessage.announcement_author_id
   */
  const recipientId =
    conversationFirstMessage.announcement_author_id === connectedUserId
      ? conversationFirstMessage.author
      : conversationFirstMessage.announcement_author_id;

  /*
   * In Conversation header we display our recipient informations
   * This is how obtain recipient name
   * if the first message is mine
   * Recipient name === conversationFirstMessage.author_name
   * else
   * Recipient name === conversationFirstMessage.announcement_author_name
   */
  const recipientName =
    conversationFirstMessage.announcement_author_id === connectedUserId
      ? conversationFirstMessage.author_name
      : conversationFirstMessage.announcement_author_name;

  /*
   * In Conversation header we display our recipient informations
   * This is how obtain recipient picture
   * if the first message is mine
   * Recipient picture === conversationFirstMessage.announcement_author_picture
   * else
   * Recipient picture === conversationFirstMessage.author_comment_picture
   */
  const recipientPicture =
    conversationFirstMessage.announcement_author_id === connectedUserId
      ? conversationFirstMessage.author_comment_picture
      : conversationFirstMessage.announcement_author_picture;

  /* If isVisibleConversation = true we display conversation part else we hide it. */
  const oserviceConversation = classNames('oservice-conversation', {
    'oservice-conversation--show': isVisibleConversation,
  });

  /* * * * *
   * * JSX *
   */
  return (
    <div className={oserviceConversation}>
      {/* CONVERSATION - HEADER */}
      <ConversationHeader
        announcementId={
          conversationFirstMessage &&
          parseInt(conversationFirstMessage.post, 10)
        }
        announcementName={
          conversationFirstMessage && conversationFirstMessage.announcement_name
        }
        recipientId={conversationFirstMessage && parseInt(recipientId, 10)}
        recipientName={conversationFirstMessage && recipientName}
        recipientPicture={conversationFirstMessage && recipientPicture}
      />
      {/* CONVERSATION - MESSAGES LIST */}
      <ConversationMessagesList
        firstMessageAuthorId={
          conversationFirstMessage &&
          conversationFirstMessage.author &&
          parseInt(conversationFirstMessage.author, 10)
        }
        firstMessageAuthorPicture={
          conversationFirstMessage &&
          conversationFirstMessage.author_comment_picture
        }
        firstMessageContent={
          conversationFirstMessage &&
          conversationFirstMessage.content &&
          conversationFirstMessage.content.rendered
        }
        firstMessageDate={
          conversationFirstMessage &&
          conversationFirstMessage.date &&
          conversationFirstMessage.date
        }
        conversationMessagesList={
          conversationMessagesList && conversationMessagesList
        }
      />
      {/* CONVERSATION - FORM */}
      <ConversationForm
        conversationFirstMessageId={
          conversationFirstMessage &&
          conversationFirstMessage.id &&
          parseInt(conversationFirstMessage.id, 10)
        }
        conversationPostId={
          conversationFirstMessage &&
          conversationFirstMessage.post &&
          parseInt(conversationFirstMessage.post, 10)
        }
      />
    </div>
  );
};

/* PropTypes */
Conversation.propTypes = {
  conversationFirstMessage: PropTypes.objectOf(PropTypes.any),
  isVisibleConversation: PropTypes.bool,
  conversationMessagesList: PropTypes.arrayOf(PropTypes.object),
};

/* Export component */
export default Conversation;
