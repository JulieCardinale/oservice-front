/* Import(s) */
import NavigationLink from 'components/reusables/links/NavigationLink';

/* * * * * * * * *
 * * Footer nav  *
 *
 * @description : Footer navigation
 *
 */
const FooterNav = () => (
  <nav className="oservice-footer-nav">
    <NavigationLink linkToPage="/a-propos" text="À propos" />
    <NavigationLink linkToPage="/contact" text="Contact" />
    <NavigationLink linkToPage="/mentions-legales" text="Mentions Légales" />
  </nav>
);

/* Export component */
export default FooterNav;
