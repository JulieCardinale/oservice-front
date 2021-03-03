/* Import(s) */
import PropTypes from 'prop-types';
import Button from 'components/reusables/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenSquare } from '@fortawesome/free-solid-svg-icons';

/* * * * * * * * * * * *
 * * My Profile Options *
 *
 * @description : my profile options
 *
 * @props ----------------------------------------------------------------------
 * - connectedUserId  => user id
 * - openPopUp        => open pop up window to confirm user delete
 * -----------------------------------------------------------------------------
 *
 */
const MyProfileOptions = ({ connectedUserId /* openPopUp */ }) => (
  <div className="my-profile-options">
    {/* MY PROFILE BUTTON - SEE DETAILS */}
    <Button
      linkToPage={`/profil-utilisateur/${connectedUserId}`}
      className="oservice-button-options-profile"
      icon={<FontAwesomeIcon icon={faEye} />}
      text="Voir"
    />
    {/* MY PROFILE BUTTON - UPDATE */}
    <Button
      linkToPage={`/modifier-mon-profil/${connectedUserId}`}
      className="oservice-button-options-profile"
      icon={<FontAwesomeIcon icon={faPenSquare} />}
      text="Modifier"
    />

    {/* MY PROFILE BUTTON - DELETE 
    <Button
      className="oservice-button-options-profile"
      icon={<FontAwesomeIcon icon={fatrash} />}
      onClick={() => openPopUp(connectedUserId)}
      text="Supprimer"
    />
    */}
  </div>
);

/* PropTypes */
MyProfileOptions.propTypes = {
  connectedUserId: PropTypes.number,
  // openPopUp: PropTypes.func,
};

/* Export component */
export default MyProfileOptions;
