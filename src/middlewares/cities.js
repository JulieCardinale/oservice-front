/* Imports */
import axios from 'axios';
import { resetState } from 'actions/utils';
import {
  ApiClient,
  ApiClientUserToken,
} from 'configuration/AxiosConfiguration';
import {
  announcementFormStoreCityIdFromApi,
  formFieldOnChange,
} from 'actions/forms';
import {
  GET_GEO_API_CITIES_LIST_USING_POST_CODE,
  GET_DATABASE_CITIES_LIST,
  CREATE_CITY_TERM,
  storeCitiesList,
} from 'actions/cities';

/* * * * * * * * * * * *
 * * Cities middleware *
 *
 * @description : Api calls about cities
 *
 * @cases -----------------------------------------------------------------------------------------
 * - GET GEO API CITIES LIST USING POST CODE  => Get cities list from geo api using postcode
 * - GET DATABASE CITIES LIST                 => Get O'Service Database cities list
 * - CREATE CITY TERM                         => Create city term into database
 * ------------------------------------------------------------------------------------------------
 *
 */
const cities = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_GEO_API_CITIES_LIST_USING_POST_CODE: {
      /*
       * get from action
       * @info :
       * postcode              => entered post code in form
       * formName              => form name
       * linkedCityFieldName   => post code field is linked to a city field
       */
      const { postcode, formName, linkedCityFieldName } = action;
      /*
       * resetCitiesList
       * @info : reset cities list
       */
      store.dispatch(resetState('citiesList'));
      /*
       * formFieldOnChange
       * @info : reset city field on change
       */
      store.dispatch(
        formFieldOnChange(formName, linkedCityFieldName, 'Aucune ville trouvée')
      );
      /*
       * If postcode value is a correct (>= 5) value we start API request
       */
      if (postcode.length === 5) {
        /*
         * API GET
         * @info : get french city with post code
         * @params : post code => postal code entered in form
         */
        axios
          .get(`https://geo.api.gouv.fr/communes?codePostal=${postcode}`)
          .then((response) => {
            /*
             * If result isn't null
             */
            if (response.status === 200 && response.data.length !== 0) {
              /*
               * storeCitiesList
               * @info : store cities list into state
               */
              store.dispatch(storeCitiesList(response.data));
              /*
               * formFieldOnChange
               * @info : change the city linked field text with the number of api responses
               */
              store.dispatch(
                formFieldOnChange(
                  formName,
                  linkedCityFieldName,
                  response.data.length === 1
                    ? '1 ville trouvée'
                    : `${response.data.length} villes trouvées`
                )
              );
            }
            /*
             * ERRORS
             */
          })
          .catch(() => {});
      }
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_DATABASE_CITIES_LIST: {
      /*
       * API GET
       * @info : get database cities list
       * @params : per_page => 1000 elements per page
       */
      ApiClient.get('/wp/v2/announcement-cities/?per_page=1000')
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeCitiesList
             * @info : store database cities list into state
             */
            store.dispatch(storeCitiesList(response.data));
          }
          /*
           * ERRORS
           */
        })
        .catch(() => {});
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case CREATE_CITY_TERM: {
      /*
       * getState
       * @info : get create or update announcement form values from state
       */
      const {
        announcementFormCityName,
        announcementFormCityDepartmentCode,
      } = store.getState().forms.announcementForm;
      /*
       * API POST
       * @info : create city term when city select value change
       * @content :
       * name                      => City term name
       * code_department           => Code department
       */
      ApiClientUserToken.post('wp/v2/announcement-cities', {
        name: announcementFormCityName,
        meta: {
          code_department: announcementFormCityDepartmentCode,
        },
      })
        .then((response) => {
          if (response.status === 201) {
            /*
             * announcementFormStoreCityIdFromApi
             * @info : store creating city term id into state (usefull for the announcement we're creating/updating)
             */
            store.dispatch(
              announcementFormStoreCityIdFromApi(response.data.id)
            );
          }
        })
        /*
         * ERRORS (handling with API response)
         * @info :
         * errorCode                             => store errorCode
         * existingTermId                        => get existing term id
         * announcementFormStoreCityIdFromApi    => store existing city term id into state (usefull for the announcement we're creating/updating)
         */
        .catch((error) => {
          const errorCode = error.response.data.code;
          const existingTermId = error.response.data.data.term_id;
          if (errorCode === 'term_exists') {
            store.dispatch(announcementFormStoreCityIdFromApi(existingTermId));
          }
        });

      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    default:
      next(action);
      break;
  }
};

/* Export */
export default cities;
