/* Import(s) */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* * * * * * * * * *
 * * Image component *
 *
 * @description : A component to display an image. This image can be a link to
 * an external site, or a link to another internal page.
 *
 * @props -------------------------------------------------------------------------
 * className (str)     => Image custom className
 * src (str)           => Image source
 * alt (str)           => Image description
 * linkTo (str)        => Image external link
 * linkToPage (str)    => Image internal link, link to a page (router)
 * --------------------------------------------------------------------------------
 */
const Image = ({ className, src, alt, linkTo, linkToPage }) => (
  <>
    {
      /* IMAGE - WITH NO LINK */
      linkTo === 'imageHasNoExternalLink' &&
        linkToPage === 'imageHasNoInternalLink' && (
          <img className={className} src={src} alt={alt} />
        )
    }

    {
      /* IMAGE - WITH EXTERNAL LINK */
      linkTo !== 'imageHasNoExternalLink' &&
        linkToPage === 'imageHasNoInternalLink' && (
          <a href={linkTo} target="_blank" rel="noreferrer">
            <img className={className} src={src} alt={alt} />
          </a>
        )
    }

    {
      /* IMAGE - WITH INTERNAL LINK, TO ANOTHER PAGE */
      linkToPage !== 'imageHasNoInternalLink' && (
        <Link to={linkToPage}>
          <img className={className} src={src} alt={alt} />
        </Link>
      )
    }
  </>
);

/* PropTypes validation */
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.bool]),
  alt: PropTypes.string,
  linkTo: PropTypes.string,
  linkToPage: PropTypes.string,
};

Image.defaultProps = {
  linkTo: 'imageHasNoExternalLink',
  linkToPage: 'imageHasNoInternalLink',
};

/* Export component */
export default Image;
