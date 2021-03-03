/* Import(s) */
import PropTypes from 'prop-types';
import Button from 'components/reusables/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

/* * * * * * * * * * * * *
 * * Announcement Options *
 *
 * @description : announcements options
 *
 * @props ----------------------------------------------------------------------
 * - announcementId  => announcement id
 * - openPopUp       => open pop up window to confirm announcement delete
 * -----------------------------------------------------------------------------
 *
 */
const AnnouncementOptions = ({ announcementId, openPopUp }) => (
  <div className="oservice-announcement-options">
    <div className="oservice-announcement-options__animated-part">
      {/* ANNOUNCEMENT BUTTON - SEE DETAILS */}
      <Button
        linkToPage={`/annonce-details/${announcementId}`}
        className="oservice-button-options-announcements"
        icon={<FontAwesomeIcon icon={faEye} />}
        text="Voir"
      />

      {/* ANNOUNCEMENT BUTTON - UPDATE */}
      <Button
        linkToPage={`/modifier-une-annonce/${announcementId}`}
        className="oservice-button-options-announcements"
        icon={<FontAwesomeIcon icon={faPenSquare} />}
        text="Modifier"
      />

      {/* ANNOUNCEMENT BUTTON - DELETE */}
      <Button
        className="oservice-button-options-announcements"
        icon={<FontAwesomeIcon icon={faTrash} />}
        onClick={() => openPopUp(announcementId)}
        text="Supprimer"
      />
    </div>
  </div>
);

/* PropTypes */
AnnouncementOptions.propTypes = {
  announcementId: PropTypes.number,
  openPopUp: PropTypes.func,
};

/* Export component */
export default AnnouncementOptions;
