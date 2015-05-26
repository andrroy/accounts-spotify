//Package.describe({
//  name: 'andrroy:accounts-spotify',
//  version: '0.0.1',
//  // Brief, one-line summary of the package.
//  summary: '',
//  // URL to the Git repository containing the source code for this package.
//  git: '',
//  // By default, Meteor will default to using README.md for documentation.
//  // To avoid submitting documentation, set this field to null.
//  documentation: 'README.md'
//});
//
//Package.onUse(function(api) {
//  api.versionsFrom('1.1.0.2');
//  api.addFiles('accounts-spotify.js');
//});



Package.describe({
  name: 'andrroy:accounts-spotify',
  summary: "Login service for Spotify accounts",
  version: '0.0.1',
  git: "https://github.com/andrroy/accounts-spotify"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.addFiles('spotify_login_button.css', 'client');
  api.addFiles("accounts-spotify.js");
});