/**
 * Ranking resource, get ranking for a specified organization
 */

angular.module('ygApp')
    .factory('OrgRank', function ($resource) {
        return $resource('http://localhost:5000/organization/:name/:year/rank'); // TODO(poxip): Use links from / resource
    });