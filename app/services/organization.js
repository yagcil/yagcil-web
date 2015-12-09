/**
 * Organization services
 */

angular.module('ygApp')
    .factory('Organization', function ($resource) {
        return $resource('http://yagcil-api.herokuapp.com/organization/:year/:name');
    })
    .factory('OrganizationRank', function ($resource) {
        // TODO(poxip): Use links from / resource
        return $resource('http://yagcil-api.herokuapp.com/organization/:year/:name/rank');
    })
    .factory('OrganizationStats', function ($resource) {
        return $resource('http://yagcil-api.herokuapp.com/organization/:year/:name/stats')
    });
