import type {ReactElement} from 'react';
import {StytchLogin} from '@stytch/react';
import {OAuthProviders, Products, StyleConfig, StytchLoginConfig} from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = (): ReactElement => {
  const styles: StyleConfig = {
    container: {
      width: '100%',
    },
    buttons: {
      primary: {
        backgroundColor: '#4A37BE',
        borderColor: '#4A37BE',
      },
    },
  };
  const callbackURL = window.location.href + 'authenticate';
  const config: StytchLoginConfig = {
    products: [Products.emailMagicLinks, Products.passkeys],
    emailMagicLinksOptions: {
      loginRedirectURL: callbackURL,
      loginExpirationMinutes: 60,
      signupRedirectURL: callbackURL,
      signupExpirationMinutes: 60,
    }
  };
  const customStrings = {
    "login.title": "Mikata Login"
  }

  return <StytchLogin config={config} styles={styles} strings={customStrings} />;
};

export default Login;
