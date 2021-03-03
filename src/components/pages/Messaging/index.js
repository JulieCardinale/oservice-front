/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Inboxes from 'containers/Inboxes';
import Conversation from 'containers/Conversation';
import mainMessages from 'datas/mainMessages';
import PropTypes from 'prop-types';

/* * * * * * * *
 * * Messaging *
 *
 * @description : Messaging page is composed of two parts : inboxes & conversation
 * Inboxes : All my inbox messages
 * Conversation : An opened conversation
 *
 * @props ----------------------------------------------------------------------------------------------------------------------------------------------
 * - getMyInboxMessagesListForMyAnnouncements     => get my inboxes messages for my announcements
 * - getMyInboxMessagesListForOtherAnnouncements  => get my inboxes messages for others announcements
 * - myInboxMessagesListForMyAnnouncements        => messages list received for my announcements
 * - myInboxMessagesListForOtherAnnouncements     => messages list sent on others announcements
 * - conversationMessagesList                     => list of messages for one conversation
 * - isLoading                                    => is Loading mode or not ?
 * - checkIfLogged (dispatched func)              => check if user is logged.
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const Messaging = ({
  getMyInboxMessagesListForMyAnnouncements,
  getMyInboxMessagesListForOtherAnnouncements,
  myInboxMessagesListForMyAnnouncements,
  myInboxMessagesListForOtherAnnouncements,
  conversationMessagesList,
  loadStart,
  isLoading,
  checkIfLogged,
}) => {
  /* * * * * * * * *
   * * useEffects *
   */
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => {
    getMyInboxMessagesListForMyAnnouncements();
    getMyInboxMessagesListForOtherAnnouncements();
    checkIfLogged();
  }, [conversationMessagesList]);

  const noMessages =
    !myInboxMessagesListForMyAnnouncements[0] &&
    !myInboxMessagesListForOtherAnnouncements[0];

  useEffect(() => {
    if (noMessages || isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [
    myInboxMessagesListForOtherAnnouncements,
    myInboxMessagesListForMyAnnouncements,
    isLoading,
  ]);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* MESSAGING - LOADER */}
      <Loader active={isLoading} />
      {!isLoading && (
        <>
          {/* MESSAGING - MAIN MESSAGE */}
          <PageMainMessage
            line01={
              noMessages
                ? mainMessages.messaging.line01alt
                : mainMessages.messaging.line01
            }
            line02={
              noMessages
                ? mainMessages.messaging.line02alt
                : mainMessages.messaging.line02
            }
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02={
              noMessages
                ? 'oservice-text-main-message--line02-messaging-empty'
                : 'oservice-text-main-message--line02'
            }
          />
          {!noMessages && (
            <div className="oservice-messaging">
              {/* MESSAGING - INBOXES */}
              <Inboxes />
              {/* MESSAGING - CONVERSATION */}
              <Conversation />
            </div>
          )}
        </>
      )}
    </>
  );
};

/* PropTypes */
Messaging.propTypes = {
  getMyInboxMessagesListForMyAnnouncements: PropTypes.func,
  getMyInboxMessagesListForOtherAnnouncements: PropTypes.func,
  myInboxMessagesListForMyAnnouncements: PropTypes.arrayOf(PropTypes.object),
  myInboxMessagesListForOtherAnnouncements: PropTypes.arrayOf(PropTypes.object),
  conversationMessagesList: PropTypes.arrayOf(PropTypes.object),
  loadStart: PropTypes.func,
  isLoading: PropTypes.bool,
  checkIfLogged: PropTypes.func,
};

/* Export component */
export default Messaging;
