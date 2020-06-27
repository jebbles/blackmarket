const contentful = require('contentful');
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'y9kez8dgzfbc',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'oITo5u6uAtI-jx9IW5CVdffiO0hCH9uzQYvygB4GvlE'
});

export default client;
