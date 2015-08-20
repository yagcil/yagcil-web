module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.initConfig({

        ngAnnotate: {
            dist: {
                files: {
                    'app/dist/js/site.js': [
                        'app/config/config.prod.js',
                        'app/*.js',
                        'app/services/*.js',
                        'app/controllers/*.js',
                        'app/directives/*.js',
                        'app/js/main.js'
                    ]
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'app/dist/js/site.min.js': 'app/dist/js/site.js'
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/styles',
                    src: ['*.scss'],
                    dest: 'app/dist/css',
                    ext: '.css'
                }]
            }
        },

        jade: {
            debug: {
                options: {
                    data: {
                        env: process.env.DEV_PROD_SWITCH || grunt.option('env') || 'dev'
                    }
                },
                files: {
                    "app/index.html": "app/templates/index.jade",
                    "app/views/home.html": "app/templates/views/home.jade",
                    "app/views/organization.html": "app/templates/views/organization.jade"
                }
            }
        },

        watch: {
            options: {
                cwd: 'app/',
                livereload: true
            },

            html: {
                files: ['**/*.jade'],
                tasks: ['jade']
            },
            images: {
                files: [
                    '**/*.jpg',
                    '**/*.jpeg',
                    '**/*.png',
                    '**/*.gif'
                ]
            },
            scripts: {
                files: ['**/*.js']
                //tasks: ['jshint', 'uglify'],
            },
            styles: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('build', [
        'sass', 'ngAnnotate', 'uglify', 'jade'
    ]);
    grunt.registerTask('default', ['build', 'watch']);
};