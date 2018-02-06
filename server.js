const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const router = express.Router();
const app = express();

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const auth0ClientID = require('./config/keys.js')
const auth0ClientSecret = require('./config/keys.js')

// Configure Passport to use Auth0
// const strategy = new Auth0Strategy(
//   {
//     domain: 'hardybrooklyn.auth0.com',
//     clientID: auth0ClientID,
//     clientSecret: auth0ClientSecret,
//     callbackURL: 'http://localhost:3000/callback'
//   },
//   (accessToken, refreshToken, extraParams, profile, done) => {
//     return done(null, profile);
//   }
// );

// passport.use(strategy);

// // This can be used to keep a smaller payload
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// // ...
// app.use(passport.initialize());
// app.use(passport.session());

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/public1'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// const env = {
//   AUTH0_CLIENT_ID: auth0ClientID,
//   AUTH0_DOMAIN: 'hardybrooklyn.auth0.com',
//   AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
// };

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });


// // Perform the login
// router.get(
//   '/login',
//   passport.authenticate('auth0', {
//     clientID: env.AUTH0_CLIENT_ID,
//     domain: env.AUTH0_DOMAIN,
//     redirectUri: env.AUTH0_CALLBACK_URL,
//     audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
//     responseType: 'code',
//     scope: 'openid'
//   }),
//   function(req, res) {
//     res.redirect('/');
//   }
// );

// // Perform session logout and redirect to homepage
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// // Perform the final stage of authentication and redirect to '/user'
// router.get(
//   '/callback',
//   passport.authenticate('auth0', {
//     failureRedirect: '/'
//   }),
//   function(req, res) {
//     res.redirect(req.session.returnTo || '/user');
//   }
// );


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
