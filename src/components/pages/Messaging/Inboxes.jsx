/* Import(s) */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InboxMessage from 'containers/InboxMessage';
import TitleSub from 'components/reusables/texts/TitleSub';
import Text from 'components/reusables/texts/Text';

/* * * * * * *
 * * Inboxes *
 *
 * @description : All messages. Two parts : My announcements / Others announcements.
 *
 * @props --------------------------------------------------------------------------------------
 * - myInboxMessagesListForMyAnnouncements     => messages list received for my announcements
 * - myInboxMessagesListForOtherAnnouncements  => messages list sent on others announcements
 * - isVisibleConversation                     => is visible conversation or not ?
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - classNames()  => On mobiles if conversation is visible hide messages part
 * https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * ---------------------------------------------------------------------------------------------
 */
const Inboxes = ({
  myInboxMessagesListForMyAnnouncements,
  myInboxMessagesListForOtherAnnouncements,
  isVisibleConversation,
}) => {
  const messages = classNames('oservice-inboxes__messages', {
    'oservice-inboxes__messages--hide': isVisibleConversation,
  });

  return (
    <div className="oservice-inboxes">
      {/* INBOXES - TITLE */}
      <TitleSub
        content="Boite de réception"
        className="oservice-title-sub-messaging"
      />
      <div className={messages}>
        {/* INBOXES - MY ANNOUNCEMENTS */}
        {myInboxMessagesListForMyAnnouncements[0] &&
          myInboxMessagesListForMyAnnouncements[0].id && (
            <>
              <Text
                className="oservice-text-inboxes-titles"
                content="Mes annonces"
              />
              <div className="oservice-inboxes__individual-inbox">
                {myInboxMessagesListForMyAnnouncements.map((message) => (
                  <InboxMessage
                    key={message.id && parseInt(message.id, 10)}
                    messageInboxId={message.id && parseInt(message.id, 10)}
                    messageInboxPicture={
                      message.announcement_picture &&
                      message.announcement_picture
                    }
                    messageInboxAnnouncementName={message.announcement_name}
                    messageInboxRecipientName={message.author_name}
                    /*
                     * If message have children
                     * we display last child date in prop
                     * else
                     * we display unique message date
                     */
                    messageInboxLastMessageDate={
                      message.children_comment[0]
                        ? message.children_comment[0].comment_date
                        : message.date
                    }
                    /*
                     * If message have children
                     * we display number of children + 1 as number of message
                     * else
                     * we display 1 as number of message
                     */
                    messageInboxNumberOfMessages={
                      message.children_comment[0]
                        ? message.children_comment.length + 1
                        : 1
                    }
                    messageInboxLastChildAuthor={
                      message.children_comment.user_id
                    }
                    /*
                     * If message have children
                     * we use last child id
                     * else
                     * we use unique message id
                     */
                    messageInboxLastChildId={
                      message.children_comment[0]
                        ? parseInt(message.children_comment[0].comment_ID, 10)
                        : message.id
                    }
                  />
                ))}
              </div>
            </>
          )}

        {/* INBOXES - OTHERS ANNOUNCEMENTS */}
        {myInboxMessagesListForOtherAnnouncements[0] &&
          myInboxMessagesListForOtherAnnouncements[0].id && (
            <>
              <Text
                className="oservice-text-inboxes-titles"
                content="Annonces des autres utilisateurs"
              />
              <div className="oservice-inboxes__individual-inbox">
                {myInboxMessagesListForOtherAnnouncements.map((message) => (
                  <InboxMessage
                    key={message.id && parseInt(message.id, 10)}
                    messageInboxId={message.id && parseInt(message.id, 10)}
                    messageInboxPicture={
                      message.announcement_picture &&
                      message.announcement_picture
                    }
                    messageInboxAnnouncementName={message.announcement_name}
                    messageInboxRecipientName={message.announcement_author_name}
                    /*
                     * If message have children
                     * we display last child date in prop
                     * else
                     * we display unique message date
                     */
                    messageInboxLastMessageDate={
                      message.children_comment[0]
                        ? message.children_comment[0].comment_date
                        : message.date
                    }
                    /*
                     * If message have children
                     * we display number of children + 1 as number of message
                     * else
                     * we display 1 as number of message
                     */
                    messageInboxNumberOfMessages={
                      message.children_comment[0]
                        ? message.children_comment.length + 1
                        : 1
                    }
                    /*
                     * If message have children
                     * we use last child id
                     * else
                     * we use unique message id
                     */
                    messageInboxLastChildId={
                      message.children_comment[0]
                        ? parseInt(message.children_comment[0].comment_ID, 10)
                        : message.id
                    }
                  />
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  );
};
/* PropTypes */
Inboxes.propTypes = {
  isVisibleConversation: PropTypes.bool,
  myInboxMessagesListForMyAnnouncements: PropTypes.arrayOf(PropTypes.object),
  myInboxMessagesListForOtherAnnouncements: PropTypes.arrayOf(PropTypes.object),
};

/* Export component */
export default Inboxes;
