/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

/* Import(s) */
import announcements from 'middlewares/announcements';
import categories from 'middlewares/categories';
import cities from 'middlewares/cities';
import errors from 'middlewares/errors';
import users from 'middlewares/users';
import messaging from 'middlewares/messaging';

/* * * * * * * * * * * *
 * * combineMiddlewares *
 *
 * @infos : We use multiple middlewares in one file
 *
 */
const combineMiddlewares = [
    announcements,
    categories,
    cities,
    errors,
    messaging,
    users,
];

/* Export */
export default combineMiddlewares;
