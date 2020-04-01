const OktaJwtVerifier = require('@okta/jwt-verifier');

let idTokenString = 'your id-token string here'
let expectedAud = '0oaqfwgcaceDequcI0h7' 

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://semonav2.oktapreview.com/oauth2/default' // required
});

oktaJwtVerifier.verifyAccessToken(idTokenString, expectedAud)
.then(jwt => {
  // the token is valid (per definition of 'valid' above)
  console.log(jwt.claims);
})
.catch(err => {
  // a validation failed, inspect the error
});

// Passing a string for expectedAud
oktaJwtVerifier.verifyAccessToken(idTokenString, expectedAud)
.then(jwt => console.log('token is valid') )
.catch(err => console.warn('token failed validation') );



