/* Imports */
import { userFormSubmit, announcementFormSubmit } from 'actions/forms';
import { checkIfLogged } from 'actions/users';
import {
  getCurrentDateYMD,
  setRegistrationLimitAge,
  passwordSecurityCheck,
} from 'selectors';
import {
  USER_FORM_CHECK_ERRORS,
  ANNOUNCEMENT_FORM_CHECK_ERRORS,
  setError,
} from 'actions/alerts';

/* * * * * * * * * * * *
 * * Errors middleware *
 *
 * @description : Check forms errors before submit
 *
 * @cases ---------------------------------------------------------------------------------
 * - USER FORM CHECK ERRORS          => check errors in user form before submit
 * - ANNOUNCEMENT FORM CHECK ERRORS  => check errors in announcement form before submit
 * ----------------------------------------------------------------------------------------
 *
 */
const errors = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case USER_FORM_CHECK_ERRORS: {
      /*
       * checkIfLogged
       * @info : is it's update mode check if user is always/correctly logged
       */
      if (action.formMode === 'udpate') {
        store.dispatch(checkIfLogged());
      }
      /*
       * getState
       * @info : get create or update user form values from state
       */
      const {
        userFormPictureFormData,
        userFormLastname,
        userFormFirstname,
        userFormSex,
        userFormBirthdate,
        userFormEmail,
        userFormAddress,
        userFormPostCode,
        userFormCityName,
        userFormDescription,
        userFormPassword,
        userFormPasswordConfirmation,
      } = store.getState().forms.userForm;
      /*
       * Errors Array
       * @info : to add all fields'id with error(s)
       */
      const userFormErrorsArray = [];
      /*
       * Picture error
       * @info : no picture.
       */
      if (userFormPictureFormData === 'Aucune image sélectionnée') {
        userFormErrorsArray.push('#pictureLoader');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormPictureErrorMessage',
            'Veuillez ajouter une photo.'
          )
        );
      }
      /*
       * Last name error
       * @info : no last name
       */
      if (userFormLastname.length === 0) {
        userFormErrorsArray.push('#userFormLastname');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormLastNameErrorMessage',
            'Veuillez renseigner votre nom.'
          )
        );
      }
      /*
       * First name error
       * @info : no first name
       */
      if (userFormFirstname.length === 0) {
        userFormErrorsArray.push('#userFormFirstname');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormFirstNameErrorMessage',
            'Veuillez renseigner votre prénom.'
          )
        );
      }
      /*
       * Sex error
       * @info : no sex
       */
      if (userFormSex.length === 0) {
        userFormErrorsArray.push('#radioGroup');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormSexErrorMessage',
            'Veuillez renseigner votre sexe.'
          )
        );
      }
      /*
       * Birthdate error
       * @info : no birthdate
       */
      if (userFormBirthdate.length === 0) {
        userFormErrorsArray.push('#userFormBirthdate');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormBirthDateErrorMessage',
            'Veuillez renseigner votre date de naissance.'
          )
        );
      }
      /*
       * Birthdate error
       * @info : date is today
       */
      if (userFormBirthdate === getCurrentDateYMD()) {
        userFormErrorsArray.push('#userFormBirthdate');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormBirthDateErrorMessage',
            'Joyeux anniversaire ! Cependant vous êtes un peu trop jeune pour vous inscrire.'
          )
        );
      }
      /*
       * Birthdate error
       * @info : "you are not birth yet".
       */
      if (userFormBirthdate > getCurrentDateYMD()) {
        userFormErrorsArray.push('#userFormBirthdate');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormBirthDateErrorMessage',
            "Vous n'êtes pas encore né(e), attendez un peu pour vous inscrire."
          )
        );
      }
      /*
       * Birthdate error
       * @info : you are too young (-18).
       */
      if (
        userFormBirthdate !== getCurrentDateYMD() &&
        userFormBirthdate < getCurrentDateYMD() &&
        userFormBirthdate > setRegistrationLimitAge(18)
      ) {
        userFormErrorsArray.push('#userFormBirthdate');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormBirthDateErrorMessage',
            'Vous devez avoir 18 ans pour vous inscrire.'
          )
        );
      }
      /*
       * Email error
       * @info : no email.
       */
      if (userFormEmail.length === 0) {
        userFormErrorsArray.push('#userFormEmail');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormEmailErrorMessage',
            'Veuillez renseigner votre email.'
          )
        );
      }
      /*
       * Address error
       * @info : no address.
       */
      if (userFormAddress.length === 0) {
        userFormErrorsArray.push('#userFormAddress');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormAddressErrorMessage',
            'Veuillez renseigner votre adresse.'
          )
        );
      }
      /*
       * Postcode error
       * @info : no postcode
       */
      if (userFormPostCode.length === 0) {
        userFormErrorsArray.push('#userFormPostCode');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormPostcodeErrorMessage',
            'Veuillez renseigner votre code postal.'
          )
        );
      }
      /*
       * City error
       * @info : no city
       */
      if (
        userFormCityName.includes('ville trouvée') ||
        userFormCityName.includes('villes trouvées')
      ) {
        userFormErrorsArray.push('#userFormCityId');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormCityErrorMessage',
            'Veuillez renseigner votre ville.'
          )
        );
      }
      /*
       * Description error
       * @info : no description
       */
      if (userFormDescription.length === 0) {
        userFormErrorsArray.push('#userFormDescription');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormDescriptionErrorMessage',
            'Veuillez ajouter une description.'
          )
        );
      }
      /*
       * Description error
       * @info : description is too short.
       */
      if (userFormDescription.length !== 0 && userFormDescription.length < 10) {
        userFormErrorsArray.push('#userFormDescription');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormDescriptionErrorMessage',
            'Votre description est trop courte.'
          )
        );
      }
      /*
       * Password error
       * @info : invalid format.
       */
      if (!passwordSecurityCheck(userFormPassword)) {
        userFormErrorsArray.push('#userFormPassword');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormPasswordErrorMessage',
            'Votre mot de passe ne respecte pas le format requis.'
          )
        );
      }
      /*
       * Password error
       * @info : no confirmation.
       */
      if (userFormPasswordConfirmation.length === 0) {
        userFormErrorsArray.push('#userFormPasswordConfirmation');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormPasswordConfirmationErrorMessage',
            'Veuillez confirmer votre mot de passe.'
          )
        );
      }
      /*
       * Password confirmation error
       * @info : confirmation fail.
       */
      if (
        userFormPasswordConfirmation.length !== 0 &&
        userFormPasswordConfirmation !== userFormPassword
      ) {
        userFormErrorsArray.push('#userFormPasswordConfirmation');
        store.dispatch(
          setError(
            'userFormErrors',
            'userFormPasswordConfirmationErrorMessage',
            'Les mots de passe ne sont pas identiques.'
          )
        );
      }

      store.dispatch(userFormSubmit(action.formMode, userFormErrorsArray));

      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case ANNOUNCEMENT_FORM_CHECK_ERRORS: {
      /*
       * checkIfLogged
       * @info : check if user is always/correctly logged
       */
      store.dispatch(checkIfLogged());
      /*
       * getState
       * @info : get create or update announcement form values from state
       */
      const {
        announcementFormPictureFormData,
        announcementFormTitle,
        announcementFormCategoryId,
        announcementFormDescription,
        announcementFormPostcode,
        announcementFormCityName,
      } = store.getState().forms.announcementForm;
      /*
       * Errors Array
       * @info : to add all fields'id with error(s)
       */
      const announcementFormErrorsArray = [];
      /*
       * Picture error
       * @info : no picture.
       */
      if (announcementFormPictureFormData === 'Aucune image sélectionnée') {
        announcementFormErrorsArray.push('#pictureLoader');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormPictureErrorMessage',
            'Veuillez ajouter une image à votre annonce.'
          )
        );
      }
      /*
       * Title error
       * @info : no title.
       */
      if (announcementFormTitle.length === 0) {
        announcementFormErrorsArray.push('#announcementFormTitle');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormTitleErrorMessage',
            'Veuillez ajouter un titre à votre annonce.'
          )
        );
      }
      /*
       * Title error
       * @info : title is too short.
       */
      if (
        announcementFormTitle.length !== 0 &&
        announcementFormTitle.length <= 3
      ) {
        announcementFormErrorsArray.push('#announcementFormTitle');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormTitleErrorMessage',
            'Votre titre est trop court.'
          )
        );
      }
      /*
       * Category error
       * @info : no category selected.
       */
      if (announcementFormCategoryId.length === 0) {
        announcementFormErrorsArray.push('#announcementFormCategoryId');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormCategoryErrorMessage',
            'Veuillez ajouter une catégorie à votre annonce.'
          )
        );
      }
      /*
       * Postcode error
       * @info : no postcode.
       */
      if (announcementFormPostcode.length === 0) {
        announcementFormErrorsArray.push('#announcementFormPostcode');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormPostCodeErrorMessage',
            'Veuillez choisir un code postal pour votre annonce.'
          )
        );
      }
      /*
       * City error
       * @info : no city.
       */
      if (announcementFormCityName === 'Aucune ville trouvée') {
        announcementFormErrorsArray.push('#announcementFormCityId');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormCityErrorMessage',
            'Veuillez choisir une ville pour votre annonce.'
          )
        );
      }
      /*
       * Description errors
       * @info : no description.
       */
      if (announcementFormDescription.length === 0) {
        announcementFormErrorsArray.push('#announcementFormDescription');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormDescriptionErrorMessage',
            'Veuillez entrer une description pour votre annonce.'
          )
        );
      }
      /*
       * Description errors
       * @info : description is too short.
       */
      if (
        announcementFormDescription.length !== 0 &&
        announcementFormDescription.length <= 10
      ) {
        announcementFormErrorsArray.push('#announcementFormDescription');
        store.dispatch(
          setError(
            'announcementFormErrors',
            'announcementFormDescriptionErrorMessage',
            'Votre description est trop courte.'
          )
        );
      }
      store.dispatch(
        announcementFormSubmit(action.formMode, announcementFormErrorsArray)
      );
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

/* Export */
export default errors;
