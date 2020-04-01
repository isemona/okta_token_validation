const OktaJwtVerifier = require('@okta/jwt-verifier');

let accessTokenString = 'your access-token string here'

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://semonav2.oktapreview.com/oauth2/default' // required
});

oktaJwtVerifier.verifyAccessToken(accessTokenString, 'api://default')
.then(jwt => {
  // the token is valid (per definition of 'valid' above)
  console.log(jwt.claims);
})
.catch(err => {
  // a validation failed, inspect the error
});

// Passing a string for expectedAud
oktaJwtVerifier.verifyAccessToken(accessTokenString, 'api://default')
.then(jwt => console.log('token is valid') )
.catch(err => console.warn('token failed validation') );

// oktaJwtVerifier.verifyAccessToken(accessTokenString, [ 'api://special', 'api://default'] )
// .then(jwt => console.log('token is valid') )
// .catch(err => console.warn('token failed validation') );

