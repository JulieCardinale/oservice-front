/* Import(s) */
import { cleanInput } from 'selectors';
import PropTypes from 'prop-types';
import InputInfo from 'components/reusables/inputs/InputInfo';
import InputError from 'components/reusables/inputs/InputError';
import Button from 'components/reusables/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

/* * * * * *
 * * Input *
 *
 * @description : Input component
 *
 * @props -------------------------------------------------------------------------------
 * - className (str)                           => input custom className
 * - formName (str)                            => input form name
 * - linkedFieldName (str)                     => input linked with
 * - formKey (str)                             => input form key
 * - label (str)                               => input label
 * - type (str)                                => input type
 * - value (str)                               => input value
 * - dateMax (number)                          => input date max (date type)
 * - maxLength (number)                        => input max length
 * - placeholder (str)                         => input placeholder
 * - disabled (bool)                           => is input disabled ?
 * - formFieldOnChange (func)                  => change state with input value
 * - getGeoApiCitiesListUsingPostcode (func)   => get cities list from geo api
 * - toggleItem (func)                         => switch password icon
 * - isVisiblePassword (bool)                  => is visible password or not ?
 * - errorMessage (str)                        => input error message value
 * - information (str)                         => input information message value
 * ---------------------------------------------------------------------------------------
 *
 * @selector -----------------------------------------------------------------------------
 * - cleanInput => Selector against code injections
 * ---------------------------------------------------------------------------------------
 *
 */
const Input = ({
  className,
  formName,
  linkedFieldName,
  formKey,
  label,
  type,
  value,
  dateMax,
  maxLength,
  placeholder,
  disabled,
  formFieldOnChange,
  getGeoApiCitiesListUsingPostcode,
  toggleItem,
  isVisiblePassword,
  errorMessage,
  information,
}) => (
  <div className={className}>
    {/* INPUT - LABEL */}
    {label && (
      <label className={`${className}__label`} htmlFor={formKey}>
        {' '}
        {label}{' '}
      </label>
    )}
    <div className={`${className}__input-password-icon`}>
      {/* INPUT - INPUT */}
      <input
        autoComplete=""
        className={`${className}__input`}
        type={type}
        name={formKey}
        id={formKey}
        value={cleanInput(value)}
        max={dateMax}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          formFieldOnChange(e.target.value);
          if (
            formKey === 'announcementFormPostcode' ||
            formKey === 'userFormPostCode'
          ) {
            getGeoApiCitiesListUsingPostcode(
              e.target.value,
              formName,
              linkedFieldName
            );
          }
        }}
      />

      {/* INPUT - PASSWORD ICON */}
      <Button
        aria="Bouton pour voir ou masquer le mot de passe"
        onClick={() => toggleItem('isVisiblePassword')}
        className={`${className}__password-icon`}
        icon={
          <FontAwesomeIcon
            icon={isVisiblePassword ? faEyeSlash : faEye}
            style={
              isVisiblePassword ? { fontSize: '27px' } : { fontSize: '30px' }
            }
          />
        }
      />
    </div>
    {/* INPUT - ERRORS */}
    <InputError errorMessage={errorMessage} />
    {/* INPUT - INFORMATION */}
    {<InputInfo information={information} />}
  </div>
);

/* PropTypes */
Input.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string,
  linkedFieldName: PropTypes.string,
  formKey: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  dateMax: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  formFieldOnChange: PropTypes.func,
  getGeoApiCitiesListUsingPostcode: PropTypes.func,
  toggleItem: PropTypes.func,
  isVisiblePassword: PropTypes.bool,
  errorMessage: PropTypes.string,
  information: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  linkedFieldName: '',
  formKey: '',
  label: '',
  errorMessage: '',
  information: '',
  maxLength: 300,
  dateMax: '2021-02-16',
  disabled: false,
};

/* Export component */
export default Input;
