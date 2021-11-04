/* Import(s) */
import axios from 'axios';
import { focusToField, decode } from 'selectors';
import { resetState } from 'actions/utils';
import { displaySuccessMessage, closePopUp, setError } from 'actions/alerts';
import { loadStart, loadEnd } from 'actions/load';
import { USER_FORM_SUBMIT } from 'actions/forms';

import {
  DELETE_USER,
  AUTH_FORM_LOGIN,
  GET_MY_DETAILS,
  GET_USER_DETAILS_USING_URL_SLUG,
  GET_USER_DETAILS_TO_UPDATE,
  CHECK_IF_LOGGED,
  storeUserDetailsToUpdate,
  storeMyDetails,
  storeUserDetails,
} from 'actions/users';
import {
  ApiClient,
  ApiClientUserToken,
  ApiClientAdminToken,
  api,
} from 'configuration/AxiosConfiguration';
/*
 * Import sessionStorage
 * @infos :
 * connectedUserId => id of the current connected user. Usefull for api requests
 */
const { connectedUserId, connectedUserToken } = sessionStorage;

/* * * * * * * * * * *
 * * Users middleware *
 *
 * @description : Api calls about users
 *
 * @cases ---------------------------------------------------------------------------------
 * - CHECK IF LOGGED                        => Check if user is logged
 * - USER FORM SUBMIT                       => submit user form
 * - AUTH FORM LOGIN                        => submit login form
 * - GET MY DETAILS                         => Get connected user details
 * - GET USER DETAILS USING URL SLUG        => Get user details using url slug
 * - GET USER DETAILS TO UPDATE             => Get user details for update it
 * - DELETE USER                            => delete user using id
 * ----------------------------------------------------------------------------------------
 *
 */
