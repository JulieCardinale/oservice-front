/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import mainMessages from 'datas/mainMessages';
import PictureLoader from 'containers/PictureLoader';
import Input from 'containers/Input';
import RadioGroup from 'containers/RadioGroup';
import Select from 'containers/Select';
import TextArea from 'containers/TextArea';
import Loader from 'components/reusables/images/Loader';
import SuccessMessage from 'containers/SuccessMessage';
import Button from 'components/reusables/Button';
import PropTypes from 'prop-types';
import successMessages from 'datas/successMessages';

/* * * * * * * *
 * * User form *
 *
 * @description : Create or update user
 *
 * @props ----------------------------------------------------------------------------------------------------------
 * - loadStart (func)                    => if form mode is 'create' load categories start else, only load start
 * - resetState (func)                   => reset a state property
 * - userFormCheckErrors (func)          => check errors in user form
 * - userFormErrorsMessages              => all errors messages of user form
 * - formMode (str)                      => mode create or update ?
 * - isLoading (bool)                    => is loading mode or not ?
 * - citiesList                          => list of cities
 * - isVisiblePassword (bool)            => is visible password or not ?
 * - userFormPasswordConfirmation (str)  => password confirmation value
 * - userFormPassword (str)              => password value
 * - isLoadingOnSubmit (bool)            => on submit loading mode
 * -----------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------------
 * - event.preventDefault() => submit form
 * https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
 * -----------------------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------
 *
 */
