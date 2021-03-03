/* * * * * * * * *
 * * Toggle item *
 *
 * @description : change state property boolean value
 *
 * @params ----------------------------------------------------------------------------------
 * - togglerKey => property to change
 * ------------------------------------------------------------------------------------------
 *
 */
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const toggleItem = (togglerKey) => ({
  type: TOGGLE_ITEM,
  togglerKey,
});
