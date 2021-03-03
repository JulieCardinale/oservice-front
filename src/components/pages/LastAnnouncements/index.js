/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import mainMessages from 'datas/mainMessages';
import Loader from 'components/reusables/images/Loader';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import Select from 'containers/Select';
import AnnouncementsList from 'components/reusables/announcements/AnnouncementsList';
import LoadMoreButton from 'containers/LoadMoreButton';
import PropTypes from 'prop-types';

/* * * * * * * * * * * *
 * * Last Announcements *
 *
 * @description : last announcements page
 *
 * @props --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * - loadStart (func)                         => start loading
 * - resetState (func)                        => reset category & city filter forms
 * - getCategoriesList (func)                 => get categories list
 * - getDatabaseCitiesList (func)             => get database cities list
 * - configureNumberOfResultsPerPage (func)   => reset per page
 * - getLastAnnouncementsList (func)          => get last announcement List
 * - isLoading (bool)                         => If data loading isn't complete, display Loader component, when data loading is complete, page content is displayed, Loader component is hidden.
 * - categoriesList (func)                    => categories list
 * - citiesList                               => cities list
 * - lastAnnouncementsList                    => last announcements list
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * @selector -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const LastAnnouncements = ({
  loadStart,
  resetState,
  getCategoriesList,
  getDatabaseCitiesList,
  configureNumberOfResultsPerPage,
  getLastAnnouncementsList,
  isLoading,
  categoriesList,
  citiesList,
  lastAnnouncementsList,
}) => {
  /* * * * * * * *
   * * useEffects *
   */
  useEffect(() => loadStart('isLoading'), []);
  useEffect(() => resetState('categoryFilterForm'), []);
  useEffect(() => resetState('cityFilterForm'), []);
  useEffect(() => getCategoriesList(), []);
  useEffect(() => getDatabaseCitiesList(), []);
  useEffect(() => configureNumberOfResultsPerPage(), []);
  useEffect(() => getLastAnnouncementsList(), []);
  useEffect(() => {
    if (isLoading) {
      mainFlex('center');
    } else {
      mainFlex('normal');
    }
  }, [isLoading]);

  /* * * * *
   * * JSX *
   */
  return (
    <div className="oservice-last-announcements">
      {/* LAST ANNOUNCEMENTS - LOADER */}
      <Loader active={isLoading} />
      {!isLoading && lastAnnouncementsList[0].id && (
        <>
          {/* LAST ANNOUNCEMENTS - MAIN MESSAGE */}
          <PageMainMessage
            line01={mainMessages.lastAnnouncements.line01}
            line02={mainMessages.lastAnnouncements.line02}
            classNameLine01="oservice-text-main-message--line01"
            classNameLine02="oservice-text-main-message--line02"
          />

          <div className="oservice-last-announcements__filters">
            {/* LAST ANNOUNCEMENTS - CATEGORY FILTER */}
            <Select
              selectType="filter"
              formName="categoryFilterForm"
              idKey="categoryFilterFormCategoryId"
              nameKey="categoryFilterFormCategoryName"
              label="Filtrer par catégorie"
              optionsList={categoriesList}
              togglerKey="areVisibleOptionsInCategoryFilterForm"
            />

            {/* LAST ANNOUNCEMENTS - CITY FILTER */}
            <Select
              selectType="filter"
              formName="cityFilterForm"
              idKey="cityFilterFormCityId"
              nameKey="cityFilterFormCityName"
              label="Filtrer par ville"
              optionsList={citiesList}
              togglerKey="areVisibleOptionsInCityFilterForm"
            />
          </div>

          {/* LAST ANNOUNCEMENTS - LIST */}
          <AnnouncementsList
            className="oservice-announcements-list"
            announcementsList={lastAnnouncementsList}
            linkToDetailPage
            announcementOptions={false}
          />

          {/* LAST ANNOUNCEMENTS - LOAD MORE */}
          <LoadMoreButton />
        </>
      )}
    </div>
  );
};

/* PropTypes */
LastAnnouncements.propTypes = {
  loadStart: PropTypes.func,
  resetState: PropTypes.func,
  getCategoriesList: PropTypes.func,
  getDatabaseCitiesList: PropTypes.func,
  configureNumberOfResultsPerPage: PropTypes.func,
  getLastAnnouncementsList: PropTypes.func,
  isLoading: PropTypes.bool,
  categoriesList: PropTypes.arrayOf(PropTypes.object),
  citiesList: PropTypes.arrayOf(PropTypes.object),
  lastAnnouncementsList: PropTypes.arrayOf(PropTypes.object),
};

/* Export Component */
export default LastAnnouncements;
