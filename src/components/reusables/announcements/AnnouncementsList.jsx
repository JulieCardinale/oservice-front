/* eslint-disable react/no-array-index-key */
/* Import(s) */
import { formatDateNumericDMY } from 'selectors';
import PropTypes from 'prop-types';
import Announcement from 'components/reusables/announcements/Announcement';

/* * * * * * * * * * * *
 * * Announcements List *
 *
 * @description : announcements list
 *
 * @props -------------------------------------------------------------------------------------------------------------------------------------------
 * - className (str)             => custom className
 * - announcementsList           => a list of announcements, can be my announcements, or last announcements
 * - onClick (func)              => Action on click on announcements list
 * - linkToDetailPage (bool)     => is link to details page active ?
 * - announcementOptions (bool)  => are visible announcements options. AnnouncementOptions are only displayed on my announcements page.
 * Takes announcementId as props to permit delete or update it with popup.
 * ---------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @selector -------------------------------------------------------------------------------------------------------------------------------------------
 * - formatDateNumericDMY => change date format to DD/MM/YY
 * ---------------------------------------------------------------------------------------------------------------------------------------------------
 */
const AnnouncementsList = ({
  className,
  announcementsList,
  onClick,
  linkToDetailPage,
  announcementOptions,
}) => (
  <div
    onClick={onClick}
    onKeyPress={onClick}
    role="link"
    tabIndex="0"
    className={className}
  >
    {announcementsList &&
      announcementsList.map((announcement, index) => (
        /* MY ANNOUNCEMENTS LIST - ANNOUNCEMENT */
        <div key={index}>
          <Announcement
            linkToDetailPage={linkToDetailPage}
            announcementOptions={announcementOptions}
            id={announcement.id && announcement.id}
            picture={
              announcement.featured_media_url && announcement.featured_media_url
            }
            title={announcement.title && announcement.title.rendered}
            category={
              announcement.category_name &&
              announcement.category_name[0] &&
              announcement.category_name[0].name
            }
            excerpt={announcement.excerpt && announcement.excerpt.rendered}
            city={announcement.city_name && announcement.city_name[0]}
            date={
              announcement.modified &&
              formatDateNumericDMY(
                announcement.modified.slice(0, 4),
                announcement.modified.slice(5, 7),
                announcement.modified.slice(8, 10)
              )
            }
          />
        </div>
      ))}
  </div>
);

/* PropTypes */
AnnouncementsList.propTypes = {
  className: PropTypes.string,
  announcementsList: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkToDetailPage: PropTypes.bool,
  announcementOptions: PropTypes.bool,
};

/* Export component */
export default AnnouncementsList;
