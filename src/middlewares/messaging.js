/* Imports */
import { focusToField } from 'selectors';
import { displaySuccessMessage, setError } from 'actions/alerts';
import { loadEnd } from 'actions/load';
import { resetState } from 'actions/utils';
import {
  FIRST_CONTACT_FORM_SUBMIT,
  CONVERSATION_FORM_SUBMIT,
} from 'actions/forms';
import {
  GET_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS,
  GET_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS,
  CHECK_IF_I_HAVE_ALREADY_SENT_MESSAGE,
  GET_CONVERSATION_FIRST_MESSAGE,
  GET_CONVERSATION_MESSAGES_LIST,
  storeMyMessagesListForThisAnnouncement,
  storeMyInboxMessagesListForMyAnnouncements,
  storeMyInboxMessagesListForOtherAnnouncements,
  storeConversationFirstMessage,
  storeConversationMessagesList,
} from 'actions/messaging';
import {
  ApiClient,
  ApiClientUserToken,
} from 'configuration/AxiosConfiguration';

/*
 * Import sessionStorage
 * @infos : connectedUserId => id of the current connected user. Usefull for api requests
 */
const { connectedUserId } = sessionStorage;

/* * * * * * * * * * * * *
 * * Messaging middleware *
 *
 * @description : Api calls about messaging
 *
 * @cases ---------------------------------------------------------------------------------
 * - CHECK IF I HAVE ALREADY SENT MESSAGE                 => Check if I have already sent message to this announcement to display or not send first message button
 * - FIRST CONTACT FORM SUBMIT                            => submit contact form
 * - GET MY INBOX MESSAGES LIST FOR MY ANNOUNCEMENTS      => Get my inbox message list for my announcements, received messages.
 * - GET MY INBOX MESSAGES LIST FOR OTHER ANNOUNCEMENTS   => Get my inbox message list for other announcements sent messages
 * - GET CONVERSATION FIRST MESSAGE                       => Get conversation first message
 * - GET CONVERSATION MESSAGES LIST                       => Get conversation messages list
 * - CONVERSATION FORM SUBMIT                             => submit conversation form
 * ----------------------------------------------------------------------------------------
 *
 */
