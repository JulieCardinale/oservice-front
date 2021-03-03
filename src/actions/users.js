/* * * * * * * * * * * * * *
 * * Auth form login action *
 *
 * @description : Submit form
 *
 */
export const AUTH_FORM_LOGIN = 'AUTH_FORM_LOGIN';
export const authFormLogin = () => ({
  type: AUTH_FORM_LOGIN,
});

/* * * * * * * * * * * * * *
 * * Check if logged *
 *
 * @description : check if user is logged
 *
 */
export const CHECK_IF_LOGGED = 'CHECK_IF_LOGGED';
export const checkIfLogged = () => ({
  type: CHECK_IF_LOGGED,
});

/* * * * * * * * * * * *
 * * Delete user action *
 *
 * @description : Delete user profile
 *
 */
export const DELETE_USER = 'DELETE_USER';
export const deleteUser = () => ({
  type: DELETE_USER,
});

/* * * * * * * * * * * * * *
 * * Get my details action *
 *
 * @description : Get connected user details
 *
 */
export const GET_MY_DETAILS = 'GET_MY_DETAILS';
export const getMyDetails = () => ({
  type: GET_MY_DETAILS,
});

/* * * * * * * * * * * * * * * * * * * * * * * *
 * * Delete user details using url slug action *
 *
 * @description : Get user details using url slug
 *
 */
export const GET_USER_DETAILS_USING_URL_SLUG =
  'GET_USER_DETAILS_USING_URL_SLUG';
export const getUserDetailsUsingUrlSlug = () => ({
  type: GET_USER_DETAILS_USING_URL_SLUG,
});

/* * * * * * * * * * * * * * * *
 * * Store my details action *
 *
 * @description : Store into state connected user details
 *
 * @params ----------------------------------------------------------------------------------
 * - myDetails => connected user details
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_MY_DETAILS = 'STORE_MY_DETAILS';
export const storeMyDetails = (myDetails) => ({
  type: STORE_MY_DETAILS,
  myDetails,
});

/* * * * * * * * * * * * * * * *
 * * Store user details action *
 *
 * @description : Store into state user details
 *
 * @params ----------------------------------------------------------------------------------
 * - userDetails => user details
 * ------------------------------------------------------------------------------------------
 *
 */
export const STORE_USER_DETAILS = 'STORE_USER_DETAILS';
export const storeUserDetails = (userDetails) => ({
  type: STORE_USER_DETAILS,
  userDetails,
});

/* * * * * * * * * * * * * * * * * * * *
 * * get user details to update action  *
 *
 * @description : Get user details for update it
 *
 */
export const GET_USER_DETAILS_TO_UPDATE = 'GET_USER_DETAILS_TO_UPDATE';
export const getUserDetailsToUpdate = () => ({
  type: GET_USER_DETAILS_TO_UPDATE,
});
/* * * * * * * * * * * * * * * * * * * * *
 * * Store user details to update action  *
 *
 * @description : Store user details into state, to display it into the update form.
 *
 * @params ----------------------------------------------------------
 * - userDetailsForUpdate => user details
 * ------------------------------------------------------------------
 *
 */
export const STORE_USER_DETAILS_TO_UPDATE = 'STORE_USER_DETAILS_TO_UPDATE';
export const storeUserDetailsToUpdate = (userDetailsForUpdate) => ({
  type: STORE_USER_DETAILS_TO_UPDATE,
  userDetailsForUpdate,
});
