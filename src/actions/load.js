/* * * * * * * * * * * * *
 * * Load start action  *
 *
 * @description : Start loading mode. Set to true a specific state property
 *
 * @params ----------------------------------------------------------
 * - loaderKey => state property to set to true
 * ------------------------------------------------------------------
 *
 */
export const LOAD_START = 'LOAD_START';
export const loadStart = (loaderKey) => ({
  type: LOAD_START,
  loaderKey,
});

/* * * * * * * * * * *
 * * Load end action  *
 *
 * @description : Stop loading mode. Set to false a specific state property
 *
 * @params ----------------------------------------------------------
 * - loaderKey => state property to set to false
 * ------------------------------------------------------------------
 *
 */
export const LOAD_END = 'LOAD_END';
export const loadEnd = (loaderKey) => ({
  type: LOAD_END,
  loaderKey,
});
