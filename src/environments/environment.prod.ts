export const environment = {
  production: true,
  apiUrl: 'https://eliezer-java-api.herokuapp.com',

  tokenWhitelistedDomains: [ 'eliezer-java-api.herokuapp.com' ],
  tokenBlacklistedRoutes: [ 'https://eliezer-java-api.herokuapp.com/oauth/token' ]
};

