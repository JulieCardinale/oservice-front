/* Import(s) */
import Loader from 'components/reusables/images/Loader';
import Button from 'components/reusables/Button';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import mainMessage from 'datas/mainMessages';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * LoadMoreButton *
 *
 * @description : Button to load more announcements, visible only when they are announcements to load,
 * when all announcements are loaded, or when there is no result, a message is displayed.
 *
 * @props ---------------------------------------------------------------------
 * - loadStart (func)                    => start loading
 * - isLoadingMore (bool)                => is loading more active ?
 * - getMoreAnnouncements (func)         => get more announcements
 * - numberOfTotalResults (number)       => number of total results
 * - numberOfDisplayedResults (number)   => number of displayed results
 * ----------------------------------------------------------------------------
 *
 */
const LoadMoreButton = ({
  loadStart,
  isLoadingMore,
  getMoreAnnouncements,
  numberOfTotalResults,
  numberOfDisplayedResults,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleLoadMore = () => {
    getMoreAnnouncements();
    loadStart('isLoadingMore');
  };

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* LOAD MORE BUTTON - LOADER */}
      <Loader active={isLoadingMore} displayBlock />

      {/* LOAD MORE BUTTON - BUTTON */}
      {numberOfTotalResults > numberOfDisplayedResults && (
        <Button
          className="oservice-button-basic"
          text="Charger plus d'annonces"
          onClick={handleLoadMore}
          aria="Bouton pour changer plus d'annonces"
        />
      )}

      {/* LOAD MORE BUTTON - MESSAGE */}
      {numberOfTotalResults <= numberOfDisplayedResults && (
        <PageMainMessage
          line01={
            numberOfTotalResults === '0'
              ? mainMessage.loadMore.line01
              : mainMessage.loadMore.line01alt
          }
          classNameLine01="oservice-text-main-message--line01"
        />
      )}
    </>
  );
};

/* PropTypes */
LoadMoreButton.propTypes = {
  loadStart: PropTypes.func,
  isLoadingMore: PropTypes.bool,
  getMoreAnnouncements: PropTypes.func,
  numberOfTotalResults: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  numberOfDisplayedResults: PropTypes.number,
};

/* Export Component */
export default LoadMoreButton;
