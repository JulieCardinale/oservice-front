/* Import(s) */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserForm from 'containers/UserForm';

/* * * * * * * * *
 * * Create user *
 *
 * @description : Display update user form
 *
 * @props --------------------------------------------------------------------------------------------------------------------------------
 * - storeUrlSlug (func) => Save slug URL (user id) in state
 * - getUserDetailsToUpdate (func) => Get current user details to update it using URL slug
 * ---------------------------------------------------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------------------------------------------------
 * - useParams => when page is displayed, slug URL (user id) is used to get user details. We use it to make an API call.
 * https://reactrouter.com/web/api/Hooks/useparams
 * ---------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const UpdateUser = ({ storeUrlSlug, getUserDetailsToUpdate }) => {
  /* * * * * * * * * * * * * *
   * * useParams, useEffects *
   */
  const { slug } = useParams();
  useEffect(() => storeUrlSlug(slug), []);
  useEffect(() => getUserDetailsToUpdate(), []);

  /* * * * *
   * * JSX *
   */
  return <UserForm formMode="update" />;
};

/* PropTypes */
UpdateUser.propTypes = {
  storeUrlSlug: PropTypes.func,
  getUserDetailsToUpdate: PropTypes.func,
};

/* Export component */
export default UpdateUser;
