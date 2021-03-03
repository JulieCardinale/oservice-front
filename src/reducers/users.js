/* Imports */
import { STORE_MY_DETAILS, STORE_USER_DETAILS } from 'actions/users';

/* * * * * * * * * * * * *
 * * Users Initial state *
 *
 * @description : All users reducers properties.
 *
 * @properties ----------------------------------------------------------
 * - myDetailsList (array)    => my details list
 * - userDetails (obj)        => user details list
 * ----------------------------------------------------------------------
 *
 */
const initialState = {
  myDetailsList: [{}],
  userDetails: {},
};

/* * * * * * * * * *
 * * Users reducer *
 *
 * @description : All users reducer actions
 *
 * @cases ----------------------------------------------------------------
 * - STORE MY DETAILS        => Store into state connected user details
 * - STORE USER DETAILS      => Store into state user details
 * -----------------------------------------------------------------------
 *
 */
const users = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * *
     * * STORE MY DETAILS *
     *
     * @description : Store into state connected user details
     *
     */
    case STORE_MY_DETAILS:
      return {
        ...state,
        myDetailsList: action.myDetails,
      };
    /* * * * * * * * * * * *
     * * STORE USER DETAILS *
     *
     * @description : Store into state user details
     *
     */
    case STORE_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

/* Export */
export default users;
