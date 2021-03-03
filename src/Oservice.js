/* Import(s) */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'containers/Header';
import OserviceRouter from 'OserviceRouter';
import Footer from 'components/layout/Footer';

/* * * * * * *
 * * Oservice *
 *
 * @description : The main component, it contains the "Header", the "OserviceRouter" which display
 * all pages, & the "Footer".
 *
 * @props --------------------------------------------------------------------------------------
 * - checkIfLogged (dispatched func)  => check if user is logged.
 * ---------------------------------------------------------------------------------------------
 *
 */
const Oservice = ({ checkIfLogged }) => {
  useEffect(() => checkIfLogged(), []);

  return (
    <div className="oservice">
      <Header />
      <OserviceRouter />
      <Footer />
    </div>
  );
};

/* PropTypes */
Oservice.propTypes = {
  checkIfLogged: PropTypes.func,
};

/* Export component */
export default Oservice;
