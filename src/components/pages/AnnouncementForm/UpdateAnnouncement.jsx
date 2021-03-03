/* Import(s) */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnnouncementForm from 'containers/AnnouncementForm';

/* * * * * * * * * * * * *
 * * Update announcement *
 *
 * @description : Update announcement form
 *
 * @props --------------------------------------------------------------------------------------------------------------------------------
 * - storeUrlSlug (func)                       => Store slug URL (announcement id) in state
 * - getAnnouncementDetailsToUpdate (func)     => Get current announcement details to update it using URL slug
 * ---------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------------------------------------------------
 * - useParams => when page is displayed, slug URL (announcement id) is used to get announcement details, we use it to make an API call.
 * https://reactrouter.com/web/api/Hooks/useparams
 * ---------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const UpdateAnnouncement = ({
  storeUrlSlug,
  getAnnouncementDetailsToUpdate,
}) => {
  /* * * * * * * * * * * * * *
   * * useParams, useEffects *
   */
  const { slug } = useParams();
  useEffect(() => storeUrlSlug(slug), []);
  useEffect(() => getAnnouncementDetailsToUpdate(), []);

  /* * * * *
   * * JSX *
   */
  return <AnnouncementForm formMode="update" />;
};

/* PropTypes */
UpdateAnnouncement.propTypes = {
  storeUrlSlug: PropTypes.func,
  getAnnouncementDetailsToUpdate: PropTypes.func,
};

/* Export component */
export default UpdateAnnouncement;
