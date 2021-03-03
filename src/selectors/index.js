/* Import : DOMPurify */
import DOMPurify from 'dompurify';

/* Import : HE HTML entity encoder/decoder */
import he from 'he';

/* Import : jwtDecode token decoder */
import jwtDecode from 'jwt-decode';

/* ------------- USEFULL FUNCTIONS --------------- */

/*
 * Format date explicit
 * @params : year, month, day
 * return : Week Day, Day, Month, Year
 * exemple : lun. 7 septembre 2020
 */
export const formatDateExplicitWDDMY = (year, month, day) => {
  const correctMonth = month - 1;
  const event = new Date(Date.UTC(year, correctMonth, day));
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return event.toLocaleDateString('fr', options);
};

/*
 * Format date numeric
 * @params : year, month, day
 * return : Day, Month, Year
 * exemple : 15/10/1989
 */
export const formatDateNumericDMY = (year, month, day) => {
  const correctMonth = month - 1;
  const event = new Date(Date.UTC(year, correctMonth, day));
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return event.toLocaleDateString('fr', options);
};

/*
 * Get current date
 * return : Year, Month, Day
 * exemple : 1989/10/15
 */
export const getCurrentDateYMD = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const getDate = date.getDate();
  const day = getDate < 10 ? `0${getDate}` : getDate;

  return `${year}-${month}-${day}`;
};

/*
 * set registration limit age
 * arg : limit age
 * return : limit birthdate
 * exemple : limit age 18 on 2020-10-15, limit birthdate 2002-10-15
 */
export const setRegistrationLimitAge = (limitAge) => {
  const date = new Date();
  const year = date.getFullYear() - limitAge;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

/*
 * CleanHTML
 * @params : "dirty HTML"
 * return : clean HTML
 */
export const cleanHTML = (dirtyHTML) => ({
  __html: DOMPurify.sanitize(dirtyHTML, { ALLOWED_TAGS: [] }),
});

/*
 * CleanInput
 * @params : "dirtyInputValue"
 * return : clean input value
 */
export const cleanInput = (dirtyInputValue) =>
  he.decode(DOMPurify.sanitize(dirtyInputValue, { ALLOWED_TAGS: [] }));

/*
 * Convert string to an array of words
 * @params : string
 * return : Each word of the string will be an index of the array
 */
export const convertStringToArray = (str) => str.split(' ');

/*
 * Capitalize first letter of each word
 * @params : string
 * return : Each word of the string will have first letter capitalized
 */
export const capitalizeFirstLetters = (str) =>
  str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

/*
 * Capitalize first letter
 * @params : string
 * return : Only the first word of the string will have it first letter capitalized
 */
export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/*
 * Split string to array and keep only the 13 first words to make an exerpt
 * @params : string
 * return : Only the 13 first words + "..."
 */
export const makeExcerpt = (str) => `${str.split(' ', 13).join(' ')}...`;

/*
 * Dynamic document title configuration
 * @params : webSiteName, pageTitle
 *
 */
export const OserviceDocumentTitle = (webSiteName, pageTitle) =>
  pageTitle === 'Erreur 404'
    ? `${webSiteName} - Page non trouvée`
    : `${webSiteName} - ${pageTitle}`;

/*
 * Scroll to an element
 * @params : Element selector, behavior (auto, instant or smooth)
 */
export const scrollToElement = (selector, scrollBehavior) =>
  document
    .querySelector(`${selector}`)
    .scrollIntoView({ behavior: scrollBehavior });

/*
 * Focus to a field
 * @params : Element selector
 */
export const focusToField = (selector) =>
  document.querySelector(`${selector}`).focus();

/*
 * passwordSecurityCheck
 * @params : password
 * Minimum eight characters, at least one letter, one number and one special character.
 */
export const passwordSecurityCheck = (password) =>
  password.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );

/*
 * Decode user token
 * @params : token, userId, iss
 * https://github.com/auth0/jwt-decode
 */
const currentTimestamp = Math.floor(Date.now() / 1000);
export const decode = (token, userId, issuer) => {
  const decoded = jwtDecode(token);
  if (
    decoded.iss === issuer &&
    decoded.exp > currentTimestamp &&
    parseInt(decoded.data.user.id, 10) === parseInt(userId, 10)
  ) {
    return true;
  }
  return false;
};

/*
 * Change main flex mode
 * @params : flexMode
 */
export const mainFlex = (flexMode) => {
  const main = document.querySelector('#main');
  if (flexMode === 'center') {
    main.classList.add('main-flex-center');
  } else {
    main.classList.remove('main-flex-center');
  }
};
