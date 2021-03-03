/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import TeamMember from 'components/pages/Contact/TeamMember';
import mainMessages from 'datas/mainMessages';
import team from 'datas/team';

/* * * * * * *
 * * Contact *
 *
 * @description : O'Service team presentation
 *
 * @selector -------------------------------------------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
const Contact = () => {
  /* * * * * * * *
   * * useEffect *
   */
  useEffect(() => mainFlex('normal'), []);

  return (
    <>
      {/* CONTACT - MAIN MESSAGE */}
      <PageMainMessage
        line01={mainMessages.contact.line01}
        line02={mainMessages.contact.line02}
        classNameLine01="oservice-text-main-message--line01"
        classNameLine02="oservice-text-main-message--line02"
      />

      {/* CONTACT - MEMBERS GROUP 01 */}
      <div className="oservice-contact-members">
        {team.membersGroup01.map((member) => (
          <TeamMember
            key={member.id}
            src={member.src}
            alt={`Photo de ${member.name}`}
            name={member.name}
            job={member.job}
            email={member.mail}
          />
        ))}
      </div>

      {/* CONTACT - MEMBERS GROUP 02 */}
      <div className="oservice-contact-members">
        {team.membersGroup02.map((member) => (
          <TeamMember
            key={member.id}
            src={member.src}
            alt={`Photo de ${member.name}`}
            name={member.name}
            job={member.job}
            email={member.mail}
          />
        ))}
      </div>
    </>
  );
};

/* Export component */
export default Contact;
