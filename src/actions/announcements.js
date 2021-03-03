/* * * * * * * * * * * * * * * * * * * * *
 * * get last three announcements action *
 *
 * @description : api call to get the last three announcement
 *
 */
export const GET_LAST_THREE_ANNOUNCEMENTS = 'GET_LAST_THREE_ANNOUNCEMENTS';
export const getLastThreeAnnouncements = () => ({
  type: GET_LAST_THREE_ANNOUNCEMENTS,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * store last three announcements action *
 *
 * @description : store the last three announcement into state
 *
 * @params ----------------------------------------------------------
 * - lastThreeAnnouncements => last three announcements from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_LAST_THREE_ANNOUNCEMENTS = 'STORE_LAST_THREE_ANNOUNCEMENTS';
export const storeLastThreeAnnouncements = (lastThreeAnnouncements) => ({
  type: STORE_LAST_THREE_ANNOUNCEMENTS,
  lastThreeAnnouncements,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * Get last announcements list action *
 *
 * @description : Get last announcements list
 *
 */
export const GET_LAST_ANNOUNCEMENTS_LIST = 'GET_LAST_ANNOUNCEMENTS_LIST';
export const getLastAnnouncementsList = () => ({
  type: GET_LAST_ANNOUNCEMENTS_LIST,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * Store last announcements list action *
 *
 * @description : Store last announcements list into state
 *
 * @params ----------------------------------------------------------
 * - lastAnnouncementsList => last nnouncements list from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_LAST_ANNOUNCEMENTS_LIST = 'STORE_LAST_ANNOUNCEMENTS_LIST';
export const storeLastAnnouncementsList = (lastAnnouncementsList) => ({
  type: STORE_LAST_ANNOUNCEMENTS_LIST,
  lastAnnouncementsList,
});

/* * * * * * * * * * * * * * * * *
 * * get more announcements action *
 *
 * @description : load more announcements
 *
 */
export const GET_MORE_ANNOUNCEMENTS = 'GET_MORE_ANNOUNCEMENTS';
export const getMoreAnnouncements = () => ({
  type: GET_MORE_ANNOUNCEMENTS,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * store number of total results action *
 *
 * @description : Store into state the number of total results
 *
 * @params ----------------------------------------------------------
 * - numberOfTotalResults => number of total results from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_NUMBER_OF_TOTAL_RESULTS = 'STORE_NUMBER_OF_TOTAL_RESULTS';
export const storeNumberOfTotalResults = (numberOfTotalResults) => ({
  type: STORE_NUMBER_OF_TOTAL_RESULTS,
  numberOfTotalResults,
});

/* * * * * * * * * * * * * * * * * * * * * * * *
 * * Configure number of results per page action *
 *
 * @description : Configure number of results per page
 *
 */
export const CONFIGURE_NUMBER_OF_RESULTS_PER_PAGE =
  'CONFIGURE_NUMBER_OF_RESULTS_PER_PAGE';
export const configureNumberOfResultsPerPage = () => ({
  type: CONFIGURE_NUMBER_OF_RESULTS_PER_PAGE,
});

/* * * * * * * * * * * * * * * * * * * * * * * *
 * * Store number of displayed results action *
 *
 * @description : Store into state the number of displayed results
 *
 * @params ----------------------------------------------------------
 * - numberOfDisplayedResults => number of displayed results
 * ------------------------------------------------------------------
 *
 */
export const STORE_NUMBER_OF_DISPLAYED_RESULTS =
  'STORE_NUMBER_OF_DISPLAYED_RESULTS';
export const storeNumberOfDisplayedResults = (numberOfDisplayedResults) => ({
  type: STORE_NUMBER_OF_DISPLAYED_RESULTS,
  numberOfDisplayedResults,
});

/* * * * * * * * * * * * * * * * * * *
 * * get my announcements list action *
 *
 * @description : get my announcements list
 *
 */
export const GET_MY_ANNOUNCEMENTS_LIST = 'GET_MY_ANNOUNCEMENTS_LIST';
export const getMyAnnouncementsList = () => ({
  type: GET_MY_ANNOUNCEMENTS_LIST,
});

/* * * * * * * * * * * * * * * * * * * *
 * * Store my announcements list action *
 *
 * @description : Store my announcements list into state
 *
 * @params ----------------------------------------------------------
 * - myAnnouncementsList => my announcements list from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_MY_ANNOUNCEMENTS_LIST = 'STORE_MY_ANNOUNCEMENTS_LIST';
export const storeMyAnnouncementsList = (myAnnouncementsList) => ({
  type: STORE_MY_ANNOUNCEMENTS_LIST,
  myAnnouncementsList,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * get announcements details using url slug action *
 *
 * @description : Use url slug to get announcement details
 *
 */
export const GET_ANNOUNCEMENT_DETAILS_USING_URL_SLUG =
  'GET_ANNOUNCEMENT_DETAILS_USING_URL_SLUG';
export const getAnnouncementDetailsUsingUrlSlug = () => ({
  type: GET_ANNOUNCEMENT_DETAILS_USING_URL_SLUG,
});

/* * * * * * * * * * * * * * * * * * * *
 * * Store announcement details action *
 *
 * @description : Store announcement details into state
 *
 * @params ----------------------------------------------------------
 * - announcementDetails => announcement details from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_ANNOUNCEMENT_DETAILS = 'STORE_ANNOUNCEMENT_DETAILS';
export const storeAnnouncementDetails = (announcementDetails) => ({
  type: STORE_ANNOUNCEMENT_DETAILS,
  announcementDetails,
});

/* * * * * * * * * * * * * * * * * * * * * * * *
 * * Get announcement details to update action  *
 *
 * @description : Get announcement details for update it
 *
 */
export const GET_ANNOUNCEMENT_DETAILS_TO_UPDATE =
  'GET_ANNOUNCEMENT_DETAILS_TO_UPDATE';
export const getAnnouncementDetailsToUpdate = () => ({
  type: GET_ANNOUNCEMENT_DETAILS_TO_UPDATE,
});

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * * store announcement details to update action  *
 *
 * @description : Store announcement details into state, to display it into the update form.
 *
 * @params ----------------------------------------------------------
 * - announcementDetailsForUpdate => announcement details
 * ------------------------------------------------------------------
 *
 */
export const STORE_ANNOUNCEMENT_DETAILS_TO_UPDATE =
  'STORE_ANNOUNCEMENT_DETAILS_TO_UPDATE';
export const storeAnnouncementDetailsToUpdate = (
  announcementDetailsForUpdate
) => ({
  type: STORE_ANNOUNCEMENT_DETAILS_TO_UPDATE,
  announcementDetailsForUpdate,
});

/* * * * * * * * * * * * * * * * *
 * * delete annoncement action *
 *
 * @description : delete annoncement
 *
 */
export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';
export const deleteAnnouncement = () => ({
  type: DELETE_ANNOUNCEMENT,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Store my new announcements list after delete action *
 *
 * @description : Store into state my new announcements list after delete
 *
 * @params ----------------------------------------------------------
 * - newAnnouncementsList => my new announcements list from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_MY_NEW_ANNOUNCEMENTS_LIST_AFTER_DELETE =
  'STORE_MY_NEW_ANNOUNCEMENTS_LIST_AFTER_DELETE';
export const storeMyNewAnnouncementsListAfterDelete = (
  newAnnouncementsList
) => ({
  type: STORE_MY_NEW_ANNOUNCEMENTS_LIST_AFTER_DELETE,
  newAnnouncementsList,
});
