/* Imports */
import { STORE_CATEGORIES_LIST } from 'actions/categories';

/* * * * * * * * * * * * * * * *
 * * Categories Initial state *
 *
 * @description : All categories reducers properties.
 *
 * @properties ------------------------------------------------------------------------------
 * - categoriesList (array) => categories list
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  categoriesList: [],
};

/* * * * * * * * * * * *
 * * Categories reducer *
 *
 * @description : All categories reducer actions
 *
 * @cases -----------------------------------------------------------------------------------------------
 * - STORE CATEGORIES LIST          =>  Store categories list into state
 * -------------------------------------------------------------------------------------------------------
 *
 */
const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * * *
     * * STORE CATEGORIES LIST *
     *
     * @description : Store categories list into state
     *
     */
    case STORE_CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.categoriesList,
      };
    default:
      return state;
  }
};

/* Export */
export default categories;
