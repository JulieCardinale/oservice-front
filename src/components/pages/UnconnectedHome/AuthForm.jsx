/* Import(s) */
import PropTypes from 'prop-types';
import Input from 'containers/Input';
import Button from 'components/reusables/Button';

/* * * * * * * *
 * * Auth form *
 *
 * @description : Auth form.
 *
 * @props -----------------------------------------------------------------------------
 * - authFormLogin (func)                        => auth form login action
 * - authFormEmailErrorMessage (str)             => auth form email error message
 * - isVisiblePassword (bool)                    => is visible password or not ?
 * - authFormPasswordErrorMessage (str)          => auth form password error message
 * ------------------------------------------------------------------------------------
 *
 */
const AuthForm = ({
  authFormLogin,
  authFormErrorsMessages,
  isVisiblePassword,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      authFormLogin();
    }}
    className="oservice-auth-form"
  >
    {/* AUTH FORM - EMAIL */}
    <Input
      className="oservice-input-auth-email"
      type="email"
      formName="authForm"
      formKey="authFormEmail"
      placeholder="Email"
      errorMessage={authFormErrorsMessages.authFormEmailErrorMessage}
    />

    {/* AUTH FORM - PASSWORD */}
    <Input
      className="oservice-input-auth-password"
      type={isVisiblePassword ? 'text' : 'password'}
      formName="authForm"
      formKey="authFormPassword"
      placeholder="Mot de passe"
      errorMessage={authFormErrorsMessages.authFormPasswordErrorMessage}
    />

    {/* AUTH FORM - SUBMIT */}
    <Button
      aria="Bouton pour envoyer le formulaire de connexion"
      className="oservice-button-basic"
      submit
      text="Connexion"
    />
  </form>
);

/* PropTypes validation */
AuthForm.propTypes = {
  authFormLogin: PropTypes.func,
  authFormErrorsMessages: PropTypes.objectOf(PropTypes.string),
  isVisiblePassword: PropTypes.bool,
};

/* Export component */
export default AuthForm;