const user = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case CHECK_IF_LOGGED: {
      if (connectedUserToken) {
        const decoded = decode(connectedUserToken, connectedUserId, api);
        if (!decoded) {
          sessionStorage.clear();
          window.location = '/';
        }
      } else {
        sessionStorage.clear();
      }
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case USER_FORM_SUBMIT: {
      /*
       * getState
       * @info : get create or update user form values from state
       */
      const {
        userFormPictureFormData,
        userFormPictureId,
        userFormLastname,
        userFormFirstname,
        userFormSex,
        userFormBirthdate,
        userFormEmail,
        userFormAddress,
        userFormPostCode,
        userFormCityName,
        userFormDescription,
        userFormPassword,
      } = store.getState().forms.userForm;
      /*
       * getState
       * @info : get url slug from state
       */
      const { urlSlug } = store.getState().utils;
      /*
       * Errors Array
       * @info : If errors array is EMPTY we can post the form
       */
      if (action.userFormErrorsArray.length === 0) {
        /*
         * loadStart
         * @info : start loading on submit
         */
        store.dispatch(loadStart('isLoadingOnSubmit'));
        /* --------------------------------------------------------------- */
        /* ---------------------- CREATE USER ---------------------------- */
        /* --------------------------------------------------------------- */
        if (action.formMode === 'create') {
          /*
           * API POST
           * @info : post media
           */
          axios
            .post(`${api}/proxy-picture-api.php`, userFormPictureFormData)
            .then((mediaCreateReponse) => {
              if (mediaCreateReponse.status === 201) {
                /*
                 * API POST
                 * @info : post announcement
                 *
                 * @content :
                 * userPictureId             => User picture id
                 * picture                   => User picture source url
                 * username                  => User first name & last name
                 * first_name                => User first name
                 * last_name                 => User last name picture id
                 * sex                       => User sex
                 * birth_date                => User birthdate
                 * email                     => User email
                 * address                   => User address
                 * postal_code               => User postcode
                 * city                      => User city
                 * description               => User description
                 * password                  => User password
                 * role                      => User role 'member'
                 */
                axios
                  .post(`${api}/proxy-api.php`, {
                    userPictureId: mediaCreateReponse.data.id,
                    picture: mediaCreateReponse.data.source_url,
                    username: `${userFormFirstname} ${userFormLastname}`,
                    first_name: userFormFirstname,
                    last_name: userFormLastname,
                    sex: userFormSex,
                    birth_date: userFormBirthdate,
                    email: userFormEmail,
                    address: userFormAddress,
                    postal_code: userFormPostCode,
                    city: userFormCityName,
                    description: userFormDescription,
                    password: userFormPassword,
                    roles: 'member',
                  })
                  /*
                   * SUCCESS
                   * @info :
                   * loadEnd                 => stop on submit loading
                   * displaySuccessMessage   => display success message
                   * setTimeout              => after 3sec redirect to my announcements page
                   */
                  .then((contentCreateResponse) => {
                    if (contentCreateResponse.status === 201) {
                      store.dispatch(loadEnd('isLoadingOnSubmit'));
                      store.dispatch(displaySuccessMessage());
                      setTimeout(() => {
                        window.location = '/connexion';
                      }, 3000);
                    }
                  });
              }
              /*
               * ERRORS (handling with API response)
               * @info :
               * errorCode                                       => store errorCode
               * announcementFormSetPictureError   => display error when image size > 2Mo
               * focusToField                                    => focus to picture loader
               */
            })
            .catch((error) => {
              const errorCode = error.response.data.code;
              if (
                errorCode === 'rest_upload_unknown_error' ||
                errorCode === 'rest_upload_no_content_disposition'
              ) {
                store.dispatch(
                  setError(
                    'userFormErrors',
                    'userFormPictureErrorMessage',
                    'Votre image dépasse la taille maximale autorisée de 2Mo.'
                  )
                );
                focusToField('#oservice-picture-loader');
              }
              /*
               * FINALLY
               * @info :
               * loadEnd                                         => stop on submit loading
               */
            })
            .finally(() => {
              store.dispatch(loadEnd('isLoadingOnSubmit'));
            });
        }
        /* --------------------------------------------------------------- */
        /* --------------- UPDATE USER DON'T CHANGE IMAGE ---------------- */
        /* --------------------------------------------------------------- */
        if (action.formMode === 'update') {
          if (
            userFormPictureFormData ===
            "Modification de l'utilisateur sans changer l'image"
          ) {
            /*
             * API PATCH
             * @info : patch user
             *
             * @content :
             * email                     => user email
             * address                   => user address
             * postal_code               => user postcode
             * city                      => user city
             * description               => user description
             * password                  => user password
             *
             * @params
             * urlSlug                   => id of user to update
             */
            ApiClientUserToken.patch(`/wp/v2/users/${urlSlug}`, {
              email: userFormEmail,
              address: userFormAddress,
              postal_code: userFormPostCode,
              city: userFormCityName,
              description: userFormDescription,
              password: userFormPassword,
            })
              /*
               * SUCCESS
               * @info :
               * loadEnd                 => stop on submit loading
               * displaySuccessMessage   => display success message
               * setTimeout              => after 3sec redirect to my announcements page
               */
              .then((contentUpdateResponse) => {
                if (contentUpdateResponse.status === 200) {
                  store.dispatch(loadEnd('isLoadingOnSubmit'));
                  store.dispatch(displaySuccessMessage());
                  setTimeout(() => {
                    sessionStorage.clear();
                    window.location = '/connexion';
                  }, 3000);
                }
                /*
                 * ERRORS
                 *
                 */
              })
              .catch(() => {})
              /*
               * FINALLY
               * @info :
               * loadEnd              => stop on submit loading
               */
              .finally(() => {
                store.dispatch(loadEnd('isLoadingOnSubmit'));
              });
          } else {
            /* --------------------------------------------------------------- */
            /* ---------------- UPDATE USER AND CHANGE IMAGE ----------------- */
            /* --------------------------------------------------------------- */
            /*
             * API POST
             * @info : post media
             */
            ApiClientUserToken.post('/wp/v2/media', userFormPictureFormData)
              .then((mediaUpdateResponse) => {
                if (mediaUpdateResponse.status === 201) {
                  /*
                   * API PATCH
                   * @info : patch user
                   *
                   * @content :
                   * userPictureId             => user picture id
                   * picture                   => user picture source url
                   * email                     => user email
                   * address                   => user address
                   * postal_code               => user postcode
                   * city                      => user city
                   * description               => user description
                   * password                  => user password
                   *
                   * @params
                   * urlSlug                   => id of user to update
                   */
                  ApiClientUserToken.patch(`/wp/v2/users/${urlSlug}`, {
                    userPictureId: mediaUpdateResponse.data.id,
                    picture: mediaUpdateResponse.data.source_url,
                    email: userFormEmail,
                    address: userFormAddress,
                    postal_code: userFormPostCode,
                    city: userFormCityName,
                    description: userFormDescription,
                    password: userFormPassword,
                  })
                    /*
                     * SUCCESS
                     * @info :
                     * ApiClientUserToken.delete   => delete replaced media
                     * loadEnd                      => stop on submit loading
                     * setTimeout                   => after 3sec redirect to my announcements page
                     */
                    .then((contentUpdateResponse) => {
                      if (contentUpdateResponse.status === 200) {
                        /*
                         * API DELETE
                         * @info : delete replaced media
                         *
                         * @params :
                         * announcementFormPictureId  => picture to delete id
                         * force=true :
                         *   => code: "rest_trash_not_supported"
                         *   => "La publication ne peut pas être mise à la corbeille. Utilisez le paramètre « force=true » pour la supprimer."
                         */
                        ApiClientUserToken.delete(
                          `/wp/v2/media/${userFormPictureId}/?force=true`
                        );
                        store.dispatch(loadEnd('isLoadingOnSubmit'));
                        store.dispatch(displaySuccessMessage());
                        setTimeout(() => {
                          sessionStorage.clear();
                          window.location = '/connexion';
                        }, 3000);
                      }
                    });
                }
                /*
                 * ERRORS (handling with API response)
                 * @info :
                 * errorCode                                       => store errorCode
                 * announcementFormSetPictureError   => display error when image size > 2Mo
                 * focusToField                                    => focus to picture loader
                 */
              })
              .catch((error) => {
                const errorCode = error.response.data.code;
                if (
                  errorCode === 'rest_upload_unknown_error' ||
                  errorCode === 'rest_upload_no_content_disposition'
                ) {
                  store.dispatch(
                    setError(
                      'userFormErrors',
                      'userFormPictureErrorMessage',
                      'Votre image dépasse la taille maximale autorisée de 2Mo.'
                    )
                  );
                  focusToField('#oservice-picture-loader');
                }
              })
              /*
               * FINALLY
               * @info :
               * loadEnd => stop on submit loading
               */
              .finally(() => {
                store.dispatch(loadEnd('isLoadingOnSubmit'));
              });
          }
        }
      } else {
        /*
         * ERRORS (handling in front)
         * @info :
         * Errors Array => If error array CONTAIN errors we can't post the form.
         * focusToField => We focus to the first field which has an error.
         */
        focusToField(action.userFormErrorsArray[0]);
      }
      next(action);
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case AUTH_FORM_LOGIN: {
      /*
       * getState
       * @info : get auth form values from state
       */
      const { authFormEmail, authFormPassword } =
        store.getState().forms.authForm;
      /*
       * API POST
       * @info : post announcement
       *
       * @content :
       * username
       * password
       */
      ApiClient.post('/jwt-auth/v1/token', {
        username: authFormEmail,
        password: authFormPassword,
      })
        /*
         * SUCCESS
         * @info :
         * sessionStorage.setItem         => When user is logged we store his datas to sessionStorage
         * window.location              => we redirect user to last announcements page
         * authFormResetErrors          => we reset auth form errors
         */
        .then((response) => {
          const { success } = response.data;
          if (success) {
            sessionStorage.setItem('userIsLogged', true);
            sessionStorage.setItem(
              'connectedUserToken',
              response.data.data.token
            );
            sessionStorage.setItem('connectedUserId', response.data.data.id);
            window.location = '/';
            store.dispatch(resetState('authFormErrors'));
          } else {
            /*
             * ERRORS (handling with API response)
             * @info :
             * authFormResetErrors     => reset auth form errors
             * errorCode               => store errorCode
             * empty_username          => empty username field
             * invalid_email           => invalid email
             * empty_password          => empty password field
             * incorrect_password      => incorrect password
             */
            store.dispatch(resetState('authFormErrors'));
            const errorCode = response.data.code;
            if (errorCode === 'empty_username') {
              store.dispatch(
                setError(
                  'authFormErrors',
                  'authFormEmailErrorMessage',
                  'Le champ de l’identifiant est vide.'
                )
              );
            }
            if (errorCode === 'empty_password') {
              store.dispatch(
                setError(
                  'authFormErrors',
                  'authFormPasswordErrorMessage',
                  'Le champ du mot de passe est vide.'
                )
              );
            }
            if (errorCode === 'incorrect_password') {
              store.dispatch(
                setError(
                  'authFormErrors',
                  'authFormPasswordErrorMessage',
                  'Échec : vérifier vos identifiants.'
                )
              );
            }
          }
          /*
           * ERRORS
           *
           */
        })
        .catch(() => {});
      next(action);
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_MY_DETAILS: {
      /*
       * API GET
       * @info : get connected user details with his id
       * @params :
       * connectedUserId  => connected user id
       * loadEnd          => stop loading
       */
      ApiClientUserToken.get(`/wp/v2/users/${connectedUserId}`)
        .then((response) => {
          if (response.status === 200) {
            /*
             * SUCCESS
             * @info :
             * storeUserDetailsToUpdate  => store connected user details into state
             */
            store.dispatch(storeMyDetails(response.data));
            setTimeout(() => {
              store.dispatch(loadEnd('isLoading'));
            }, 300);
          }
          /*
           * ERRORS
           *
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
    case GET_USER_DETAILS_USING_URL_SLUG: {
      /*
       * getState
       * @info : get url slug from state
       */
      const { urlSlug } = store.getState().utils;
      /*
       * API GET
       * @info : get connected user details with his id
       * @params :
       * urlSlug => user id
       */
      ApiClientUserToken.get(`/wp/v2/users/${urlSlug}`)
        /*
         * SUCCESS
         * @info :
         * storeUserDetails  => store user details into state
         * loadEnd           => stop loading
         */
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(storeUserDetails(response.data));
            setTimeout(() => {
              store.dispatch(loadEnd('isLoading'));
            }, 300);
          }
          /*
           * ERRORS
           * @info : redirect to home page
           */
        })
        .catch(() => {
          window.location = '/';
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_USER_DETAILS_TO_UPDATE: {
      /*
       * getState
       * @info : get url slug from state
       */
      const { urlSlug } = store.getState().utils;

      /*
       * API GET
       * @info : get connected user details with his id
       * @params :
       * urlSlug => user id
       */
      ApiClientUserToken.get(`/wp/v2/users/${urlSlug}`)
        .then((response) => {
          if (response.status === 200) {
            /*
             * If I'm not the user of this profil, I can't update it
             * redirect me to home
             */
            if (response.data.id !== parseInt(connectedUserId, 10)) {
              window.location = '/';
            } else {
              /*
               * SUCCESS
               * @info : if I'm the user I can update it
               * storeUserDetailsToUpdate  => store user details into state to update
               * loadEnd                         => stop loading
               */
              store.dispatch(storeUserDetailsToUpdate(response.data));
              setTimeout(() => {
                store.dispatch(loadEnd('isLoading'));
              }, 300);
            }
          }
          /*
           * ERRORS
           * @info : redirect to home page
           */
        })
        .catch(() => {
          window.location = '/';
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case DELETE_USER: {
      /*
       * getState
       * @info : get selected element id (selected user id) from state
       */
      const { selectedElementId } = store.getState().alerts;
      /*
       * API DELETE
       * @info : delete my profile
       *
       * @params :
       * selectedElementId  => announcement to delete id
       * reassign=0         => don't reassing deleted user posts to another user
       * force=true         => completely delete an user (not only put it in trash)
       * wordpress message : "Les utilisateurs ne peuvent pas être mis à la corbeille. Utilisez le paramètre « force=true » pour le supprimer."
       */
      ApiClientAdminToken.delete(
        `/wp/v2/users/${selectedElementId}?reassign=0&force=true`
      )
        .then((response) => {
          if (response.status === 200) {
            /*
             * SUCCESS
             * @info :
             * closePopUp   => close information box
             * sessionStorage.clear()  => clear totaly sessionStorage
             * window.location       => redirect to unconnected home page
             */
            store.dispatch(closePopUp());
            sessionStorage.clear();
            window.location = '/connexion';
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
    default:
      next(action);
      break;
  }
};

/* Export */
export default user;
