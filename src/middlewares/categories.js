/* Imports */
import { ApiClient } from 'configuration/AxiosConfiguration';
import { loadEnd } from 'actions/load';
import { GET_CATEGORIES_LIST, storeCategoriesList } from 'actions/categories';

/* * * * * * * * * * * * * *
 * * Categories middleware *
 *
 * @description : Api calls about categories
 *
 * @cases ---------------------------------------------------------
 * - GET CATEGORIES LIST  => Get categories list from api
 * ----------------------------------------------------------------
 *
 */
const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST: {
      /*
       * API GET
       * @info : get categories list
       * @params : per_page  => 1000 elements per page
       */
      ApiClient.get('/wp/v2/announcement-categories?per_page=100')
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeCategoriesList
             * @info : store to state categories list
             */
            store.dispatch(storeCategoriesList(response.data));
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {})
        /*
         * FINALLY
         */
        .finally(() => {
          store.dispatch(loadEnd('isLoadingCategoriesList'));
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

/* Export */
export default categories;
