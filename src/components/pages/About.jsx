/* eslint-disable react/no-array-index-key */
/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import PageMainMessage from 'components/reusables/texts/PageMainMessage';
import mainMessages from 'datas/mainMessages';
import TitleSub from 'components/reusables/texts/TitleSub';
import Text from 'components/reusables/texts/Text';
import about from 'datas/about';

/* * * * * *
 * * About *
 *
 * @description : About component
 *
 * @selector -------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------
 *
 */
const About = () => {
  /* * * * * * * *
   * * useEffect *
   */
  useEffect(() => mainFlex('normal'), []);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* ABOUT - PAGE MAIN MESSAGE */}
      <PageMainMessage
        line01={mainMessages.about.line01}
        line02={mainMessages.about.line02}
        classNameLine01="oservice-text-main-message--line01"
        classNameLine02="oservice-text-main-message--line02"
      />

      {/* ABOUT - PRESENTATION */}
      <TitleSub
        content="Le site O'Service"
        className="oservice-title-sub-basic"
      />
      <Text className="oservice-text-basic" content={about.presentation} />
      <Text className="oservice-text-basic" content={about.team} />

      {/* ABOUT - GOALS */}
      <TitleSub content="Nos Objectifs" className="oservice-title-sub-basic" />
      <Text className="oservice-text-basic" content={about.goals} />

      {/* ABOUT - SOON */}
      <TitleSub
        content="À venir sur O'Service"
        className="oservice-title-sub-basic"
      />
      {about.soon.map((item, index) => (
        <li className="oservice-text-list" key={index}>
          {item}
        </li>
      ))}
    </>
  );
};

/* Export component */
export default About;
