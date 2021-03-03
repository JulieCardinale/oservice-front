/* Import(s) */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeExcerpt } from 'selectors';
import Image from 'components/reusables/images/Image';
import CategoryTag from 'components/reusables/texts/CategoryTag';
import Text from 'components/reusables/texts/Text';
import AnnouncementOptions from 'containers/AnnouncementOptions';

/* * * * * * * * * *
 * * Announcement *
 *
 * @description : one announcement
 *
 * @props -------------------------------------------------------------------------------------------------------------------------------------------
 * - linkToDetailPage (bool)     => is link to details page active ?
 * - announcementOptions (bool)  => are visible announcements options. AnnouncementOptions are only displayed on my announcements page.
 * Takes announcementId as props to permit delete or update it with popup.
 * - id                          => announcement id
 * - picture                     => announcement picture
 * - title                       => announcement title
 * - category                    => announcement category
 * - excerpt                     => announcement excerpt
 * - city                        => announcement city
 * - date                        => announcement date
 * ---------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use -------------------------------------------------------------------------------------------------------------------------------------------
 * - Link                        => https://reactrouter.com/web/api/Link
 * ---------------------------------------------------------------------------------------------------------------------------------------------------
 */
const Announcement = ({
  linkToDetailPage,
  announcementOptions,
  id,
  picture,
  title,
  category,
  excerpt,
  city,
  date,
}) => (
  <>
    <div className="oservice-announcement">
      {/* ANNOUNCEMENT - PICTURE */}
      <Image
        className="oservice-announcement-card-image"
        src={picture}
        alt="Image de l'annonce"
      />
      <div className="oservice-announcement__content">
        <div>
          {/* ANNOUNCEMENT - TITLE */}
          <Text className="oservice-text-card-title" content={title} />
          {/* ANNOUNCEMENT - CATEGORY */}
          <CategoryTag
            tagName={category}
            className="oservice-category-tag-card"
          />
          {/* ANNOUNCEMENT - EXCERPT */}
          <Text
            className="oservice-text-card-excerpt"
            content={excerpt && makeExcerpt(excerpt)}
          />
        </div>
        <div className="oservice-announcement__city-date">
          {/* ANNOUNCEMENT - CITY */}
          <Text className="oservice-text-card-city-date" content={city} />
          {/* ANNOUNCEMENT - DATE */}
          <Text className="oservice-text-card-city-date" content={date} />
        </div>
        {/* ANNOUNCEMENT - OPTIONS */}
        {announcementOptions && <AnnouncementOptions announcementId={id} />}
        {/* ANNOUNCEMENT - LINK TO DETAIL PAGE */}
        {linkToDetailPage && (
          <Link
            to={`/annonce-details/${id}`}
            className="oservice-announcement__link"
          />
        )}
      </div>
    </div>
  </>
);

/* PropTypes */
Announcement.propTypes = {
  announcementOptions: PropTypes.bool,
  linkToDetailPage: PropTypes.bool,
  id: PropTypes.number,
  picture: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  excerpt: PropTypes.string,
  city: PropTypes.string,
  date: PropTypes.string,
};

/* Export component */
export default Announcement;
