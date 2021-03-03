/* Import(s) */
import PropTypes from 'prop-types';
import InputError from 'components/reusables/inputs/InputError';
import InputInfo from 'components/reusables/inputs/InputInfo';

/* * * * * * * * * *
 * * PictureLoader *
 *
 * @description : Picture loader
 *
 * @props --------------------------------------------------------------------------------------
 * - formFieldOnChange (str)    => change state input value
 * - previewKey (str)           => preview form key
 * - dataKey (str)              => data form key
 * - picturePreview (str)       => picture preview url
 * - errorMessage (str)         => input error message
 * - information (str)          => input information message
 * ---------------------------------------------------------------------------------------------
 *
 * @use --------------------------------------------------------------------------------------
 * - FileReader()               => https://developer.mozilla.org/fr/docs/Web/API/FileReader
 * - readAsDataURL()            => https://developer.mozilla.org/fr/docs/Web/API/FileReader/readAsDataURL
 * - load event                 => https://developer.mozilla.org/fr/docs/Web/Events/load
 * - FormData()                 => https://developer.mozilla.org/fr/docs/Web/API/FormData/FormData
 * - FormData.append()          => https://developer.mozilla.org/fr/docs/Web/API/FormData/append
 * - information (str)          => input information message
 * ---------------------------------------------------------------------------------------------
 *
 */
const PictureLoader = ({
  formFieldOnChange,
  previewKey,
  dataKey,
  picturePreview,
  errorMessage,
  information,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handlePictureOnChange = () => {
    /* UPLOADED PICTURE */
    const uploadedPicture = document.querySelector('#pictureLoader').files[0];

    /* STORE UPLOADED PICTURE PREVIEW */
    const uploadedPictureReader = new FileReader();
    uploadedPictureReader.readAsDataURL(uploadedPicture);
    uploadedPictureReader.addEventListener('load', () => {
      formFieldOnChange(uploadedPictureReader.result, previewKey);
    });

    /* STORE UPLOADED PICTURE DATAS TO STATE */
    const uploadedPictureFormData = new FormData();
    uploadedPictureFormData.append('file', uploadedPicture);
    formFieldOnChange(uploadedPictureFormData, dataKey);
  };

  /* * * * * * * * * * * * *
   * * conditionnal styles *
   */
  const backgroundImage =
    picturePreview === '' ? 'inerit' : `url('${picturePreview}`;

  /* * * * *
   * * JSX *
   */
  return (
    <>
      <div className="oservice-picture-loader" style={{ backgroundImage }}>
        {/* PICTURE LOADER - INPUT */}
        <input
          type="file"
          id="pictureLoader"
          accept="image/png, image/jpeg"
          onChange={handlePictureOnChange}
        />
      </div>

      {/* PICTURE LOADER - ERROR */}
      <InputError errorMessage={errorMessage} />

      {/* PICTURE LOADER - INFORMATION */}
      <InputInfo information={information} />
    </>
  );
};

/* PropTypes validation */
PictureLoader.propTypes = {
  formFieldOnChange: PropTypes.func,
  previewKey: PropTypes.string,
  dataKey: PropTypes.string,
  picturePreview: PropTypes.string,
  errorMessage: PropTypes.string,
  information: PropTypes.string,
};

/* Export component */
export default PictureLoader;
