/* * * * * * * * * * * * * * * *
 * * Get categories list action *
 *
 * @description : Get categories list from api
 *
 */
export const GET_CATEGORIES_LIST = 'GET_CATEGORIES_LIST';
export const getCategoriesList = () => ({
  type: GET_CATEGORIES_LIST,
});

/* * * * * * * * * * * * * * * * *
 * * Store categories list action *
 *
 * @description : Store categories list into state
 *
 * @params ----------------------------------------------------------
 * - categoriesList => categories list from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_CATEGORIES_LIST = 'STORE_CATEGORIES_LIST';
export const storeCategoriesList = (categoriesList) => ({
  type: STORE_CATEGORIES_LIST,
  categoriesList,
});
