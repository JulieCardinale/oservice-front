/* Imports */
import { RESET_STATE } from 'actions/utils';
import { STORE_USER_DETAILS_TO_UPDATE } from 'actions/users';
import { STORE_ANNOUNCEMENT_DETAILS_TO_UPDATE } from 'actions/announcements';
import {
  FORM_FIELD_ON_CHANGE,
  ANNOUNCEMENT_FORM_STORE_CITY_ID_FROM_API,
} from 'actions/forms';

/* * * * * * * * * * * *
 * * Forms Initial state *
 *
 * @description : All forms reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - userForm (obj)                             => create or update user form datas
 * - authForm (obj)                             => auth form datas
 * - announcementForm (obj)                     => create or update announcement form datas
 * - firstContactForm (obj)                     => first contact form datas
 * - conversationForm (obj)                     => conversation form datas
 * - categoryFilterForm (obj)                   => category filter form datas
 * - cityFilterForm (obj)                       => city filter form datas
 * ------------------------------------------------------------------------------------------
 *
 */
export const initialState = {
  userForm: {
    userFormPicturePreview: '',
    userFormPictureFormData: 'Aucune image sélectionnée',
    userFormPictureId: '',
    userFormLastname: '',
    userFormFirstname: '',
    userFormSex: '',
    userFormBirthdate: '',
    userFormEmail: '',
    userFormAddress: '',
    userFormPostCode: '',
    userFormCityName: 'Aucune ville trouvée',
    userFormDescription: '',
    userFormPassword: '',
    userFormPasswordConfirmation: '',
  },

  authForm: {
    authFormEmail: '',
    authFormPassword: '',
  },

  announcementForm: {
    announcementFormPicturePreview: '',
    announcementFormPictureFormData: 'Aucune image sélectionnée',
    announcementFormPictureId: '',
    announcementFormTitle: '',
    announcementFormCategoryId: '',
    announcementFormCategoryName: 'Sélectionnez une catégorie',
    announcementFormPostcode: '',
    announcementFormCityName: 'Aucune ville trouvée',
    announcementFormCityDepartmentCode: '',
    announcementFormCityId: '',
    announcementFormDescription: '',
  },

  firstContactForm: {
    firstContactFormMessageValue: '',
  },

  conversationForm: {
    conversationFormMessageValue: '',
  },

  categoryFilterForm: {
    categoryFilterFormCategoryName: 'Sélectionnez une catégorie',
    categoryFilterFormCategoryId: '',
  },

  cityFilterForm: {
    cityFilterFormCityName: 'Sélectionnez une une ville',
    cityFilterFormCityId: '',
  },
};

/* * * * * * * * * *
 * * Forms reducer *
 *
 * @description : All forms reducer actions
 *
 * @cases -----------------------------------------------------------------------------------------------
 * - FORM FIELD ON CHANGE                                 => handle every form fields
 * - RESET STATE                                          => reset a specific state property
 * - UDPATE USER FORM STORE USER DETAILS                  => Store user details into state, to display it into the update form.
 * - ANNOUNCEMENT FORM STORE CITY ID FROM API             => Store select city id into state to associate it to posted announcement
 * - UDPATE ANNOUNCEMENT FORM STORE ANNOUNCEMENT DETAILS  => Store announcement details into state, to display it into the update form.
 * -------------------------------------------------------------------------------------------------------
 *
 */
const forms = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * *
     * * FORM FIELD ON CHANGE *
     *
     * @description : handle every form fields
     *
     */
    case FORM_FIELD_ON_CHANGE:
      return {
        ...state,
        [action.fieldFormName]: {
          ...state[action.fieldFormName],
          [action.fieldKey]: action.fieldValue,
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
    /* * * * * * * * * * * * * * * * * * * * *
     * * UDPATE USER FORM STORE USER DETAILS *
     *
     * @description : Store user details into state, to display it into the update form.
     *
     */
    case STORE_USER_DETAILS_TO_UPDATE:
      return {
        ...state,
        userForm: {
          ...state.userForm,
          userFormPicturePreview: action.userDetailsForUpdate.picture[0],
          userFormPictureFormData:
            "Modification de l'utilisateur sans changer l'image",
          userFormPictureId: action.userDetailsForUpdate.userPictureId,
          userFormLastname: action.userDetailsForUpdate.last_name[0],
          userFormFirstname: action.userDetailsForUpdate.first_name[0],
          userFormSex: action.userDetailsForUpdate.sex[0],
          userFormBirthdate: action.userDetailsForUpdate.birth_date[0],
          userFormEmail: action.userDetailsForUpdate.email,
          userFormAddress: action.userDetailsForUpdate.address[0],
          userFormPostCode: action.userDetailsForUpdate.postal_code[0],
          userFormCityName: action.userDetailsForUpdate.city[0],
          userFormDescription: action.userDetailsForUpdate.description,
        },
      };
    /* * * * * * * * * * * * * * * * * * * * * * *
     * * ANNOUNCEMENT FORM STORE CITY ID FROM API *
     *
     * @description : Store select city id into state to associate it to posted announcement
     *
     */
    case ANNOUNCEMENT_FORM_STORE_CITY_ID_FROM_API:
      return {
        ...state,
        announcementForm: {
          ...state.announcementForm,
          announcementFormCityId:
            action.announcementFormOnChangeCityIdFromApiValue,
        },
      };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * UDPATE ANNOUNCEMENT FORM STORE ANNOUNCEMENT DETAILS *
     *
     * @description : Store announcement details into state, to display it into the update form.
     *
     */
    case STORE_ANNOUNCEMENT_DETAILS_TO_UPDATE: {
      return {
        ...state,
        announcementForm: {
          ...state.announcementForm,
          announcementFormPicturePreview:
            action.announcementDetailsForUpdate.featured_media_url,
          announcementFormPictureFormData:
            "Modification de l'annonce sans changer l'image",
          announcementFormPictureId:
            action.announcementDetailsForUpdate.featured_media,
          announcementFormTitle:
            action.announcementDetailsForUpdate.title.rendered,
          announcementFormCategoryName:
            action.announcementDetailsForUpdate.category_name[0].name,
          announcementFormCategoryId:
            action.announcementDetailsForUpdate['announcement-categories'][0],
          announcementFormPostcode:
            action.announcementDetailsForUpdate.postal_code[0],
          announcementFormCityName:
            action.announcementDetailsForUpdate.city_name[0],
          announcementFormCityId:
            action.announcementDetailsForUpdate['announcement-cities'][0],
          announcementFormDescription:
            action.announcementDetailsForUpdate.content.rendered,
        },
      };
    }
    default:
      return state;
  }
};

/* Export */
export default forms;
