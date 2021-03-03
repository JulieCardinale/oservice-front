/* Import(s) */
import { capitalizeFirstLetters } from 'selectors';
import Image from 'components/reusables/images/Image';
import Button from 'components/reusables/Button';
import Information from 'components/reusables/texts/Information';
import PropTypes from 'prop-types';

/* * * * * * * * * * * * * * * *
 * * AnnouncementDetailsAuthor *
 *
 * @description : Announcement details author part
 *
 * @props -----------------------------------------------------------------
 * - announcementDetails (obj)  => Announcement details
 * ------------------------------------------------------------------------
 *
 */
const AnnouncementDetailsAuthor = ({ announcementDetails }) => {
  /* * * * * * * * * *
   * * sessionStorage *
   */
  const { connectedUserId } = sessionStorage;

  /* * * * *
   * * JSX *
   */
  return (
    /* If it's connected user id announcement this block is not displayed  */
    announcementDetails.author !== parseInt(connectedUserId, 10) && (
      <section className="oservice-announcement-details-author">
        {/* ANNOUNCEMENT DETAILS AUTHOR - IMAGE */}
        <Image
          className="oservice-rounded-image-announcement-author"
          src={
            announcementDetails &&
            announcementDetails.picture_author &&
            announcementDetails.picture_author
          }
          alt="Image de l'auteur"
        />

        {/* ANNOUNCEMENT DETAILS AUTHOR - NAME */}
        <Information
          label="Auteur"
          text={
            announcementDetails &&
            announcementDetails.author_name &&
            capitalizeFirstLetters(announcementDetails.author_name)
          }
        />

        {/* ANNOUNCEMENT DETAILS AUTHOR - LINK TO PROFILE */}
        <Button
          className="oservice-button-small"
          text="Voir le profil"
          linkToPage={`/profil-utilisateur/${
            announcementDetails &&
            announcementDetails.author &&
            announcementDetails.author
          }`}
          aria="Lien vers le profil de l'auteur"
        />
      </section>
    )
  );
};

/* PropTypes */
AnnouncementDetailsAuthor.propTypes = {
  announcementDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

/* Export component */
export default AnnouncementDetailsAuthor;
