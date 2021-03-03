/* Import */
import { TOGGLE_ITEM } from 'actions/togglers';

/* * * * * * * * * * * * * * *
 * * Togglers Initial state *
 *
 * @description : All togglers reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - isOpenHeaderMobile (bool)                      => is open or not header toolbar mobile
 * - areVisibleOptionsInSelectCategoriesItem (bool) => are visible option in select category item
 * - areVisibleOptionsInSelectCitiesItem (bool)     => are visible option in select cities item
 * - areVisibleOptionsInCategoryFilterForm (bool)   => are visible or not option in category filter form item
 * - areVisibleOptionsInCityFilterForm (bool)       => are visible or not option in city filter form item
 * - isVisibleContactForm (bool)                    => is visible or not contact form
 * - isVisibleConversation (bool)                   => is visible or not conversation in messaging page
 * - isVisiblePassword (bool)                       => is visible or not password in form
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  isOpenHeaderMobile: false,
  areVisibleOptionsInSelectCategoriesItem: false,
  areVisibleOptionsInSelectCitiesItem: false,
  areVisibleOptionsInCategoryFilterForm: false,
  areVisibleOptionsInCityFilterForm: false,
  isVisibleContactForm: false,
  isVisibleConversation: false,
  isVisiblePassword: false,
};

/* * * * * * * * * * *
 * * Togglers reducer *
 *
 * @description : All togglers reducer actions
 *
 * @cases --------------------------------------------------------
 * - TOOGLE ITEM => switch state value true/false.
 * ----------------------------------------------------------------
 *
 */
const togglers = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ITEM:
      return {
        ...state,
        [action.togglerKey]: !state[action.togglerKey],
      };
    default:
      return state;
  }
};

/* Export */
export default togglers;
