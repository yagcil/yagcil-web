/**
 * Organization service
 */

angular.module('ygApp')
    .factory('Organization', function ($resource) {
        return $resource('http://localhost:5000/organization/:name/:year'); // TODO(poxip): Use links from / resource
    });