const UserForm = ({
  loadStart,
  resetState,
  userFormCheckErrors,
  userFormErrorsMessages,
  formMode,
  isLoading,
  citiesList,
  isVisiblePassword,
  userFormPasswordConfirmation,
  userFormPassword,
  isLoadingOnSubmit,
}) => {
  /* * * * * * * * * * * * *
   * * useEffects, handler *
   */
  useEffect(() => loadStart(), []);
  useEffect(() => resetState('citiesList'), []);
  useEffect(() => resetState('userFormErrors'), []);
  useEffect(() => resetState('userFormErrors'), []);
  useEffect(() => {
    if (formMode === 'create') {
      resetState('form', 'userForm');
    }
  }, []);
  useEffect(() => {
    if (isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [isLoading]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    resetState('userFormErrors');
    userFormCheckErrors(formMode);
  };

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* USER FORM - LOADER */}
      <Loader active={isLoading} />
      {!isLoading && (
        <>
          {/* USER FORM - MAIN MESSAGE */}
          <PageMainMessage
            line01={
              formMode === 'create'
                ? mainMessages.userForm.line01
                : mainMessages.userForm.line01alt
            }
            line02={mainMessages.userForm.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />
          <form
            onSubmit={handleOnSubmit}
            encType="multipart/form-data"
            className="oservice-user-form"
            id="oservice-user-form"
          >
            {/* USER FORM - PICTURE */}
            <PictureLoader
              formName="userForm"
              previewKey="userFormPicturePreview"
              dataKey="userFormPictureFormData"
              information="Taille maximum 2Mo."
              errorMessage={userFormErrorsMessages.userFormPictureErrorMessage}
            />
            {/* USER FORM - LAST NAME */}
            <Input
              className="oservice-input-basic"
              label="Nom *"
              type="text"
              formName="userForm"
              formKey="userFormLastname"
              placeholder="Entrez votre nom"
              disabled={formMode === 'update'}
              errorMessage={userFormErrorsMessages.userFormLastNameErrorMessage}
            />
            {/* USER FORM - FIRST NAME */}
            <Input
              className="oservice-input-basic"
              label="Prénom *"
              type="text"
              formName="userForm"
              formKey="userFormFirstname"
              placeholder="Entrez votre prénom"
              disabled={formMode === 'update'}
              errorMessage={
                userFormErrorsMessages.userFormFirstNameErrorMessage
              }
            />
            {/* USER FORM - FIRST NAME */}
            <RadioGroup
              title="Sexe *"
              choices={['Homme', 'Femme', 'N.C']}
              formName="userForm"
              radioGroupKey="userFormSex"
              isDisabled={formMode === 'update'}
              errorMessage={userFormErrorsMessages.userFormSexErrorMessage}
            />
            {/* USER FORM - BIRTH DATE */}
            <Input
              className="oservice-input-basic"
              label="Date de naissance *"
              type="date"
              formName="userForm"
              formKey="userFormBirthdate"
              placeholder="Entrez votre date de naissance"
              disabled={formMode === 'update'}
              errorMessage={
                userFormErrorsMessages.userFormBirthDateErrorMessage
              }
            />
            {/* USER FORM - EMAIL */}
            <Input
              className="oservice-input-basic"
              label="Email *"
              type="email"
              formName="userForm"
              formKey="userFormEmail"
              placeholder="Entrez votre email"
              errorMessage={userFormErrorsMessages.userFormEmailErrorMessage}
            />
            {/* USER FORM - ADDRESS */}
            <Input
              className="oservice-input-basic"
              label="Adresse postale *"
              type="text"
              formName="userForm"
              formKey="userFormAddress"
              placeholder="Entrez votre adresse postale"
              errorMessage={userFormErrorsMessages.userFormAddressErrorMessage}
            />
            {/* USER FORM - POST CODE */}
            <Input
              className="oservice-input-basic"
              label="Code Postal *"
              type="number"
              formName="userForm"
              linkedFieldName="userFormCityName"
              formKey="userFormPostCode"
              placeholder="Entrez votre code postal"
              information="Entrez un code postal puis selectionnez une ville."
              errorMessage={userFormErrorsMessages.userFormPostcodeErrorMessage}
            />
            {/* USER FORM - CITY */}
            <Select
              label="Ville *"
              formName="userForm"
              idKey="userFormCityId"
              nameKey="userFormCityName"
              togglerKey="areVisibleOptionsInSelectCitiesItem"
              optionsList={citiesList}
              errorMessage={userFormErrorsMessages.userFormCityErrorMessage}
            />
            <TextArea
              className="oservice-input-basic"
              label="Description *"
              formName="userForm"
              formKey="userFormDescription"
              maxLength={300}
              rows={10}
              placeholder="Entrez votre description"
              information="Max. 300 caractères."
              errorMessage={
                userFormErrorsMessages.userFormDescriptionErrorMessage
              }
            />
            {/* USER FORM - PASSWORD */}
            <Input
              className="oservice-input-password"
              label="Mot de passe *"
              type={isVisiblePassword ? 'text' : 'password'}
              formName="userForm"
              formKey="userFormPassword"
              placeholder="Entrez votre mot de passe"
              information="8 caractères minimum dont une majuscule, une minuscule, un caractère spécial et un nombre."
              errorMessage={userFormErrorsMessages.userFormPasswordErrorMessage}
            />
            {/* USER FORM - PASSWORD CONFIRM */}
            <Input
              className={
                userFormPasswordConfirmation &&
                userFormPasswordConfirmation.length !== 0 &&
                userFormPassword === userFormPasswordConfirmation
                  ? `oservice-input-password-valid`
                  : `oservice-input-basic`
              }
              label="Confirmation du mot de passe *"
              type="password"
              formName="userForm"
              formKey="userFormPasswordConfirmation"
              placeholder="Confirmez votre mot de passe"
              information={
                userFormPasswordConfirmation &&
                userFormPasswordConfirmation.length !== 0 &&
                userFormPassword === userFormPasswordConfirmation &&
                'Super ! les mots de passes sont identiques !'
              }
              errorMessage={
                userFormErrorsMessages.userFormPasswordConfirmationErrorMessage
              }
            />
            {/* USER FORM - ON SUBMIT LOADER */}
            <Loader active={isLoadingOnSubmit} displayBlock />
            {/* USER FORM - SUCCESS MESSAGE */}
            <SuccessMessage
              title={
                formMode === 'create'
                  ? successMessages.userForm.title
                  : successMessages.userForm.titleAlt
              }
              content={
                formMode === 'create'
                  ? successMessages.userForm.content
                  : successMessages.userForm.contentAlt
              }
            />
            {/* USER FORM - SUBMIT BUTTON */}
            <Button
              aria="Soumettre le formulaire de création / modification utisateur"
              className="oservice-button-basic"
              submit
              text={formMode === 'create' ? "S'incrire" : 'Modifier mon profil'}
            />
          </form>
        </>
      )}
    </>
  );
};

/* Props Validation */
UserForm.propTypes = {
  loadStart: PropTypes.func,
  resetState: PropTypes.func,
  userFormCheckErrors: PropTypes.func,
  formMode: PropTypes.string,
  isLoading: PropTypes.bool,
  userFormErrorsMessages: PropTypes.objectOf(PropTypes.string),
  citiesList: PropTypes.arrayOf(PropTypes.object),
  isVisiblePassword: PropTypes.bool,
  userFormPasswordConfirmation: PropTypes.string,
  userFormPassword: PropTypes.string,
  isLoadingOnSubmit: PropTypes.bool,
};

/* Export */
export default UserForm;
