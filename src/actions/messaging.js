/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Check if I have already sent message to this announcement action  *
 *
 * @description : Check if I have already sent message to this announcement
 * to display or not send first message button
 *
 */
export const CHECK_IF_I_HAVE_ALREADY_SENT_MESSAGE =
  'CHECK_IF_I_HAVE_ALREADY_SENT_MESSAGE';
export const checkIfIhaveAlreadySentMessage = () => ({
  type: CHECK_IF_I_HAVE_ALREADY_SENT_MESSAGE,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Store my messages list for this announcement action *
 *
 * @description : Store to state my messages list for this announcement
 *
 * @params ----------------------------------------------------------------------------------
 * - myMessagesListForThisAnnouncement => my messages list for this announcement
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_MY_MESSAGES_LIST_FOR_THIS_ANNOUNCEMENT =
  'STORE_MY_MESSAGES_LIST_FOR_THIS_ANNOUNCEMENT';
export const storeMyMessagesListForThisAnnouncement = (
  myMessagesListForThisAnnouncement
) => ({
  type: STORE_MY_MESSAGES_LIST_FOR_THIS_ANNOUNCEMENT,
  myMessagesListForThisAnnouncement,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Get my inbox message list for my announcements action  *
 *
 * @description : Get my inbox message list for my announcements
 * received messages
 *
 */
export const GET_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS =
  'GET_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS';
export const getMyInboxMessagesListForMyAnnouncements = () => ({
  type: GET_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Store my inbox messages list for my announcements action *
 *
 * @description : Store my inbox messages list for my announcements
 *
 * @params ----------------------------------------------------------------------------------
 * - myInboxMessagesListForMyAnnouncements => my messages list for my announcements
 * received messages
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS =
  'STORE_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS';
export const storeMyInboxMessagesListForMyAnnouncements = (
  myInboxMessagesListForMyAnnouncements
) => ({
  type: STORE_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS,
  myInboxMessagesListForMyAnnouncements,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Get my inbox message list for other announcements action  *
 *
 * @description : Get my inbox message list for other announcements
 * sent messages
 *
 */
export const GET_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS =
  'GET_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS';
export const getMyInboxMessagesListForOtherAnnouncements = () => ({
  type: GET_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Store my inbox messages list for other announcements action *
 *
 * @description : Store into state my inbox messages list for other announcements
 *
 * @params ----------------------------------------------------------------------------------
 * - myInboxMessagesListForOtherAnnouncements => my messages list for other announcements
 * sent messages
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS =
  'STORE_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS';
export const storeMyInboxMessagesListForOtherAnnouncements = (
  myInboxMessagesListForOtherAnnouncements
) => ({
  type: STORE_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS,
  myInboxMessagesListForOtherAnnouncements,
});

/* * * * * * * * * * * * * * * * * * * * * *
 * * Get conversation first message action  *
 *
 * @description : Get conversation first message
 *
 * @params ----------------------------------------------------------
 * - conversationFirstMessageId => conversation first message id
 * ------------------------------------------------------------------
 *
 */
export const GET_CONVERSATION_FIRST_MESSAGE = 'GET_CONVERSATION_FIRST_MESSAGE';
export const getConversationFirstMessage = (conversationFirstMessageId) => ({
  type: GET_CONVERSATION_FIRST_MESSAGE,
  conversationFirstMessageId,
});

/* * * * * * * * * * * * * * * * * * * * * * *
 * * Store conversation first message action *
 *
 * @description : Store into state conversation first message
 *
 * @params ----------------------------------------------------------------------------------
 * - conversationFirstMessageValue => conversation first message value
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_CONVERSATION_FIRST_MESSAGE =
  'STORE_CONVERSATION_FIRST_MESSAGE';
export const storeConversationFirstMessage = (
  conversationFirstMessageValue
) => ({
  type: STORE_CONVERSATION_FIRST_MESSAGE,
  conversationFirstMessageValue,
});

/* * * * * * * * * * * * * * * * * * * * * *
 * * Get conversation messages list action *
 *
 * @description : Get conversation messages list
 *
 * @params ----------------------------------------------------------
 * - conversationFirstMessageId => conversation first message id usefull to get the whole conversation
 * first message is parent, others messages are children.
 * ------------------------------------------------------------------
 *
 */
export const GET_CONVERSATION_MESSAGES_LIST =
  'GET_CONVERSATION_MESSAGES  _LIST';
export const getConversationMessagesList = (conversationFirstMessageId) => ({
  type: GET_CONVERSATION_MESSAGES_LIST,
  conversationFirstMessageId,
});

/* * * * * * * * * * * * * * * * * * * * * * *
 * * Store conversation first message action *
 *
 * @description : Store to state conversation messages list
 *
 * @params ----------------------------------------------------------------------------------
 * - conversationMessagesList => conversation messages list
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_CONVERSATION_MESSAGES_LIST =
  'STORE_CONVERSATION_MESSAGES_LIST';
export const storeConversationMessagesList = (conversationMessagesList) => ({
  type: STORE_CONVERSATION_MESSAGES_LIST,
  conversationMessagesList,
});