const messaging = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case CHECK_IF_I_HAVE_ALREADY_SENT_MESSAGE: {
      /*
       * getState
       * @info : get url slug from state
       */
      const { urlSlug } = store.getState().utils;

      /*
       * API GET
       * @info : Check if I've send message to 'this' announcement & get messages lists
       * @params :
       * post        => post id (announcement id)
       * author      => author id (connected user id)
       * per_page    => 1000 elements per page
       */
      ApiClientUserToken.get(
        `/wp/v2/comments/?post=${urlSlug}&author=${connectedUserId}&per_page=1000`
      )
        /*
         * SUCCESS
         * @info : storeMyMessagesListForThisAnnouncement => store message list to state
         */
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(
              storeMyMessagesListForThisAnnouncement(response.data)
            );
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {});
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case FIRST_CONTACT_FORM_SUBMIT: {
      /*
       * getState
       * @info : get contact form message value from state
       */
      const { firstContactFormMessageValue } =
        store.getState().forms.firstContactForm;

      /*
       * getState
       * @info : get urlSlug (announcement id) from state
       */
      const { urlSlug } = store.getState().utils;

      /*
       * API POST
       * @info : post first announcement message
       * @content :
       * content        => message content
       * post           => related post (related announcement id)
       */
      ApiClientUserToken.post('/wp/v2/comments', {
        content: firstContactFormMessageValue,
        post: urlSlug,
      })
        /*
         * SUCCESS
         * @info :
         * loadEnd                 => stop on submit loading
         * displaySuccessMessage   => display success message
         * setTimeout              => after 3sec redirect to my announcements page
         */
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(loadEnd('isLoadingOnSubmit'));
            store.dispatch(displaySuccessMessage());
            setTimeout(() => {
              window.location = '/messagerie';
            }, 3000);
          }
          /*
           * ERRORS (handling with API response)
           * @info :
           * errorCode                     => store errorCode
           * contactFormSetMessageError    => display error when message is empty
           * focusToField                  => focus to input
           */
        })
        .catch((error) => {
          const errorCode = error.response.data.code;
          if (errorCode === 'rest_comment_content_invalid') {
            store.dispatch(
              setError(
                'contactFormErrors',
                'contactFormErrorMessage',
                'Attention, votre message est vide !'
              )
            );
          }
          focusToField('#firstContactFormMessageValue');
          /*
           * FINALLY
           * @info :
           * loadEnd => stop on submit loading
           */
        })
        .finally(() => {
          store.dispatch(loadEnd('isLoadingOnSubmit'));
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_MY_INBOX_MESSAGES_LIST_FOR_MY_ANNOUNCEMENTS: {
      /*
       * API GET
       * @info : first we get connected user id announcements list
       * @content :
       * per_page        => 1000 elements per page
       * author          => connected user id
       */
      ApiClient.get(
        `/wp/v2/announcements/?per_page=1000&author=${connectedUserId}`
      )
        /*
         * SUCCESS
         */
        .then((announcementsListRequest) => {
          if (announcementsListRequest.status === 200) {
            /*
             * myAnnouncementsListData
             * @info : store my announcement list datas
             */
            const myAnnouncementsListData = announcementsListRequest.data;
            /*
             * myAnnouncementsIdsList
             * @info : we create an array with connected user announcements ids
             * In my announcements datas we just want Ids -> we use map()
             * We want ids to this format (id01,id02,id03) -> we use join(',')
             */
            const myAnnouncementsIdsList = myAnnouncementsListData
              .map((announcementData) => announcementData.id)
              .join(',');
            if (myAnnouncementsIdsList) {
              /*
               * API GET
               * @info : get inbox messages related of connected user announcements
               * @content :
               * post            => related posts (we want messages list of those posts)
               * parent          => no parent
               * per_page        => 1000 elements per page
               */
              ApiClient.get(
                `/wp/v2/comments/?post=${myAnnouncementsIdsList}&parent=0&per_page=1000`
              )
                .then((myMessagesListforMyAnnouncementsRequest) => {
                  /*
                   * SUCCESS
                   * @info :
                   * storeMyInboxMessagesListForMyAnnouncements => store messages list of connected user for their own announcements
                   * loadEnd                                    => stop loading
                   */
                  if (myMessagesListforMyAnnouncementsRequest.status === 200) {
                    store.dispatch(
                      storeMyInboxMessagesListForMyAnnouncements(
                        myMessagesListforMyAnnouncementsRequest.data
                      )
                    );
                    setTimeout(() => {
                      store.dispatch(loadEnd('isLoading'));
                    }, 300);
                  }
                })
                /*
                 * ERRORS
                 */
                .catch(() => {});
            }
          }
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_MY_INBOX_MESSAGES_LIST_FOR_OTHER_ANNOUNCEMENTS: {
      /*
       * API GET
       * @info : get inbox messages posted by connected user on others announcements
       * @content :
       * author          => connected user id
       * parent          => no parent
       * per_page        => 1000 elements per page
       */
      ApiClientUserToken.get(
        `/wp/v2/comments/?author=${connectedUserId}&parent=0&per_page=1000`
      )
        .then((response) => {
          /*
           * SUCCESS
           * @info :
           * storeMyInboxMessagesListForOtherAnnouncements => store messages list posted by connected user on others announcements
           * loadEnd                                       => stop loading
           */
          if (response.status === 200) {
            store.dispatch(
              storeMyInboxMessagesListForOtherAnnouncements(response.data)
            );
            setTimeout(() => {
              store.dispatch(loadEnd('isLoading'));
            }, 300);
          }
        })
        /*
         * ERRORS
         *
         */
        .catch(() => {});
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_CONVERSATION_FIRST_MESSAGE: {
      /*
       * API GET
       * @info : get the first message of a conversation
       * @content :
       * action.conversationFirstMessageId => first message id
       */
      ApiClient.get(`/wp/v2/comments/${action.conversationFirstMessageId}`)
        .then((response) => {
          /*
           * SUCCESS
           * @info :
           * storeMyInboxMessagesListForOtherAnnouncements => store the first message of a conversation into state
           */
          if (response.status === 200) {
            store.dispatch(storeConversationFirstMessage(response.data));
          }
        })
        /*
         * ERRORS
         *
         */
        .catch(() => {});
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_CONVERSATION_MESSAGES_LIST: {
      /*
       * API GET
       * @info : get conversation messages list
       * @params :
       * parent      => get messages list with the first message as parent
       * order=asc   => older first, to get the newest messages in bottom in conversation
       * per_page    => 1000 messages per pages
       */
      ApiClient.get(
        `/wp/v2/comments/?parent=${action.conversationFirstMessageId}&order=asc&per_page=1000`
      )
        /*
         * SUCCESS
         * @info :
         * storeConversationMessagesList => store conversation messages list into state
         * conversationFormResetErrors   => reset form errors
         * loadEnd                       => stop loading messages list
         */
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(storeConversationMessagesList(response.data));
            store.dispatch(resetState('conversationFormErrors'));
            store.dispatch(loadEnd('isLoadingMessagesList'));
          }
        })
        /*
         * ERRORS
         *
         */
        .catch(() => {});
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case CONVERSATION_FORM_SUBMIT: {
      /*
       * getState
       * @info : get conversation form message value from state
       */
      const { conversationFormMessageValue } =
        store.getState().forms.conversationForm;

      /*
       * API POST
       * @info : post a message from conversation form
       * @content :
       * content       => message content
       * parent        => ALL messages of a conversation are responses of the FIRST message
       * post          => post (announcement) related to the message
       */
      ApiClientUserToken.post('/wp/v2/comments', {
        content: conversationFormMessageValue,
        parent: action.conversationFirstMessageId,
        post: action.conversationPostId,
      })
        /*
         * SUCCESS
         * @info :
         * conversationFormResetErrors   => reset form errors
         * Api get                       => refresh conversation message list
         */
        .then((postConversationMessageResponse) => {
          if (postConversationMessageResponse.status === 201) {
            store.dispatch(resetState('conversationFormErrors'));
            /*
             * API GET
             * @info : refresh conversation message list
             * @params :
             * parent      => get messages list with the first message as parent
             * order=asc   => older first, to get the newest messages in bottom in conversation
             * per_page    => 1000 messages per pages
             */
            ApiClientUserToken.get(
              `/wp/v2/comments/?parent=${action.conversationFirstMessageId}&order=asc&per_page=1000`
            ).then((response) => {
              /*
               * SUCCESS
               * @info :
               * storeConversationMessagesList                   => store conversation messages list into state
               * conversationFormResetErrors                     => reset form errors
               */
              if (response.status === 200) {
                store.dispatch(storeConversationMessagesList(response.data));
                store.dispatch(resetState('conversationForm'));
                /*
                 * API GET
                 * @info : get the last id of the message i've sent (I don't want a notification for it)
                 * @params :
                 * author      => connected user id
                 * per_page    => 1000 messages per pages
                 */
                ApiClientUserToken.get(
                  `/wp/v2/comments/?author=${connectedUserId}&per_page=1000`
                ).then((connectedUserMessagesList) => {
                  if (response.status === 200) {
                    /*
                     *  When I submit a message I don't want to see it as a new message.
                     *  So I add it in sessionStorage manualy
                     */
                    sessionStorage.setItem(
                      action.conversationFirstMessageId,
                      connectedUserMessagesList.data[0].id
                    );
                  }
                });
              }
            });
          }
          /*
           * ERRORS (handling with API response)
           * @info :
           * conversationFormResetErrors                     => reset form errors
           * errorCode                                       => store errorCode
           * conversationFormSetMessageError                 => display error when message is empty
           */
        })
        .catch((error) => {
          store.dispatch(resetState('conversationFormErrors'));
          const errorCode = error.response.data.code;
          if (errorCode === 'rest_comment_content_invalid') {
            store.dispatch(
              setError(
                'contactFormErrors',
                'contactFormErrorMessage',
                'Attention, votre message est vide !'
              )
            );
          }
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    default:
      next(action);
      break;
  }
};

/* Export middleware */
export default messaging;
