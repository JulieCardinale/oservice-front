/* Import(s) */
import { useEffect } from 'react';
import {
  formatDateNumericDMY,
  capitalizeFirstLetters,
  mainFlex,
} from 'selectors';
import mainMessages from 'datas/mainMessages';
import PropTypes from 'prop-types';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Image from 'components/reusables/images/Image';
import TitleSub from 'components/reusables/texts/TitleSub';
import Information from 'components/reusables/texts/Information';
import Quotes from 'components/reusables/texts/Quotes';
import MyProfileOptions from 'containers/MyProfileOptions';
import PopUp from 'containers/Popup';

/* * * * * * * *
 * * My Profile *
 *
 * @description : my profile page
 *
 * @props --------------------------------------------------------------------------------------
 * - loadStart (func)        => start loading
 * - getMyDetails (func)     => get list of my informations
 * - isLoading (bool)        => is loading mode or not ?
 * - myDetailsList           => list of my informations
 * - openPopUp (func)        => open pop up window
 * - closePopUp (func)       => close pop up, reset it.
 * ---------------------------------------------------------------------------------------------
 *
 * @selectors ----------------------------------------------------------------------------------
 * - formatDateNumericDMY    => change date format to DD/MM/YY
 * - convertStringToArray    => convert a string to an array to capitalize first letters
 * - capitalizeFirstLetters  => Capitalize first letters
 * - mainFlex                => change main flex behavior
 * ---------------------------------------------------------------------------------------------
 *
 */
const MyProfile = ({
  loadStart,
  getMyDetails,
  isLoading,
  myDetailsList,
  deleteUser,
  closePopUp,
}) => {
  /* * * * * * * *
   * * useEffects *
   */
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => getMyDetails(), []);
  useEffect(() => {
    if (isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [isLoading]);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* MY PROFILE - LOADER */}
      <Loader active={isLoading} />
      {!isLoading && myDetailsList.id && (
        <>
          {/* MY PROFILE - MAIN MESSAGE */}
          <PageMainMessage
            line01={mainMessages.myProfile.line01}
            line02={mainMessages.myProfile.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />
          <div className="oservice-my-profile">
            {/* MY PROFILE - PICTURE */}
            <Image
              src={myDetailsList.picture && myDetailsList.picture}
              className="oservice-square-image"
              alt="Photo de mon profil"
            />
            <div className="oservice-my-profile__infos">
              {/* MY PROFILE - NAME */}
              <TitleSub
                className="oservice-title-sub-basic"
                content={
                  myDetailsList.name &&
                  capitalizeFirstLetters(myDetailsList.name)
                }
              />
              {/* MY PROFILE - SEXE */}
              <Information
                label="Sexe"
                text={myDetailsList.sex && myDetailsList.sex}
              />
              {/* MY PROFILE - BIRTHDATE */}
              <Information
                label="Né(e) le"
                text={
                  myDetailsList.birth_date &&
                  myDetailsList.birth_date[0] &&
                  formatDateNumericDMY(
                    myDetailsList.birth_date[0].slice(0, 4),
                    myDetailsList.birth_date[0].slice(5, 7),
                    myDetailsList.birth_date[0].slice(8, 11)
                  )
                }
              />
              {/* MY PROFILE - EMAIL */}
              <Information
                label="Email"
                text={myDetailsList.email && myDetailsList.email}
              />
              {/* MY PROFILE - ADDRESS */}
              <Information
                label="Adresse"
                text={`${myDetailsList.address && myDetailsList.address}`}
              />
              {/* MY PROFILE - POSTAL CODE */}
              <Information
                label="Code postal"
                text={`${myDetailsList.postal_code && myDetailsList.postal_code}
                  `}
              />
              {/* MY PROFILE - CITY */}
              <Information
                label="Ville"
                text={`${myDetailsList.city && myDetailsList.city}`}
              />
              {/* MY PROFILE - DESCRIPTION */}
              <Quotes
                label="Description"
                text={
                  myDetailsList &&
                  myDetailsList.description &&
                  myDetailsList.description
                }
              />
            </div>
          </div>
          {/* MY PROFILE - OPTIONS */}
          <MyProfileOptions
            connectedUserId={myDetailsList.id && myDetailsList.id}
          />
        </>
      )}
      {/* MY PROFILE - POP UP DELETE PROFILE */}
      <PopUp
        messageLine01="Êtes-vous sûr(e) de vouloir supprimer votre profil ?"
        confirmText="Oui"
        cancelText="Annuler"
        onClickConfirm={() => deleteUser()}
        onClickCancel={() => closePopUp()}
      />
    </>
  );
};

/* PropTypes validation */
MyProfile.propTypes = {
  loadStart: PropTypes.func,
  getMyDetails: PropTypes.func,
  isLoading: PropTypes.bool,
  myDetailsList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  deleteUser: PropTypes.func,
  closePopUp: PropTypes.func,
};

/* Export component */
export default MyProfile;
