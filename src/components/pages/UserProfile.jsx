/* Import(s) */
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { capitalizeFirstLetters, mainFlex } from 'selectors';
import mainMessages from 'datas/mainMessages';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Image from 'components/reusables/images/Image';
import TitleSub from 'components/reusables/texts/TitleSub';
import Quotes from 'components/reusables/texts/Quotes';
import Button from 'components/reusables/Button';
import PropTypes from 'prop-types';

/* * * * * * * * *
 * * User Profile *
 *
 * @description : my profile page
 *
 * @props ----------------------------------------------------------------------------------------------
 * - loadStart (func)                         => start loading.
 * - storeUrlSlug (func)                      => store slug url. We use it to get user details.
 * - getUserDetailsUsingUrlSlug (func)        => Get user details using url slug.
 * - isLoading (bool)                         => is loading mode or not ?
 * - userDetails                              => User details list.
 * -----------------------------------------------------------------------------------------------------
 *
 * @selectors ------------------------------------------------------------------------------------------
 * - convertStringToArray    => convert a string to an array to capitalize first letters
 * - capitalizeFirstLetters  => Capitalize first letters
 * -----------------------------------------------------------------------------------------------------
 *
 * @use ------------------------------------------------------------------------------------------------
 * - useParams()             => to get url slug
 * https://reactrouter.com/web/api/Hooks/useparams
 * - useHistory()            => we use browser history to create a return button
 * https://reactrouter.com/web/api/Hooks/usehistory
 * -----------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------
 *
 */
const UserProfile = ({
  loadStart,
  storeUrlSlug,
  getUserDetailsUsingUrlSlug,
  isLoading,
  userDetails,
}) => {
  /* * * * * * * * * * * * * * * * * * * *
   * * useParams, useHistory, useEffects *
   */
  const { slug } = useParams();
  const history = useHistory();
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => storeUrlSlug(slug), []);
  useEffect(() => getUserDetailsUsingUrlSlug(), []);
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
    <div className="oservice-user-profile">
      {/* USER PROFILE - LOADER */}
      <Loader active={isLoading} />
      {!isLoading && userDetails.id && (
        <>
          {/* USER PROFILE - MAIN MESSAGE */}
          <PageMainMessage
            line01={`${mainMessages.userProfile.line01} ${
              userDetails.name && capitalizeFirstLetters(userDetails.name)
            }.`}
            line02={mainMessages.userProfile.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />
          {/* USER PROFILE - PICTURE */}
          <Image
            src={userDetails.picture && userDetails.picture}
            className="oservice-rounded-image-user-profile"
            alt="Image de l'utilisateur"
          />
          {/* USER PROFILE - NAME */}
          <TitleSub
            className="oservice-title-sub-basic"
            content={
              userDetails.name && capitalizeFirstLetters(userDetails.name)
            }
          />
          {/* USER PROFILE - DESCRIPTION */}
          <Quotes
            text={
              userDetails && userDetails.description && userDetails.description
            }
          />
          {/* USER PROFILE - BACK BUTTON */}
          <Button
            className="oservice-button-basic"
            text="Retour"
            onClick={() => history.goBack()}
            aria="Bouton retour"
          />
        </>
      )}
    </div>
  );
};

/* PropTypes Validation */
UserProfile.propTypes = {
  loadStart: PropTypes.func,
  storeUrlSlug: PropTypes.func,
  getUserDetailsUsingUrlSlug: PropTypes.func,
  isLoading: PropTypes.bool,
  userDetails: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object,
    ])
  ),
};

/* Export component */
export default UserProfile;
