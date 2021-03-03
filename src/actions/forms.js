/* * * * * * * * * * * * *
 * * Form field on change *
 *
 * @description : handle every form fields
 *
 * @params ----------------------------------------------------------
 * - fieldFormName (str)  => Form name
 * - fieldKey (str)       => Field key
 * - fieldValue (str)     => Field value
 * ------------------------------------------------------------------
 *
 */
export const FORM_FIELD_ON_CHANGE = 'FORM_FIELD_ON_CHANGE';
export const formFieldOnChange = (fieldFormName, fieldKey, fieldValue) => ({
  type: FORM_FIELD_ON_CHANGE,
  fieldFormName,
  fieldKey,
  fieldValue,
});

/* * * * * * * * * * * * *
 * * reset form action  *
 *
 * @description : reset a specific
 *
 * @params ----------------------------------------------------------
 * - form => specific form to reset
 * ------------------------------------------------------------------
 *
 */
export const RESET_FORM = 'RESET_FORM';
export const resetForm = (form) => ({
  type: RESET_FORM,
  form,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Announcement form store city id from api action  *
 *
 * @description : Store select city id into state to associate it to posted announcement
 *
 * @params ----------------------------------------------------------
 * - announcementFormOnChangeCityIdFromApiValue => id value
 * ------------------------------------------------------------------
 *
 */
export const ANNOUNCEMENT_FORM_STORE_CITY_ID_FROM_API =
  'ANNOUNCEMENT_FORM_STORE_CITY_ID_FROM_API';
export const announcementFormStoreCityIdFromApi = (
  announcementFormOnChangeCityIdFromApiValue
) => ({
  type: ANNOUNCEMENT_FORM_STORE_CITY_ID_FROM_API,
  announcementFormOnChangeCityIdFromApiValue,
});

/* * * * * * * * * * * * * * * *
 * * Announcement form submit  *
 *
 * @description : submit form
 *
 * @params ----------------------------------------------------------
 * - formMode                    => Create or update announcement mode ?
 * - announcementFormErrorsArray => array with errors
 * ------------------------------------------------------------------
 *
 */
export const ANNOUNCEMENT_FORM_SUBMIT = 'ANNOUNCEMENT_FORM_SUBMIT';
export const announcementFormSubmit = (
  formMode,
  announcementFormErrorsArray
) => ({
  type: ANNOUNCEMENT_FORM_SUBMIT,
  formMode,
  announcementFormErrorsArray,
});

/* * * * * * * * * * * *
 * * User form submit  *
 *
 * @description : submit form
 *
 * @params ----------------------------------------------------------
 * - formMode            => Create or update user mode ?
 * - userFormErrorsArray => array with errors
 * ------------------------------------------------------------------
 *
 */
export const USER_FORM_SUBMIT = 'USER_FORM_SUBMIT';
export const userFormSubmit = (formMode, userFormErrorsArray) => ({
  type: USER_FORM_SUBMIT,
  formMode,
  userFormErrorsArray,
});

/* * * * * * * * * * * * * * * *
 * * First Contact form submit  *
 *
 * @description : submit form
 *
 */
export const FIRST_CONTACT_FORM_SUBMIT = 'FIRST_CONTACT_FORM_SUBMIT';
export const firstContactFormSubmit = () => ({
  type: FIRST_CONTACT_FORM_SUBMIT,
});

/* * * * * * * * * * * * * * * *
 * * Conversation form submit  *
 *
 * @description : submit form
 *
 * @params ------------------------------------------------------------------------------------------
 * - conversationFirstMessageId => ALL messages of a conversation are responses of the FIRST message
 * - conversationPostId         => post (announcement) related to the message
 * --------------------------------------------------------------------------------------------------
 *
 */
export const CONVERSATION_FORM_SUBMIT = 'CONVERSATION_FORM_SUBMIT';
export const conversationFormSubmit = (
  conversationFirstMessageId,
  conversationPostId
) => ({
  type: CONVERSATION_FORM_SUBMIT,
  conversationFirstMessageId,
  conversationPostId,
});
