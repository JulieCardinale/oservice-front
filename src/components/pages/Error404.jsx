/* Import(s) */
import { useEffect } from 'react';
import { mainFlex } from 'selectors';
import OSLogo from 'images/OSLogo.png';
import Text from 'components/reusables/texts/Text';
import Image from 'components/reusables/images/Image';

/* * * * * * * *
 * * Error 404 *
 *
 * @description : Error 404 page
 *
 * @selector -------------------------------------------------------------------------------------------------------
 * - mainFlex => change main flex behavior
 * -----------------------------------------------------------------------------------------------------------------
 *
 */
const Error404 = () => {
  /* * * * * * * *
   * * useEffect *
   */
  useEffect(() => mainFlex('center'), []);

  /* * * * *
   * * JSX *
   */
  return (
    <>
      {/* ERROR 404 - TOP TEXT */}
      <Text
        className="oservice-text-basic"
        content="Vous êtes perdu ? &#128579;"
      />
      {/* ERROR 404 - 404 NUMBER */}
      <div className="oservice-error-404-number">
        <Text className="oservice-text-404" content="4" />
        <Image
          className="oservice-404-image"
          src={OSLogo}
          alt="Page 404 animation du logo o'service"
        />
        <Text className="oservice-text-404" content="4" />
      </div>
      {/* ERROR 404 - BOTTOM TEXT */}
      <Text
        className="oservice-text-basic"
        content="Désolé, la page que vous recherchez n'a pas été trouvée."
      />
    </>
  );
};

/* Export component */
export default Error404;
