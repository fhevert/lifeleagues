angular.module("oauth.providers", [
  "oauth.utils",
  "oauth.azuread",
  "oauth.adfs",
  'oauth.dropbox',
  'oauth.digitalOcean',
  'oauth.google',
  'oauth.github',
  'oauth.facebook',
  'oauth.linkedin',
  'oauth.instagram',
  'oauth.box',
  'oauth.reddit',
  'oauth.slack',
  'oauth.twitter',
  'oauth.meetup',
  'oauth.salesforce',
  'oauth.strava',
  'oauth.withings',
  'oauth.foursquare',
  'oauth.magento',
  'oauth.vkontakte',
  'oauth.odnoklassniki',
  'oauth.imgur',
  'oauth.spotify',
  'oauth.uber',
  'oauth.windowslive',
  'oauth.yammer',
  'oauth.venmo',
  'oauth.stripe',
  'oauth.rally',
  'oauth.familySearch',
  'oauth.envato',
  'oauth.weibo',
  'oauth.jawbone',
  'oauth.untappd',
  'oauth.dribble',
  'oauth.pocket'])
  .factory("$cordovaOauth", cordovaOauth);

function cordovaOauth(
  $q, $http, $cordovaOauthUtility, $azureAD, $adfs, $dropbox, $digitalOcean,
  $google, $github, $facebook, $linkedin, $instagram, $box, $reddit, $slack,
  $twitter, $meetup, $salesforce, $strava, $withings, $foursquare, $magento,
  $vkontakte, $odnoklassniki, $imgur, $spotify, $uber, $windowslive, $yammer,
  $venmo, $stripe, $rally, $familySearch, $envato, $weibo, $jawbone, $untappd,
  $dribble, $pocket) {

  return {
    azureAD: $azureAD.signin,
    adfs: $adfs.signin,
    dropbox: $dropbox.signin,
    digitalOcean: $digitalOcean.signin,
    google: $google.signin,
    github: $github.signin,
    facebook: $facebook.signin,
    linkedin: $linkedin.signin,
    instagram: $instagram.signin,
    box: $box.signin,
    reddit: $reddit.signin,
    slack: $slack.signin,
    twitter: $twitter.signin,
    meetup: $meetup.signin,
    salesforce: $salesforce.signin,
    strava: $strava.signin,
    withings: $withings.signin,
    foursquare: $foursquare.signin,
    magento: $magento.signin,
    vkontakte: $vkontakte.signin,
    odnoklassniki: $odnoklassniki.signin,
    imgur: $imgur.signin,
    spotify: $spotify.signin,
    uber: $uber.signin,
    windowsLive: $windowslive.signin,
    yammer: $yammer.signin,
    venmo: $venmo.signin,
    stripe: $stripe.signin,
    rally: $rally.signin,
    familySearch: $familySearch.signin,
    envato: $envato.signin,
    weibo: $weibo.sigin,
    jawbone: $jawbone.signin,
    untappd: $untappd.signin,
    dribble: $dribble.signin,
    pocket: $pocket.signin,
  };
}

cordovaOauth.$inject = [
  "$q", '$http', "$cordovaOauthUtility",
  "$azureAD",
  "$adfs",
  '$dropbox',
  '$digitalOcean',
  '$google',
  '$github',
  '$facebook',
  '$linkedin',
  '$instagram',
  '$box',
  '$reddit',
  '$slack',
  '$twitter',
  '$meetup',
  '$salesforce',
  '$strava',
  '$withings',
  '$foursquare',
  '$magento',
  '$vkontakte',
  '$odnoklassniki',
  '$imgur',
  '$spotify',
  '$uber',
  '$windowslive',
  '$yammer',
  '$venmo',
  '$stripe',
  '$rally',
  '$familySearch',
  '$envato',
  '$weibo',
  '$jawbone',
  '$untappd',
  '$dribble',
  '$pocket'
];
