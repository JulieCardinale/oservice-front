/* Imports */
import { focusToField, scrollToElement } from 'selectors';
import { loadEnd, loadStart } from 'actions/load';
import { closePopUp, displaySuccessMessage, setError } from 'actions/alerts';
import { ANNOUNCEMENT_FORM_SUBMIT } from 'actions/forms';
import {
  ApiClient,
  ApiClientUserToken,
} from 'configuration/AxiosConfiguration';
import {
  GET_LAST_THREE_ANNOUNCEMENTS,
  GET_LAST_ANNOUNCEMENTS_LIST,
  GET_MORE_ANNOUNCEMENTS,
  GET_MY_ANNOUNCEMENTS_LIST,
  GET_ANNOUNCEMENT_DETAILS_USING_URL_SLUG,
  DELETE_ANNOUNCEMENT,
  GET_ANNOUNCEMENT_DETAILS_TO_UPDATE,
  storeAnnouncementDetailsToUpdate,
  storeLastThreeAnnouncements,
  storeLastAnnouncementsList,
  storeNumberOfTotalResults,
  storeNumberOfDisplayedResults,
  storeAnnouncementDetails,
  storeMyAnnouncementsList,
  storeMyNewAnnouncementsListAfterDelete,
} from 'actions/announcements';

/*
 * SessionStorage
 * @infos : connectedUserId => id of the current connected user. Usefull for api requests
 */
const { connectedUserId } = sessionStorage;

