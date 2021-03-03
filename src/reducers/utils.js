/* Import(s) */
import { STORE_URL_SLUG } from 'actions/utils';

/* * * * * * * * * * * * *
 * * Utils Initial state *
 *
 * @description : All utils reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - urlSlug (number)    => url page slug (user id or announcement id)
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  urlSlug: 0,
};

/* * * * * * * * * *
 * * Utils reducer *
 *
 * @description : All utils reducer actions
 *
 * @cases ----------------------------------------------------------------
 * - STORE URL SLUG  => url slug to store
 * -----------------------------------------------------------------------
 *
 */
const utils = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * *
     * * STORE URL SLUG *
     *
     * @description : Store into state url slug
     *
     */
    case STORE_URL_SLUG:
      return {
        ...state,
        urlSlug: action.urlSlug,
      };
    default:
      return state;
  }
};

/* Export */
export default utils;
