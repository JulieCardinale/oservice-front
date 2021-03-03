/* Import(s) */
import { LOAD_START, LOAD_END } from 'actions/load';

/* * * * * * * * * * * *
 * * Load Initial state *
 *
 * @description : All load reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - isLoading (bool)                            => is loading or not
 * - isLoadingMore (bool)                        => is loading more or not
 * - isLoadingCategoriesList (bool)              => is loading categories list or not
 * - isLoadingMessagesList (bool)                => is loading messages list or not
 * - isLoadingOnSubmit (bool)                    => is loading on submit or not
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  isLoading: false,
  isLoadingMore: false,
  isLoadingCategoriesList: false,
  isLoadingMessagesList: false,
  isLoadingOnSubmit: false,
};

/* * * * * * * * *
 * * Load reducer *
 *
 * @description : All load reducer actions
 *
 * @cases --------------------------------------------------------
 * - LOAD START     => Start a loader property.
 * - LOAD END       => Stop a loader property.
 * ----------------------------------------------------------------
 *
 */
const load = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * *
     * * LOAD START *
     *
     * @description : Start a loader property.
     *
     */
    case LOAD_START:
      return {
        ...state,
        [action.loaderKey]: true,
      };
    /* * * * * * *
     * * LOAD END *
     *
     * @description : Stop a loader property.
     *
     */
    case LOAD_END:
      return {
        ...state,
        [action.loaderKey]: false,
      };
    default:
      return state;
  }
};

/* Export */
export default load;
