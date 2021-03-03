/* Import(s) */
import PropTypes from 'prop-types';
import InputError from 'components/reusables/inputs/InputError';

/*
 * RadioGroup component
 */
const RadioGroup = ({
  title,
  choices,
  radioGroupKey,
  value,
  isDisabled,
  formFieldOnChange,
  errorMessage,
}) => (
  <div className="oservice-radio-group">
    <input type="text" id="radioGroup" className="fake-input" />
    <div className="oservice-radio-group__title">{title}</div>
    <div className="oservice-radio-group__choices">
      {choices.map((choice) => (
        <div key={choice && choice}>
          <div className="oservice-radio-group__choice">
            <input
              className="oservice-radio-group__input"
              type="radio"
              name={radioGroupKey}
              id={choice}
              value={choice}
              checked={choice === value}
              disabled={isDisabled}
              onChange={(e) => formFieldOnChange(e.target.value)}
            />
            <label className="oservice-radio-group__label" htmlFor={choice}>
              {' '}
              {choice}{' '}
            </label>
          </div>
        </div>
      ))}
    </div>
    <InputError errorMessage={errorMessage} />
  </div>
);

/* PropTypes validation */
RadioGroup.propTypes = {
  title: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.string),
  radioGroupKey: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  formFieldOnChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

/* Export */
export default RadioGroup;
