/* Import(s) */
import PropTypes from 'prop-types';
import Button from 'components/reusables/Button';
import Image from 'components/reusables/images/Image';
import Text from 'components/reusables/texts/Text';

/* * * * * * * * *
 * * Team Member *
 *
 * @description : O'Service team presentation
 * -
 * @props ------------------------------
 * - src (str)     => image src
 * - alt (str)     => image alt
 * - name (str)    => member name
 * - job (str)     => member job
 * - email (str)   => member email
 * -------------------------------------
 *
 */
const TeamMember = ({ src, alt, name, job, email }) => (
  <div className="oservice-team-member">
    <Image src={src} alt={alt} className="oservice-team-member-image" />
    <Text className="oservice-text-member-name" content={name} />
    <Text className="oservice-text-member-job" content={job} />
    <a href={`mailto:${email}`}>
      <Button
        aria={`Bouton pour contacter ${name}`}
        className="oservice-button-basic"
        text="Contacter"
      />
    </a>
  </div>
);

/* PropTypes validation */
TeamMember.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  email: PropTypes.string,
};

/* Export component */
export default TeamMember;
