/* * * * * * * * * * * * * * * * *
 * * Create city term action *
 *
 * @description : Create city term into database
 *
 */
export const CREATE_CITY_TERM = 'CREATE_CITY_TERM';
export const createCityTerm = () => ({
  type: CREATE_CITY_TERM,
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Get cities list from geo api using postcode action *
 *
 * @description : Get cities list from geo api using postcode
 *
 * @params ----------------------------------------------------------
 * - postcode               => post code to search
 * - formName               => form to find the post code
 * - linkedCityFieldName    => field to display the result of search
 * ------------------------------------------------------------------
 *
 */
export const GET_GEO_API_CITIES_LIST_USING_POST_CODE =
  'GET_GEO_API_CITIES_LIST_USING_POST_CODE';
export const getGeoApiCitiesListUsingPostcode = (
  postcode,
  formName,
  linkedCityFieldName
) => ({
  type: GET_GEO_API_CITIES_LIST_USING_POST_CODE,
  postcode,
  formName,
  linkedCityFieldName,
});

/* * * * * * * * * * * * * * * * * * *
 * * Get Database cities list action *
 *
 * @description : Get O'Service Database cities list
 *
 */
export const GET_DATABASE_CITIES_LIST = 'GET_DATABASE_CITIES_LIST';
export const getDatabaseCitiesList = () => ({
  type: GET_DATABASE_CITIES_LIST,
});

/* * * * * * * * * * * * * * * *
 * * Store cities list action *
 *
 * @description : Store cities list into state
 *
 * @params ----------------------------------------------------------
 * - citiesList             => cities list from api
 * ------------------------------------------------------------------
 *
 */
export const STORE_CITIES_LIST = 'STORE_CITIES_LIST';
export const storeCitiesList = (citiesList) => ({
  type: STORE_CITIES_LIST,
  citiesList,
});
