/* eslint-disable react/no-array-index-key */
/* Import(s) */
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import InputError from 'components/reusables/inputs/InputError';
import InputInfo from 'components/reusables/inputs/InputInfo';

/* * * * * *
 * * Select *
 *
 * @description : Input type select
 *
 * @props --------------------------------------------------------------------------------------
 * - selectType (str)                         => select can be of type filter or not
 * - idKey (str)                              => select id key
 * - label (str)                              => select label
 * - toggleItem (func)                        => On click display or not options list
 * - togglerKey (str)                         => state property to 'toggle'
 * - announcementOptions (bool)               => are visible option or not ?
 * - errorMessage (str)                       => error message value
 * - information  (str)                       => information message value
 * - optionsList                              => select option list
 * - formFieldOnChange (func)                 => store to state user choice
 * - nameKey                                  => select name form key
 * - configureNumberOfResultsPerPage (func)   => reset per page
 * - getLastAnnouncementsList (func)          => refresh last announcements list
 * - formName (str)                           => form name
 * - departmentKey (str)                      => department form key
 * - createCityTerm (func)                    => add city in database
 * ---------------------------------------------------------------------------------------------
 *
 * * @use ---------------------------------------------------------------------------------------------------
 * - classNames()   => to display message right or left
 * https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const Select = ({
  selectType,
  idKey,
  label,
  toggleItem,
  togglerKey,
  selectedItem,
  announcementOptions,
  errorMessage,
  information,
  optionsList,
  formFieldOnChange,
  nameKey,
  configureNumberOfResultsPerPage,
  getLastAnnouncementsList,
  formName,
  departmentKey,
  createCityTerm,
}) => {
  /* * * * * * * *
   * * classNames *
   */
  const optionsListClassName = classNames('oservice-select__options-list', {
    'oservice-select__options-list--visible': announcementOptions,
  });

  /* * * * *
   * * JSX *
   */
  return (
    <div
      className="oservice-select"
      style={{ width: selectType === 'filter' ? '35%' : '100%' }}
    >
      {/* Fake input, only to focus in case of errors */}
      <input type="text" id={idKey} className="fake-input" />

      {/* SELECT - LABEL */}
      <div className="oservice-select__label">{label}</div>

      {/* SELECT - SELECT */}
      <div
        onClick={() => toggleItem(togglerKey)}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
        className="oservice-select__select"
        id="oservice-select__select"
      >
        {/* SELECT - NAME */}
        <div>{selectedItem}</div>

        {/* SELECT - ICON */}
        <FontAwesomeIcon icon={announcementOptions ? faAngleUp : faAngleDown} />
      </div>

      {/* SELECT - ERROR */}
      <InputError errorMessage={errorMessage} />

      {/* SELECT - INFO */}
      <InputInfo information={information} />

      {/* SELECT - OPTIONS LIST */}
      <div
        className={optionsListClassName}
        id="options-list"
        style={
          optionsList &&
          optionsList.filter((opt) => opt.count !== 0).length >= 6
            ? { height: '300px' }
            : { height: 'auto' }
        }
      >
        {/* SELECT - OPTION 'TOUTES' */}
        {selectType === 'filter' ? (
          <div
            className="oservice-select__option"
            onClick={() => {
              formFieldOnChange('', idKey);
              formFieldOnChange('Toutes', nameKey);
              configureNumberOfResultsPerPage();
              getLastAnnouncementsList();
              toggleItem(togglerKey);
            }}
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
          >
            Toutes
          </div>
        ) : (
          ''
        )}

        {/* SELECT - OPTION 'OTHERS' */}
        {optionsList &&
          optionsList.map((option, index) => (
            <div
              onClick={() => {
                formFieldOnChange(option.id, idKey);
                formFieldOnChange(
                  (option.name && option.name) || (option.nom && option.nom),
                  nameKey
                );
                toggleItem(togglerKey);
                if (formName === 'announcementForm') {
                  formFieldOnChange(option.codeDepartement, departmentKey);
                  createCityTerm();
                }
                if (selectType === 'filter') {
                  configureNumberOfResultsPerPage();
                  getLastAnnouncementsList();
                }
              }}
              onKeyPress={() => {}}
              role="menuitem"
              tabIndex="0"
              key={index}
              value={option.id && option.id}
              className="oservice-select__option"
              /* if formType is filter don't display options where 'count' === 0 */
              style={
                selectType === 'filter' && option.count === 0
                  ? { display: 'none' }
                  : { display: 'auto' }
              }
            >
              {/*
                if formType is filter don't display option.name + option.count
                or display option.name
                or display option.nom
              */}
              {(selectType === 'filter' &&
                `${option.name} (${option.count})`) ||
                (option.name && option.name) ||
                (option.nom && option.nom)}
            </div>
          ))}
      </div>
    </div>
  );
};

/* PropTypes validation */
Select.propTypes = {
  selectType: PropTypes.string,
  idKey: PropTypes.string,
  label: PropTypes.string,
  toggleItem: PropTypes.func,
  togglerKey: PropTypes.string,
  selectedItem: PropTypes.string,
  announcementOptions: PropTypes.bool,
  errorMessage: PropTypes.string,
  information: PropTypes.string,
  optionsList: PropTypes.arrayOf(PropTypes.object),
  formFieldOnChange: PropTypes.func,
  nameKey: PropTypes.string,
  configureNumberOfResultsPerPage: PropTypes.func,
  getLastAnnouncementsList: PropTypes.func,
  formName: PropTypes.string,
  departmentKey: PropTypes.string,
  createCityTerm: PropTypes.func,
};

/* Export component */
export default Select;
