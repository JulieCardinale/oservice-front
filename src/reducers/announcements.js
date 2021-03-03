/* Imports */
import {
  CONFIGURE_NUMBER_OF_RESULTS_PER_PAGE,
  STORE_LAST_THREE_ANNOUNCEMENTS,
  STORE_LAST_ANNOUNCEMENTS_LIST,
  STORE_NUMBER_OF_TOTAL_RESULTS,
  STORE_NUMBER_OF_DISPLAYED_RESULTS,
  STORE_MY_ANNOUNCEMENTS_LIST,
  STORE_MY_NEW_ANNOUNCEMENTS_LIST_AFTER_DELETE,
  STORE_ANNOUNCEMENT_DETAILS,
} from 'actions/announcements';

/* * * * * * * * * * * * * * * *
 * * Announcement Initial state *
 *
 * @description : All announcement reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - lastThreeAnnouncements (array)             => last three announcements
 * - lastAnnouncementsList (array)              => last announcements list
 * - numberOfTotalResults (number)              => number of total results
 * - numberOfDisplayedResults (number)          => number of displayed results
 * - numberOfResultsPerPageConfigured (number)  => number of result per page configured
 * - myAnnouncementsList (array)                =>  my announcements list
 * - announcementDetails (array)                => announcement details
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  lastThreeAnnouncements: [{}],

  lastAnnouncementsList: [{}],

  numberOfTotalResults: 0,

  numberOfDisplayedResults: 0,

  numberOfResultsPerPageConfigured: 10,

  myAnnouncementsList: [{}],

  announcementDetails: [{}],
};

/* * * * * * * * * * * * * *
 * * Announcements reducer *
 *
 * @description : All announcements reducer actions
 *
 * @cases -----------------------------------------------------------------------------------------------
 * - STORE LAST THREE ANNOUNCEMENTS            => store the last three announcement into state
 * - STORE LAST ANNOUNCEMENTS                  => Store last announcements list into state
 * - STORE NUMBER OF TOTAL RESULTS             => Store into state the number of total results
 * - STORE NUMBER OF DISPLAYED RESULTS         => Store into state the number of displayed results
 * - CONFIGURE NUMBER OF RESULTS PER PAGE      => Configure number of results per page
 * - STORE MY ANNOUNCEMENTS LIST               => Store my announcements list into state
 * - STORE MY ANNOUNCEMENTS LIST AFTER DELETE  => Store into state my new announcements list after delete
 * - STORE ANNOUNCEMENT DETAILS                => Store announcement details into state
 * -------------------------------------------------------------------------------------------------------
 *
 */
const announcements = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * *
     * * STORE LAST THREE ANNOUNCEMENTS *
     *
     * @description : store the last three announcement into state
     *
     */
    case STORE_LAST_THREE_ANNOUNCEMENTS:
      return {
        ...state,
        lastThreeAnnouncements: action.lastThreeAnnouncements,
      };
    /* * * * * * * * * * * * * * * *
     * * STORE LAST ANNOUNCEMENTS *
     *
     * @description : Store last announcements list into state
     *
     */
    case STORE_LAST_ANNOUNCEMENTS_LIST:
      return {
        ...state,
        lastAnnouncementsList: action.lastAnnouncementsList,
      };

    /* * * * * * * * * * * * * * * * * *
     * * STORE NUMBER OF TOTAL RESULTS  *
     *
     * @description : Store into state the number of total results
     *
     */
    case STORE_NUMBER_OF_TOTAL_RESULTS:
      return {
        ...state,
        numberOfTotalResults: action.numberOfTotalResults,
        numberOfResultsPerPageConfigured:
          state.numberOfResultsPerPageConfigured + 10,
      };
    /* * * * * * * * * * * * * * * * * * * *
     * * STORE NUMBER OF DISPLAYED RESULTS *
     *
     * @description : Store into state the number of displayed results
     *
     */
    case STORE_NUMBER_OF_DISPLAYED_RESULTS:
      return {
        ...state,
        numberOfDisplayedResults: action.numberOfDisplayedResults,
      };
    /* * * * * * * * * * * * * * * * * * * * * *
     * * CONFIGURE NUMBER OF RESULTS PER PAGE *
     *
     * @description : Configure number of results per page
     *
     */
    case CONFIGURE_NUMBER_OF_RESULTS_PER_PAGE:
      return {
        ...state,
        numberOfResultsPerPageConfigured: 10,
      };
    /* * * * * * * * * * * * * * * * *
     * * STORE MY ANNOUNCEMENTS LIST *
     *
     * @description : Store my announcements list into state
     *
     */
    case STORE_MY_ANNOUNCEMENTS_LIST:
      return {
        ...state,
        myAnnouncementsList: action.myAnnouncementsList,
      };
    /* * * * * * * * * * * * * * * * * * * * * * *
     * * STORE MY ANNOUNCEMENTS LIST AFTER DELETE *
     *
     * @description : Store into state my new announcements list after delete
     *
     */
    case STORE_MY_NEW_ANNOUNCEMENTS_LIST_AFTER_DELETE:
      return {
        ...state,
        myAnnouncementsList: action.newAnnouncementsList,
      };
    /* * * * * * * * * * * * * * * * *
     * * STORE ANNOUNCEMENT DETAILS *
     *
     * @description : Store announcement details into state
     *
     */
    case STORE_ANNOUNCEMENT_DETAILS:
      return {
        ...state,
        announcementDetails: action.announcementDetails,
      };
    default:
      return state;
  }
};

/* Export */
export default announcements;
