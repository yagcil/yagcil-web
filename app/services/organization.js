/**
 * Organization services
 */

angular.module('ygApp')
    .factory('Organization', function ($resource) {
        return $resource('http://localhost:5000/organization/:year/:name');
    })
    .factory('OrganizationRank', function ($resource) {
        // TODO(poxip): Use links from / resource
        return $resource('http://localhost:5000/organization/:year/:name/rank');
    })
    .factory('OrganizationStats', function ($resource) {
        return $resource('http://localhost:5000/organization/:year/:name/stats')
    });