/* * * * * * * * * *
 * * Store url slug *
 *
 * @description : Store into state url slug
 *
 * @params -------------------------------
 * - urlSlug => url slug to store
 * ---------------------------------------
 *
 */
export const STORE_URL_SLUG = 'STORE_URL_SLUG';
export const storeUrlSlug = (urlSlug) => ({
  type: STORE_URL_SLUG,
  urlSlug,
});

/* * * * * * * * * * * *
 * * Reset state action *
 *
 * @description : reset a specific state property
 *
 * @params -------------------------------
 * - property => specific state property
 * ---------------------------------------
 *
 */
export const RESET_STATE = 'RESET_STATE';
export const resetState = (property) => ({
  type: RESET_STATE,
  property,
});
