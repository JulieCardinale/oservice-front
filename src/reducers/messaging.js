/* Imports */
import {
  STORE_MY_MESSAGES_LIST_FOR_THIS_ANNOUNCEMENT,
  STORE_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS,
  STORE_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS,
  STORE_CONVERSATION_FIRST_MESSAGE,
  STORE_CONVERSATION_MESSAGES_LIST,
} from 'actions/messaging';

/* * * * * * * * * * * * * * *
 * * Messaging Initial state *
 *
 * @description : All load reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - myMessagesListForThisAnnouncement (array)            => my message list for this announcement
 * - myInboxMessagesListForMyAnnouncements (array)        => my message list for my announcements
 * - myInboxMessagesListForOtherAnnouncements (array)     => my message list for other announcements
 * - conversationFirstMessage (obj)                       => conversation first message
 * - conversationMessagesList (array)                     => conversation messages list
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  myMessagesListForThisAnnouncement: [],
  myInboxMessagesListForMyAnnouncements: [],
  myInboxMessagesListForOtherAnnouncements: [],
  conversationFirstMessage: {},
  conversationMessagesList: [],
};

/* * * * * * * * * * * *
 * * Messaging reducer *
 *
 * @description : All messaging reducer actions
 *
 * @cases ---------------------------------------------------------------------------------------------------------------------------------
 * - STORE MY MESSAGES FOR 'THIS' ANNOUNCEMENT              => Store to state my messages list for this announcement
 * - STORE MY INBOX MESSAGES LIST FOR MY ANNOUNCEMENTS      => Store my inbox messages list for my announcements
 * - STORE MY INBOX MESSAGES LIST FOR OTHER ANNOUNCEMENTS   => Store into state my inbox messages list for other announcements
 * - STORE CONVERSATION FIRST MESSAGE                       => Store into state conversation first message
 * - STORE CONVERSATION MESSAGES LIST                       => Store to state conversation messages list
 * ----------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const messaging = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * *
     * * STORE MY MESSAGES FOR 'THIS' ANNOUNCEMENT *
     *
     * @description : Store to state my messages list for this announcement
     *
     */
    case STORE_MY_MESSAGES_LIST_FOR_THIS_ANNOUNCEMENT:
      return {
        ...state,
        myMessagesListForThisAnnouncement:
          action.myMessagesListForThisAnnouncement,
      };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * STORE MY INBOX MESSAGES LIST FOR MY ANNOUNCEMENTS *
     *
     * @description : Store my inbox messages list for my announcements
     *
     */
    case STORE_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS:
      return {
        ...state,
        myInboxMessagesListForMyAnnouncements:
          action.myInboxMessagesListForMyAnnouncements,
      };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * STORE MY INBOX MESSAGES LIST FOR OTHER ANNOUNCEMENTS *
     *
     * @description : Store into state my inbox messages list for other announcements
     *
     */
    case STORE_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS:
      return {
        ...state,
        myInboxMessagesListForOtherAnnouncements:
          action.myInboxMessagesListForOtherAnnouncements,
      };
    /* * * * * * * * * * * * * * * * * * * *
     * * STORE CONVERSATION FIRST MESSAGE *
     *
     * @description : Store into state conversation first message
     *
     */
    case STORE_CONVERSATION_FIRST_MESSAGE:
      return {
        ...state,
        conversationFirstMessage: action.conversationFirstMessageValue,
      };
    /* * * * * * * * * * * * * * * * * * * *
     * * STORE CONVERSATION MESSAGES LIST *
     *
     * @description : Store to state conversation messages list
     *
     */
    case STORE_CONVERSATION_MESSAGES_LIST:
      return {
        ...state,
        conversationMessagesList: action.conversationMessagesList,
      };
    default:
      return state;
  }
};

/* Export */
export default messaging;
