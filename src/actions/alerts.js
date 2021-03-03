/* * * * * * * * * * *
 * * Set error action *
 *
 * @description : set error message of a specific field in a specific form
 *
 * @params ----------------------------------------------------------
 * - form (str)           => specific form
 * - formKey (str)        => specific form key
 * - errorMessage (str)   => the error message
 * ------------------------------------------------------------------
 *
 */
export const SET_ERROR = 'SET_ERROR';
export const setError = (form, formKey, errorMessage) => ({
  type: SET_ERROR,
  form,
  formKey,
  errorMessage,
});

/* * * * * * * * * * * *
 * * reset error action *
 *
 * @description : reset errors in a specific form
 *
 * @params ----------------------------------------------------------
 * - form (str)           => specific form
 * ------------------------------------------------------------------
 *
 */
export const RESET_ERRORS = 'RESET_ERRORS';
export const resetErrors = (form) => ({
  type: RESET_ERRORS,
  form,
});

/* * * * * * * * * * * * * * * * * *
 * * user form check errors action *
 *
 * @description : check errors in user form before submit
 *
 * @params ----------------------------------------------------------
 * - formMode => create or update mode ?
 * ------------------------------------------------------------------
 *
 */
export const USER_FORM_CHECK_ERRORS = 'USER_FORM_CHECK_ERRORS';
export const userFormCheckErrors = (formMode) => ({
  type: USER_FORM_CHECK_ERRORS,
  formMode,
});

/* * * * * * * * * * * * * * * * * * * * * *
 * * announcement form check errors action *
 *
 * @description : check errors in announcement form before submit
 *
 * @params ----------------------------------------------------------
 * - formMode => create or update mode ?
 * ------------------------------------------------------------------
 *
 */
export const ANNOUNCEMENT_FORM_CHECK_ERRORS = 'ANNOUNCEMENT_FORM_CHECK_ERRORS';
export const announcementFormCheckErrors = (formMode) => ({
  type: ANNOUNCEMENT_FORM_CHECK_ERRORS,
  formMode,
});

/* * * * * * * * * * * * *
 * * Open pop up action *
 *
 * @description : Open the pop up window
 *
 * @params ----------------------------------------------------------
 * - selectedElementId (number) => id of the clicked item
 * ------------------------------------------------------------------
 *
 */
export const OPEN_POP_UP = 'OPEN_POP_UP';
export const openPopUp = (selectedElementId) => ({
  type: OPEN_POP_UP,
  selectedElementId,
});

/* * * * * * * * * * * * *
 * * close pop up action *
 *
 * @description : close the pop up window
 *
 */
export const CLOSE_POP_UP = 'CLOSE_POP_UP';
export const closePopUp = () => ({
  type: CLOSE_POP_UP,
});

/* * * * * * * * * * * * * * * * * *
 * * display success message action *
 *
 * @description : display a success message
 *
 */
export const DISPLAY_SUCCESS_MESSAGE = 'DISPLAY_SUCCESS_MESSAGE';
export const displaySuccessMessage = () => ({
  type: DISPLAY_SUCCESS_MESSAGE,
});
