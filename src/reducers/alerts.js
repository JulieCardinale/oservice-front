/* Imports */
import {
  OPEN_POP_UP,
  CLOSE_POP_UP,
  DISPLAY_SUCCESS_MESSAGE,
  SET_ERROR,
} from 'actions/alerts';
import { RESET_STATE } from 'actions/utils';

/* * * * * * * * * * * * * *
 * * Alerts Initial state *
 *
 * @description : All alerts reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - selectedElementId (number)       => selected element id
 * - openPopUp (bool)                 => is open or not information box
 * - isVisibleSuccessMessage (bool)   => is visible or not success message
 * - authFormErrors (obj)             => auth form errors messages
 * - contactFormErrors (obj)          => contact form errors messages
 * - conversationFormErrors (obj)     => conversation form errors messages
 * - userFormErrors (obj)             => create or update user form errors messages
 * - announcementFormErrors (obj)     => create or update announcement form errors messages
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  selectedElementId: 0,

  openPopUp: false,

  isVisibleSuccessMessage: false,

  authFormErrors: {
    authFormEmailErrorMessage: '',
    authFormPasswordErrorMessage: '',
  },
  contactFormErrors: {
    contactFormErrorMessage: '',
  },

  conversationFormErrors: {
    conversationFormErrorMessage: '',
  },

  userFormErrors: {
    userFormPictureErrorMessage: '',
    userFormFirstNameErrorMessage: '',
    userFormLastNameErrorMessage: '',
    userFormSexErrorMessage: '',
    userFormBirthDateErrorMessage: '',
    userFormEmailErrorMessage: '',
    userFormAddressErrorMessage: '',
    userFormCityErrorMessage: '',
    userFormPostcodeErrorMessage: '',
    userFormDescriptionErrorMessage: '',
    userFormPasswordErrorMessage: '',
    userFormPasswordConfirmationErrorMessage: '',
  },

  announcementFormErrors: {
    announcementFormPictureErrorMessage: '',
    announcementFormTitleErrorMessage: '',
    announcementFormCategoryErrorMessage: '',
    announcementFormDescriptionErrorMessage: '',
    announcementFormPostcodeErrorMessage: '',
    announcementFormCityErrorMessage: '',
  },
};

/* * * * * * * * * *
 * * alerts reducer *
 *
 * @description : All load reducer actions
 *
 * @cases --------------------------------------------------------
 * - SET ERROR                => set error message of a specific field in a specific form
 * - RESET STATE              => reset a specific state property
 * - OPEN POP UP              => Open the pop up window
 * - CLOSE POP UP             => close the pop up window
 * - DISPLAY SUCCESS MESSAGE  => display a success message
 * ----------------------------------------------------------------
 *
 */
const alerts = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * *
     * * SET ERROR *
     *
     * @description : set error message of a specific field in a specific form
     *
     */
    case SET_ERROR:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.formKey]: action.errorMessage,
        },
      };
    /* * * * * * * * *
     * * RESET STATE *
     *
     * @description : reset a specific state property
     *
     */
    case RESET_STATE:
      return {
        ...state,
        [action.property]: initialState[action.property],
      };
    /* * * * * * * * *
     * * OPEN POP UP *
     *
     * @description : Open the pop up window
     *
     */
    case OPEN_POP_UP:
      return {
        ...state,
        openPopUp: true,
        selectedElementId: action.selectedElementId,
      };
    /* * * * * * * * * *
     * * CLOSE POP UP *
     *
     * @description : close the pop up window
     *
     */
    case CLOSE_POP_UP:
      return {
        ...state,
        openPopUp: false,
      };
    /* * * * * * * * * * * * * * *
     * * DISPLAY SUCCESS MESSAGE *
     *
     * @description : display a success message
     *
     */
    case DISPLAY_SUCCESS_MESSAGE:
      return {
        ...state,
        isVisibleSuccessMessage: true,
      };
    default:
      return state;
  }
};

/* Export */
export default alerts;
