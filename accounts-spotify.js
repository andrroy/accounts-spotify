Accounts.oauth.registerService('spotify');

if (Meteor.isClient) {
    Meteor.loginWithSpotify = function(options, callback) {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Facebook.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.spotify'],
        forOtherUsers: [
        ]
    });
}