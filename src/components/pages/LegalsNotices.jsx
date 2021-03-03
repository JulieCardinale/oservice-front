import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import TitleSub from 'components/reusables/texts/TitleSub';
import Text from 'components/reusables/texts/Text';
import credits from 'datas/credits';

/* * * * * * * * * *
 * * Legals Notices *
 *
 * @description : legal notice page
 *
 * @selector -------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------
 *
 */
const LegalsNotices = () => {
  /* * * * * * * *
   * * useEffect *
   */
  useEffect(() => mainFlex('normal'), []);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      <TitleSub
        content="Informations générales"
        className="oservice-title-sub-basic"
      />
      <Text
        className="oservice-text-basic"
        content="Conformément aux dispositions des articles 6-III et 19 de la loi n°
      2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique,
      nous vous informons que le site Internet O’Service est un site
      édité par O’Service, association type loi 1901. Les locaux sont situés
      101 Rue Haut Service, 93400 ServiceVille. Le directeur de publication
      est Owen, président de O’Service. Les utilisateurs du site
      peuvent contacter l'administrateur à l'adresse contact@oservice.com."
      />
      <TitleSub
        content="Conditions d'utilisation"
        className="oservice-title-sub-basic"
      />
      <Text
        className="oservice-text-basic"
        content="L'utilisateur reconnaît avoir pris connaissance et s'engage à respecter
        les conditions d'utilisation figurant ci-dessous. L'utilisateur du site
        internet O’Service reconnaît être 
        majeur, disposer de la capacité juridique, de la compétence et des
        moyens nécessaires pour accéder et utiliser ce site. L'utilisateur du
        site reconnaît avoir vérifié que la configuration informatique utilisée
        ne contient aucun virus ou contenu susceptible de menacer la sécurité du
        site et qu'elle est en parfait état de fonctionnement."
      />
      <TitleSub
        content="Mise en garde sur les informations"
        className="oservice-title-sub-basic"
      />
      <Text
        className="oservice-text-basic"
        content="O’Service met tout en œuvre pour offrir aux utilisateurs des
        informations et/ou outils disponibles et vérifiés mais ne saurait être
        tenu pour responsable des erreurs, d'une absence de disponibilité des
        informations et/ou de la présence d'un virus sur son site. Les
        informations fournies par O’Service et ses éventuels partenaires le sont
        à titre indicatif. Ceux-ci ne sauraient garantir l'exactitude, la
        complétude, l'actualité des informations diffusées par le site. Ces
        informations ne sauraient dispenser l'utilisateur d'une analyse
        complémentaire et personnalisée. En conséquence, l'utilisateur reconnaît
        utiliser ces informations sous sa responsabilité exclusive. Pour des
        raisons de maintenance, O’Service pourra interrompre l'accès de son site
        et s'efforcera d'en avertir préalablement les utilisateurs dès lors que
        cela est possible."
      />
      <TitleSub
        content="Droits de propriété"
        className="oservice-title-sub-basic"
      />
      <Text
        className="oservice-text-basic"
        content="La structure générale, ainsi que les textes, images animées ou non,
        sons, savoir-faire..., et tout autre élément composant le site y compris
        la technologie sous-jacente, sont la propriété exclusive de O’Service et
        de tiers ayant autorisé O’Service à les exploiter. Sauf dispositions
        explicites, il est interdit de reproduire, modifier, transmettre,
        publier, adapter, sur quelque support que ce soit, ou exploiter de
        quelque manière que ce soit, tout ou une partie du site sans
        l'autorisation écrite au préalable de O’Service. Ceci constituerait une
        contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de
        la propriété intellectuelle. Il en est de même des bases de données
        figurant, le cas échéant, sur le site qui sont protégées par les
        dispositions de la loi du 1er juillet 1998 portant transposition dans le
        Code de la propriété intellectuelle de la directive du 11 mars 1996
        relative à la protection juridique des bases de données, et dont
        O’Service est producteur. Les marques de O’Service et de ses
        partenaires, ainsi que les logos figurant sur le site sont des marques
        déposées par leurs titulaires respectifs. Toute reproduction totale ou
        partielle de ces marques ou logos, effectuée à partir des éléments du
        site sans l'autorisation expresse de O’Service, est donc prohibée, au
        sens de l'article L.713-2 du Code de la propriété intellectuelle. Le
        propriétaire du site se réserve la faculté de poursuivre toute
        contrefaçon de ses droits de propriété intellectuelle, sous toute forme
        appropriée."
      />
      <TitleSub content="Hyperliens" className="oservice-title-sub-basic" />
      <Text
        className="oservice-text-basic"
        content="Un lien simple renvoyant directement à la page d'accueil du site peut
        être mis en place sur un site tiers. O’Service ne saurait être
        responsable de l'accès par les utilisateurs via les liens hypertextes
        mis en place dans le cadre du site internet en direction d'autres
        ressources présentes sur le réseau internet. Le propriétaire du site
        O’Service peut proposer des liens vers d’autres sites indépendants,
        qu’il ne contrôle pas. Le propriétaire du site O’Service ne saurait donc
        être responsable des contenus de ces sites, régis par leurs propres
        conditions d’utilisation."
      />
      <TitleSub
        content="Crédits photos utilisées pour la démonstration"
        className="oservice-title-sub-basic"
      />

      {credits.map((credit) => (
        <li className="oservice-text-list" key={credit}>
          <a
            href={`https://unsplash.com/${credit.userId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credit.username}
          </a>
        </li>
      ))}
    </>
  );
};

/* Export component */
export default LegalsNotices;
