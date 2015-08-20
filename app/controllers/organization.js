/**
 * OrganizationCtrl controller for org view
 */

angular.module('ygApp')
    .controller('OrganizationCtrl', function (
        $scope, $rootScope, $stateParams,
        Organization, OrganizationRank, OrganizationStats
    ) {
        $scope.loading = {
            organization: true,
            rank: true,
            stats: true,
            any: function () {
                return this.organization || this.rank || this.stats
            }
        };
        $scope.organization = Organization.get({
            name: $stateParams.name,
            year: $stateParams.year
        }, function (org) {
            $scope.loading.organization = false;
            $rootScope.viewTitle = org.fullName;
        });
        $scope.rank = OrganizationRank.query({
            name: $stateParams.name,
            year: $stateParams.year
        }, function (rank) {
            $scope.loading.rank = false;
            // Calculate number of tasks
            $scope.tasksNum = 0;
            rank.forEach(function(student) {
                $scope.tasksNum += student.tasks;
            })
        });
        var colors = {
            lime: {main: '#C0CA33', highlight: '#CDDC39'},
            red: {main: '#E53935', highlight: '#EF5350'},
            blue: {main: '#1976D2', highlight: '#2196F3'},
            teal: {main: '#00897B', highlight: '#009688'},
            orange: {main: '#F57C00', highlight: '#FF9800'},
            brown: {main: '#6D4C41', highlight: '#795548'}
        };
        var categories = {
            'Code': {color: colors.red},
            'Documentation/Training': {color: colors.teal},
            'Outreach/Research': {color: colors.blue},
            'Quality Assurance': {color: colors.lime},
            'User Interface': {color: colors.orange}
        };
        $scope.stats = OrganizationStats.get({
            name: $stateParams.name,
            year: $stateParams.year
        }, function(stats) {
            $scope.loading.stats = false;
            if (!stats.hasOwnProperty('categories')) {
                return;
            }
            $scope.tasksChart = {data:[]};
            angular.forEach(stats['categories'], function(count, name) {
                var entry = {};
                entry.value = count;
                entry.label = name;
                entry.color = categories[name].color.main;
                entry.highlight = categories[name].color.highlight;
                $scope.tasksChart.data.push(entry);
            });

        });
    });