/* Imports */
import { RESET_STATE } from 'actions/utils';
import { STORE_CITIES_LIST } from 'actions/cities';

/* * * * * * * * * * * * *
 * * Cities Initial state *
 *
 * @description : All cities reducers properties.
 *
 * @properties ------------------------------------------------------------------------------
 * - citiesList (array)  => cities list
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  citiesList: [],
};

/* * * * * * * * * * *
 * * Cities reducer *
 *
 * @description : All cities reducer actions
 *
 * @cases -----------------------------------------------------------------------------------------------
 * - RESET STATE       => reset cities list
 * - STORE CITIES LIST => Store cities list into state
 * -------------------------------------------------------------------------------------------------------
 *
 */
const cities = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * *
     * * RESET STATE *
     *
     * @description : reset a specific state property
     *
     */
    case RESET_STATE:
      return {
        ...state,
        [action.property]: initialState[action.property],
      };
    /* * * * * * * * * * * * * * * *
     * * Store cities list action *
     *
     * @description : Store cities list into state
     *
     */
    case STORE_CITIES_LIST:
      return {
        ...state,
        citiesList: action.citiesList,
      };
    default:
      return state;
  }
};

/* Export reducer */
export default cities;
