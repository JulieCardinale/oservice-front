/* Import(s) */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import PictureLoader from 'containers/PictureLoader';
import Input from 'containers/Input';
import Select from 'containers/Select';
import TextArea from 'containers/TextArea';
import Loader from 'components/reusables/images/Loader';
import SuccessMessage from 'containers/SuccessMessage';
import Button from 'components/reusables/Button';
import mainMessages from 'datas/mainMessages';
import successMessages from 'datas/successMessages';
import { mainFlex } from 'selectors';

/* * * * * * * * * * * * *
 * * AnnouncementDetails *
 *
 * @description : Detail of one announcement
 *
 * @props ----------------------------------------------------------------------------------------------------------------------------------------------
 * - resetCitiesList (func)                         => reset cities list
 * - loadStart (func)                               => if form mode is 'create' load categories start else, only load start
 * - getCategoriesList (func)                       => get category list
 * - formMode (str)                                 => is create or update form ?
 * - resetState (func)                              => reset a state property
 * - announcementFormErrors (func)                  => announcement form errors list
 * - announcementFormCheckErrors (func)             => check errors before submit
 * - isLoadingCategoriesList (bool)                 => active load props for categories list
 * - isLoading (bool)                               => active load props
 * - categoriesList                                 => list of categories
 * - citiesList                                     => list of cities
 * - isLoading (bool)                               => active load props on submit
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------------------------------------------------------
 * - event.preventDefault() => submit form
 * https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const AnnouncementForm = ({
  loadStart,
  getCategoriesList,
  formMode,
  resetState,
  announcementFormCheckErrors,
  isLoadingCategoriesList,
  isLoading,
  announcementFormErrors,
  categoriesList,
  citiesList,
  isLoadingOnSubmit,
}) => {
  /* * * * * * * * * * * * * * * * * * * *
   * * useEffects, handler, active props *
   */
  useEffect(() => {
    if (formMode === 'create') {
      loadStart('isLoadingCategoriesList');
      resetState('announcementForm');
    } else {
      loadStart('isLoading');
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [isLoading]);

  useEffect(() => resetState('citiesList'), []);
  useEffect(() => getCategoriesList(), []);
  useEffect(() => resetState('announcementFormErrors'), []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    resetState('announcementFormErrors');
    announcementFormCheckErrors(formMode);
  };

  const active = isLoadingCategoriesList || isLoading;

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* ANNOUNCEMENT FORM - LOADER */}
      <Loader active={active} />

      {!active && (
        <>
          {/* ANNOUNCEMENT FORM - MAIN MESSAGE */}
          <PageMainMessage
            line01={
              formMode === 'create'
                ? mainMessages.announcementForm.line01
                : mainMessages.announcementForm.line01alt
            }
            line02={mainMessages.announcementForm.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />

          {/* ANNOUNCEMENT FORM - FORM */}
          <form
            onSubmit={handleOnSubmit}
            className="oservice-announcement-form"
            id="announcement-form"
          >
            {/* ANNOUNCEMENT FORM - PICTURE */}
            <PictureLoader
              formName="announcementForm"
              previewKey="announcementFormPicturePreview"
              dataKey="announcementFormPictureFormData"
              information="Taille maximum 2Mo."
              errorMessage={
                announcementFormErrors.announcementFormPictureErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - TITLE */}
            <Input
              className="oservice-input-basic"
              label="Titre *"
              type="text"
              formName="announcementForm"
              formKey="announcementFormTitle"
              maxLength={35}
              placeholder="Entrez le titre de votre annonce"
              information="Max. 35 caractères."
              errorMessage={
                announcementFormErrors.announcementFormTitleErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - SELECT */}
            <Select
              label="Catégorie *"
              formName="announcementForm"
              idKey="announcementFormCategoryId"
              nameKey="announcementFormCategoryName"
              togglerKey="areVisibleOptionsInSelectCategoriesItem"
              optionsList={categoriesList}
              errorMessage={
                announcementFormErrors.announcementFormCategoryErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - POSTCODE */}
            <Input
              className="oservice-input-basic"
              label="Code Postal *"
              type="number"
              formName="announcementForm"
              linkedFieldName="announcementFormCityName"
              formKey="announcementFormPostcode"
              placeholder="Entrez votre code postal"
              information="Entrez un code postal puis selectionnez une ville."
              errorMessage={
                announcementFormErrors.announcementFormPostcodeErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - CITY */}
            <Select
              label="Ville *"
              formName="announcementForm"
              idKey="announcementFormCityId"
              nameKey="announcementFormCityName"
              departmentKey="announcementFormCityDepartmentCode"
              togglerKey="areVisibleOptionsInSelectCitiesItem"
              optionsList={citiesList}
              errorMessage={
                announcementFormErrors.announcementFormCityErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - CITY */}
            <TextArea
              className="oservice-input-basic"
              label="Description *"
              formName="announcementForm"
              formKey="announcementFormDescription"
              maxLength={300}
              rows={10}
              placeholder="Décrivez votre demande"
              information="Max. 300 caractères."
              errorMessage={
                announcementFormErrors.announcementFormDescriptionErrorMessage
              }
            />

            {/* ANNOUNCEMENT FORM - LOADER */}
            <Loader active={isLoadingOnSubmit} displayBlock />

            {/* ANNOUNCEMENT FORM - SUCCESS MESSAGE */}
            <SuccessMessage
              title={
                formMode === 'create'
                  ? successMessages.announcementForm.title
                  : successMessages.announcementForm.titleAlt
              }
              content={
                formMode === 'create'
                  ? successMessages.announcementForm.content
                  : successMessages.announcementForm.contentAlt
              }
            />

            {/* ANNOUNCEMENT FORM - BUTTON */}
            <Button
              aria="Bouton pour publier l'annonce"
              className="oservice-button-basic"
              submit
              text={
                formMode === 'create'
                  ? "Publier l'annonce"
                  : "Modifier l'annonce"
              }
            />
          </form>
        </>
      )}
    </>
  );
};

/* PropTypes validation */
AnnouncementForm.propTypes = {
  loadStart: PropTypes.func,
  getCategoriesList: PropTypes.func,
  formMode: PropTypes.string,
  resetState: PropTypes.func,
  announcementFormCheckErrors: PropTypes.func,
  isLoadingCategoriesList: PropTypes.bool,
  isLoading: PropTypes.bool,
  categoriesList: PropTypes.arrayOf(PropTypes.object),
  announcementFormErrors: PropTypes.objectOf(PropTypes.string),
  citiesList: PropTypes.arrayOf(PropTypes.object),
  isLoadingOnSubmit: PropTypes.bool,
};

/* Export component */
export default AnnouncementForm;
