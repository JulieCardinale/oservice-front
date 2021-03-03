/* Import(s) */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/reusables/images/Loader';
import ConversationMessage from 'components/pages/Messaging/ConversationMessage';

/* * * * * * * * * * * * * * * *
 * * Conversation message list *
 *
 * @description : Conversation messages list
 *
 * @props --------------------------------------------------------------------------------------
 * - isLoadingMessagesList        => is loading or not message list ?
 * - firstMessageContent          => first message content
 * - firstMessageAuthorId         => first message author id
 * - firstMessageAuthorPicture    => first message author picture
 * - firstMessageDate             => first message date
 * - conversationMessagesList     => conversation, all messages list
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - useRef               => Scroll to new message https://fr.reactjs.org/docs/hooks-reference.html#useref
 * - Element.scrollTo()   => https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTo
 * ---------------------------------------------------------------------------------------------
 */
const ConversationMessagesList = ({
  isLoadingMessagesList,
  firstMessageContent,
  firstMessageAuthorId,
  firstMessageAuthorPicture,
  firstMessageDate,
  conversationMessagesList,
}) => {
  /* * * * * * *
   * * useRef *
   */
  const containerElement = useRef(null);
  useEffect(() => {
    const scrollY = containerElement.current.scrollHeight;
    containerElement.current.scrollTo(0, scrollY, 'smooth');
  }, [conversationMessagesList]);

  /* * * * * * *
   * * JSX *
   */
  return (
    <div
      className="oservice-conversation-messages-list"
      id="conversation-messages-list"
      ref={containerElement}
      /* When conversation is loading we apply a display flex to main block to center the loader */
      style={
        isLoadingMessagesList
          ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
          : { display: 'block' }
      }
    >
      {/* CONVERSATION MESSAGES LIST - LOADER */}
      <Loader active={isLoadingMessagesList} displayBlock />
      {!isLoadingMessagesList && (
        <>
          {/* CONVERSATION MESSAGES LIST - FIRST MESSAGE */}
          {firstMessageContent && (
            <ConversationMessage
              messageAuthorId={firstMessageAuthorId}
              messageAuthorPicture={firstMessageAuthorPicture}
              messageContent={firstMessageContent}
              messageDate={firstMessageDate}
            />
          )}

          {/* CONVERSATION MESSAGES LIST - OTHERS MESSAGES */}
          {conversationMessagesList.length >= 1 &&
            conversationMessagesList.map((conversationMessage) => (
              <ConversationMessage
                key={conversationMessage.id}
                messageAuthorId={conversationMessage.author}
                messageAuthorPicture={
                  conversationMessage.author_comment_picture
                }
                messageContent={conversationMessage.content.rendered}
                messageDate={conversationMessage.date}
              />
            ))}
        </>
      )}
    </div>
  );
};

/* PropTypes */
ConversationMessagesList.propTypes = {
  isLoadingMessagesList: PropTypes.bool,
  firstMessageContent: PropTypes.string,
  firstMessageAuthorId: PropTypes.number,
  firstMessageAuthorPicture: PropTypes.arrayOf(PropTypes.string),
  firstMessageDate: PropTypes.string,
  conversationMessagesList: PropTypes.arrayOf(PropTypes.object),
};

/* Export component */
export default ConversationMessagesList;
