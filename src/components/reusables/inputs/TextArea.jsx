/* Import(s) */
import { cleanInput } from 'selectors';
import InputError from 'components/reusables/inputs/InputError';
import InputInfo from 'components/reusables/inputs/InputInfo';
import PropTypes from 'prop-types';

/* * * * * * * * * * * *
 * * TextArea component *
 *
 * @description : A component to display a text like a paragraph.
 *
 * @props -----------------------------------------------------------------------------------
 * - formKey (str)                             => textArea form key
 * - label (str)                               => textArea label
 * - className (str)                           => textArea custom className
 * - maxLength (number)                        => textArea max length
 * - rows (number)                             => textArea rows
 * - cols (number)                             => textArea cols
 * - placeholder (str)                         => textArea placeholder
 * - value (str)                               => textArea value
 * - formFieldOnChange (func)                  => change state with textArea value
 * - errorMessage (str)                        => textArea error message value
 * - information (str)                         => textArea information message value
 * ------------------------------------------------------------------------------------------
 *
 * @selector --------------------------------------------------------------------------------
 * - cleanInput => Selector against code injections
 * ------------------------------------------------------------------------------------------
 *
 */
const TextArea = ({
  formKey,
  label,
  className,
  maxLength,
  rows,
  cols,
  placeholder,
  value,
  formFieldOnChange,
  errorMessage,
  information,
}) => (
  <div className={className}>
    {/* TEXT AREA - LABEL */}
    <label className={`${className}__label`} htmlFor={formKey}>
      {' '}
      {label}{' '}
    </label>

    {/* TEXT AREA - TEXT AREA */}
    <textarea
      className={`${className}__input`}
      name={formKey}
      id={formKey}
      maxLength={maxLength}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      value={cleanInput(value)}
      onChange={(e) => formFieldOnChange(e.target.value)}
    />

    {/* TEXT AREA - ERROR */}
    <InputError errorMessage={errorMessage} />
    {/* TEXT AREA - INFORMATION */}
    <InputInfo information={information} />
  </div>
);

/* PropTypes validation */
TextArea.propTypes = {
  formKey: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  cols: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  formFieldOnChange: PropTypes.func,
  errorMessage: PropTypes.string,
  information: PropTypes.string,
};

/* Export component */
export default TextArea;