/* * * * * * * * * * * * * * *
 * * Announcement middleware *
 *
 * @description : Api calls about announcements
 *
 * @cases ----------------------------------------------------------------------------------------------------------------------------------------
 * - ANNOUNCEMENT FORM SUBMIT                 => Submit the form. Create mode or update mode. For update mode, changing the image or not.
 * - GET LAST THREE ANNOUNCEMENTS             => api call to get the last three announcement
 * - GET LAST ANNOUNCEMENT LIST               => api call to get last announcement list
 * - GET MORE ANNOUNCEMENTS                   => api call to get 10 more announcements
 * - GET MY ANNOUNCEMENTS LIST                => api call to get my announcement list
 * - GET ANNOUNCEMENT DETAILS USING URL SLUG  => api call to get announcement details using url slug
 * - GET ANNOUNCEMENT DETAILS TO UPDATE       => api call to get announcement details and update it
 * - DELETE ANNOUNCEMENT                      => delete announcement with id
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const announcements = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case ANNOUNCEMENT_FORM_SUBMIT: {
      /*
       * getState
       * @info : get create or update announcement form values from state
       */
      const {
        announcementFormPictureFormData,
        announcementFormPictureId,
        announcementFormTitle,
        announcementFormCategoryId,
        announcementFormDescription,
        announcementFormPostcode,
        announcementFormCityName,
        announcementFormCityDepartmentCode,
        announcementFormCityId,
      } = store.getState().forms.announcementForm;
      /*
       * getState
       * @info : get url slug from state
       */
      const { urlSlug } = store.getState().utils;
      /*
       * Announcement Errors Array
       * @info : If errors array is EMPTY we can post the form
       */
      if (action.announcementFormErrorsArray.length === 0) {
        /*
         * loadStart
         * @info : start loading on submit
         */
        store.dispatch(loadStart('isLoadingOnSubmit'));
        /* --------------------------------------------------------------- */
        /* ---------------------- CREATE MODE ---------------------------- */
        /* --------------------------------------------------------------- */
        if (action.formMode === 'create') {
          /*
           * API POST
           * @info : post media
           */
          ApiClientUserToken.post(
            '/wp/v2/media',
            announcementFormPictureFormData
          )
            .then((createMediaRequestResponse) => {
              if (createMediaRequestResponse.status === 201) {
                /*
                 * API POST
                 * @info : post announcement
                 * @content :
                 * featured_media            => Picture
                 * title                     => Title
                 * announcement-categories   => Categorie term id
                 * postal_code               => Postcode
                 * city_name                 => City name
                 * code_department           => Code department
                 * announcement-cities       => City term id
                 * content                   => Description
                 * status                    => Status
                 */
                ApiClientUserToken.post('/wp/v2/announcements', {
                  featured_media: createMediaRequestResponse.data.id,
                  title: announcementFormTitle,
                  'announcement-categories': announcementFormCategoryId,
                  meta: {
                    postal_code: announcementFormPostcode,
                    city_name: announcementFormCityName,
                    code_department: announcementFormCityDepartmentCode,
                  },
                  'announcement-cities': announcementFormCityId,
                  content: announcementFormDescription,
                  status: 'publish',
                })
                  /*
                   * SUCCESS
                   * @info :
                   * loadEnd                 => stop on submit loading
                   * displaySuccessMessage   => display success message
                   * setTimeout              => after 3sec redirect to my announcements page
                   */
                  .then((createAnnouncementRequestResponse) => {
                    if (createAnnouncementRequestResponse.status === 201) {
                      store.dispatch(loadEnd('isLoadingOnSubmit'));
                      store.dispatch(displaySuccessMessage());
                      setTimeout(() => {
                        window.location = '/mes-annonces';
                      }, 3000);
                    }
                  });
              }
              /*
               * ERRORS (handling with API response)
               * @info :
               * errorCode                         => store errorCode
               * announcementFormSetPictureError   => display error when image size > 2Mo
               * focusToField                      => focus to picture loader
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
                    'announcementFormErrors',
                    'announcementFormPictureErrorMessage',
                    'Votre image dépasse la taille maximale autorisée de 2Mo.'
                  )
                );
                focusToField('#oservice-picture-loader');
              }
              /*
               * FINALLY
               * @info :
               * loadEnd => stop on submit loading
               */
            })
            .finally(() => {
              store.dispatch(loadEnd('isLoadingOnSubmit'));
            });
        }
        /* --------------------------------------------------------------- */
        /* -------------- UPDATE MODE DON'T CHANGE IMAGE ----------------- */
        /* --------------------------------------------------------------- */
        if (action.formMode === 'update') {
          if (
            announcementFormPictureFormData ===
            "Modification de l'annonce sans changer l'image"
          ) {
            /*
             * API PATCH
             * @info : patch announcement
             * @content :
             * featured_media            => Picture
             * title                     => Title
             * announcement-categories   => Categorie term id
             * postal_code               => Postcode
             * city_name                 => City name
             * code_department           => Code department
             * announcement-cities       => City term id
             * content                   => Description
             * status                    => Status
             * @params
             * urlSlug                   => id of announcement to update
             */
            ApiClientUserToken.patch(`/wp/v2/announcements/${urlSlug}`, {
              featured_media: announcementFormPictureId,
              title: announcementFormTitle,
              'announcement-categories': announcementFormCategoryId,
              meta: {
                postal_code: announcementFormPostcode,
                city_name: announcementFormCityName,
                code_department: announcementFormCityDepartmentCode,
              },
              'announcement-cities': announcementFormCityId,
              content: announcementFormDescription,
              status: 'publish',
            })
              /*
               * SUCCESS
               * @info :
               * loadEnd                 => stop on submit loading
               * displaySuccessMessage   => display success message
               * setTimeout              => after 3sec redirect to my announcements page
               */
              .then((announcementUpdateRequestResponse) => {
                if (announcementUpdateRequestResponse.status === 200) {
                  store.dispatch(loadEnd('isLoadingOnSubmit'));
                  store.dispatch(displaySuccessMessage());
                  setTimeout(() => {
                    window.location = '/mes-annonces';
                  }, 3000);
                }
                /*
                 * ERRORS
                 */
              })
              .catch(() => {})
              /*
               * FINALLY
               * @info : loadEnd => stop on submit loading
               */
              .finally(() => {
                store.dispatch(loadEnd('isLoadingOnSubmit'));
              });
          } else {
            /* --------------------------------------------------------------- */
            /* ---------------- UPDATE MODE CHANGE IMAGE --------------------- */
            /* --------------------------------------------------------------- */
            /*
             * API POST
             * @info : post media
             */
            ApiClientUserToken.post(
              '/wp/v2/media/',
              announcementFormPictureFormData
            )
              .then((mediaUpdateRequestReponse) => {
                if (mediaUpdateRequestReponse.status === 201) {
                  /*
                   * API PATCH
                   * @info : post announcement
                   * @content :
                   * featured_media            => Picture
                   * title                     => Title
                   * announcement-categories   => Categorie term id
                   * postal_code               => Postcode
                   * city_name                 => City name
                   * code_department           => Code department
                   * announcement-cities       => City term id
                   * content                   => Description
                   * status                    => Status
                   * @params :
                   * urlSlug                   => id of announcement to update
                   */
                  ApiClientUserToken.patch(`/wp/v2/announcements/${urlSlug}`, {
                    featured_media: mediaUpdateRequestReponse.data.id,
                    title: announcementFormTitle,
                    'announcement-categories': announcementFormCategoryId,
                    meta: {
                      postal_code: announcementFormPostcode,
                      city_name: announcementFormCityName,
                      code_department: announcementFormCityDepartmentCode,
                    },
                    'announcement-cities': announcementFormCityId,
                    content: announcementFormDescription,
                    status: 'publish',
                  })
                    /*
                     * SUCCESS
                     * @info :
                     * ApiClientUserToken.delete    => delete replaced media
                     * loadEnd                      => stop on submit loading
                     * setTimeout                   => after 3sec redirect to my announcements page
                     */
                    .then((announcementUpdateRequestResponse) => {
                      if (announcementUpdateRequestResponse.status === 200) {
                        /*
                         * API DELETE
                         * @info : delete replaced media
                         * @params :
                         * announcementFormPictureId  => picture to delete id
                         * force=true :
                         *   => code: "rest_trash_not_supported"
                         *   => "La publication ne peut pas être mise à la corbeille. Utilisez le paramètre « force=true » pour la supprimer."
                         */
                        ApiClientUserToken.delete(
                          `/wp/v2/media/${announcementFormPictureId}/?force=true`
                        );
                        store.dispatch(loadEnd('isLoadingOnSubmit'));
                        store.dispatch(displaySuccessMessage());
                        setTimeout(() => {
                          window.location = '/mes-annonces';
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
                      'announcementFormErrors',
                      'announcementFormPictureErrorMessage',
                      'Votre image dépasse la taille maximale autorisée de 2Mo.'
                    )
                  );
                  focusToField('#picture-loader');
                }
              })
              /*
               * FINALLY
               * @info : loadEnd => stop on submit loading
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
        focusToField(action.announcementFormErrorsArray[0]);
      }
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_LAST_THREE_ANNOUNCEMENTS: {
      /*
       * API GET
       * @info : get 3 last announcements
       * @params :
       * per_page  => 3 elements per page
       * orderby   => last modified first
       */
      ApiClient.get('/wp/v2/announcements/?per_page=3&orderby=modified')
        /*
         * SUCCESS
         * @info :
         * storeLastThreeAnnouncements  => store 3 last announcements to state
         */
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(storeLastThreeAnnouncements(response.data));
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {})
        /*
         * FINALLY
         * @info : loadEnd => stop loading
         */
        .finally(() => {
          setTimeout(() => {
            store.dispatch(loadEnd('isLoading'));
          }, 300);
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_LAST_ANNOUNCEMENTS_LIST: {
      /*
       * getState
       * @info : get category filter form category id values from state
       */
      const { categoryFilterFormCategoryId } =
        store.getState().forms.categoryFilterForm;
      /*
       * getState
       * @info : get city filter form city id values from state
       */
      const { cityFilterFormCityId } = store.getState().forms.cityFilterForm;
      /*
       * getState
       * @info : get number of total result per page configured from state
       */
      const { numberOfResultsPerPageConfigured } =
        store.getState().announcements;
      /*
       * API GET
       * @info : get last announcements
       * @params :
       * per_page                  => default 10 elements per page but change when load more
       * announcement-categories   => selected category id
       * announcement-cities       => selected city id
       * orderby                   => last modified first
       */
      ApiClient.get(
        `/wp/v2/announcements/?per_page=${numberOfResultsPerPageConfigured}${
          categoryFilterFormCategoryId &&
          `&announcement-categories=${categoryFilterFormCategoryId}`
        }${
          cityFilterFormCityId && `&announcement-cities=${cityFilterFormCityId}`
        }&orderby=modified`
      )
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeNumberOfTotalResults
             * @info : store to state number of total results
             */
            store.dispatch(
              storeNumberOfTotalResults(response.headers['x-wp-total'])
            );
            /*
             * storeNumberOfDisplayedResults
             * @info : store to state number of displayed results
             */
            store.dispatch(storeNumberOfDisplayedResults(response.data.length));
            /*
             * storeLastAnnouncementsList
             * @info : store last announcements list
             */
            store.dispatch(storeLastAnnouncementsList(response.data));
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {});
      /*
       * FINALLY
       * @info : loadEnd => stop loading
       */
      setTimeout(() => {
        store.dispatch(loadEnd('isLoading'));
      }, 300);
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_MORE_ANNOUNCEMENTS: {
      /*
       * getState
       * @info : get category filter form category id values from state
       */
      const { categoryFilterFormCategoryId } =
        store.getState().forms.categoryFilterForm;
      /*
       * getState
       * @info : get city filter form city id values from state
       */
      const { cityFilterFormCityId } = store.getState().forms.cityFilterForm;
      /*
       * getState
       * @info : get number of total result per page configured from state
       */
      const { numberOfResultsPerPageConfigured } =
        store.getState().announcements;

      /*
       * API GET
       * @info : get last announcements
       * @params :
       * per_page                  => default 10 elements per page but change when load more
       * announcement-categories   => selected category id
       * announcement-cities       => selected city id
       * orderby                   => last modified first
       */
      ApiClient.get(
        `/wp/v2/announcements/?per_page=${numberOfResultsPerPageConfigured}${
          categoryFilterFormCategoryId &&
          `&announcement-categories=${categoryFilterFormCategoryId}`
        }${
          cityFilterFormCityId && `&announcement-cities=${cityFilterFormCityId}`
        }&orderby=modified`
      )
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeNumberOfTotalResults
             * @info : store to state number of total results
             */
            store.dispatch(
              storeNumberOfTotalResults(response.headers['x-wp-total'])
            );
            /*
             * storeNumberOfDisplayedResults
             * @info : store to state number of displayed results
             */
            store.dispatch(storeNumberOfDisplayedResults(response.data.length));
            /*
             * storeLastAnnouncementsList
             * @info : store last announcements list
             */
            store.dispatch(storeLastAnnouncementsList(response.data));
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {})
        /*
         * FINALLY
         * @info :
         * loadEnd         => stop loading
         * scrollToElement => scroll to the bottom of the page
         */
        .finally(() => {
          setTimeout(() => {
            store.dispatch(loadEnd('isLoadingMore'));
          }, 300);
          scrollToElement('#oservice-footer', 'smooth');
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_MY_ANNOUNCEMENTS_LIST: {
      /*
       * API GET
       * @info : get my announcements
       * @params :
       * per_page                  => 1000 elements per page
       * author                    => filter by author id
       * orderby                   => last modified first
       */
      ApiClient.get(
        `/wp/v2/announcements/?per_page=1000&author=${connectedUserId}&orderby=modified`
      )
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeMyAnnouncementsList
             * @info : store my announcements list into state
             */
            store.dispatch(storeMyAnnouncementsList(response.data));
          }
        })
        /*
         * ERRORS
         */
        .catch(() => {})
        /*
         * FINALLY
         * @info : loadEnd => stop loading
         */
        .finally(() => {
          setTimeout(() => {
            store.dispatch(loadEnd('isLoading'));
          }, 300);
        });
      break;
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    case GET_ANNOUNCEMENT_DETAILS_USING_URL_SLUG: {
      /*
       * getState
       * @info : get urlSlug (announcement id) from state
       */
      const { urlSlug } = store.getState().utils;

      /*
       * API GET
       * @info : get announcement details with page url
       * @params :
       * urlSlug => announcement id
       * loadEnd => stop loading
       */
      ApiClient.get(`/wp/v2/announcements/${urlSlug}`)
        .then((response) => {
          if (response.status === 200) {
            /*
             * storeAnnouncementDetails
             * @info : store announcement details into state
             */
            store.dispatch(storeAnnouncementDetails(response.data));
            setTimeout(() => {
              store.dispatch(loadEnd('isLoading'));
            }, 300);
          }
        })
        /*
         * ERRORS
         * @info : redirect to home page
         */
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
    case GET_ANNOUNCEMENT_DETAILS_TO_UPDATE: {
      /*
       * getState
       * @info : get urlSlug (announcement id) from state
       */
      const { urlSlug } = store.getState().utils;

      /*
       * API GET
       * @info : get announcement details for update
       * @params : urlSlug => announcement id
       */
      ApiClient.get(`/wp/v2/announcements/${urlSlug}`)
        .then((response) => {
          if (response.status === 200) {
            /*
             * If I'm not the author of this announcement, I can't update it redirect me to home
             */
            if (response.data.author !== parseInt(connectedUserId, 10)) {
              window.location = '/';
            } else {
              /*
               * storeAnnouncementDetailsToUpdate
               * @info : if I'm the author I can update it
               * store announcement details into state for update it
               */
              store.dispatch(storeAnnouncementDetailsToUpdate(response.data));
              setTimeout(() => {
                store.dispatch(loadEnd('isLoading'));
              }, 300);
            }
          }
        })
        /*
         * ERRORS
         * @info : redirect to home page
         */
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
    case DELETE_ANNOUNCEMENT: {
      /*
       * getState
       * @info : get selected element id to delete it
       */
      const { selectedElementId } = store.getState().alerts;
      /*
       * closePopUp
       * @info : close information box after delete
       */
      store.dispatch(closePopUp());
      /*
       * loadStart
       * @info : start loading
       */
      store.dispatch(loadStart('isLoading'));

      /*
       * API DELETE
       * @info : delete an announcement
       * @params :
       * selectedElementId  => announcement to delete id
       * force=true         => completely delete an announcement (not only put it in trash)
       */
      ApiClientUserToken.delete(
        `/wp/v2/announcements/${selectedElementId}/?force=true`
      ).then((announcementDeleteResponse) => {
        if (announcementDeleteResponse.status === 200) {
          /*
           * API GET
           * @info : get my announcement list after delete (update list)
           * @params :
           * per_page           => 1000 elements per page
           * author             => sort results by author
           * connectedUserId    => connected user id, this is the author id we need
           */
          ApiClient.get(
            `/wp/v2/announcements/?per_page=1000&author=${connectedUserId}`
          )
            .then((response) => {
              if (response.status === 200) {
                /*
                 * storeMyNewAnnouncementsListAfterDelete
                 * @info : store my new announcement list into state
                 */
                store.dispatch(
                  storeMyNewAnnouncementsListAfterDelete(response.data)
                );
              }
            })
            /*
             * ERRORS
             */
            .catch(() => {})
            /*
             * FINALLY
             * @info : loadEnd => stop loading
             */
            .finally(() => {
              setTimeout(() => {
                store.dispatch(loadEnd('isLoading'));
              }, 300);
            });
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
export default announcements;
