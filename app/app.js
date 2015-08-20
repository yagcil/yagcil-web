'use strict';

// Declare app level module which depends on views, and components
angular.module('ygApp', [
    'ngResource', 'ngSanitize',
    'ngMaterial', 'ui.router', 'angular-loading-bar', 'tc.chartjs',
    'pascalprecht.translate'
])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
    })
    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    })
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .state('organization', {
                url: '/organization/:name/:year',
                templateUrl: 'views/organization.html',
                controller: 'OrganizationCtrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function ($translateProvider) {
        // Default language
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            })
            .registerAvailableLanguageKeys(['en', {
                'en_*': 'en'
            }])
            .determinePreferredLanguage()
            .fallbackLanguage('en')
            .useSanitizeValueStrategy()
            .useMessageFormatInterpolation();
    })
    .controller('AppCtrl', function ($scope, $rootScope) {
        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });

        $rootScope.viewTitle = 'Home';
    });