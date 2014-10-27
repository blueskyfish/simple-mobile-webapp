/*
 * Project: simple-mobile-webapp
 */

module.exports = function (grunt) {

	var _options = {
		app: "app",
		dest: "dest"
	};

	grunt.initConfig({

		// Watch to the change of the files
		watch: {
			options: {
				atBegin: false,
				livereload: true
			},
			css: {
				files: 'app/assets/css/**/*.less',
				tasks: ['less:server']
			},
			i18n: {
				files: 'app/assets/i18n/**/*.json',
				tasks: []
			},
			js: {
				files: [
					'app/assets/js/**/*.js'
				],
				tasks: ['concat:server']
			},
			html: {
				files: 'app/**/*.html',
				tasks: ['ngtemplates:server']
			}
		}, // watch

		processhtml: {
			options: {
				recursive: true
			},
			dest: {
				files: {
					'dest/index.html': ['app/index.html']
				}
			}
		}, // processhtml

		// Connection deliveries the application to the browser
		connect: {
			server: {
				options: {
					port: 9000,
					open: {
						target: 'http://localhost:9000/',
						appName: 'openApp'
					},
					livereload: 35729,
					middleware: function (connect) {
						return [
							connect.static('.tmp'),
							connect().use('/bower_components', connect.static('./bower_components')),
							connect.static(_options.app)
						];
					}
				}
			}
		}, // connect

		// Concat files together in a place
		concat: {
			options: {
				separator: ';'
			},
			dest: {
				files: {
					'dest/assets/css/vendor.min.css': [
						'bower_components/components-font-awesome/css/font-awesome.min.css',
						'bower_components/ratchet/dist/css/ratchet.min.css'
					],
					'dest/assets/js/vendor.min.js': [
						'bower_components/angular/angular.min.js',
						'bower_components/angular-route/angular-route.min.js',
						'bower_components/angular-translate/angular-translate.min.js',
						'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
						'bower_components/ratchet/dist/js/ratchet.min.js'
					],
					'.tmp/assets/js/application.js': [
						'app/assets/js/app.js',
						'app/assets/js/_config/**/*.js',
						'app/assets/js/_services/**/*.js',
						'app/assets/js/_controllers/**/*.js',
						'app/assets/js/_filters/**/*.js',
						'app/assets/js/_directives/**/*.js',
						'app/assets/js/_run/**/*.js'
					]
				}
			},
			server: {
				files: {
					'.tmp/assets/js/application.js': [
						'app/assets/js/app.js',
						'app/assets/js/_config/**/*.js',
						'app/assets/js/_services/**/*.js',
						'app/assets/js/_controllers/**/*.js',
						'app/assets/js/_filters/**/*.js',
						'app/assets/js/_directives/**/*.js',
						'app/assets/js/_run/**/*.js'
					]
				}
			}
		},

		// Copies files to the place
		copy: {

			server: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/ratchet/dist/fonts',
						src: ['*.*'],
						dest: '.tmp/assets/fonts'
					},
					{
						expand: true,
						cwd: 'bower_components/components-font-awesome/fonts',
						src: ['*.*'],
						dest: '.tmp/assets/fonts'
					}
				]
			},

			dest: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/ratchet/dist/fonts',
						src: ['*.*'],
						dest: 'dest/assets/fonts'
					},
					{
						expand: true,
						cwd: 'bower_components/components-font-awesome/fonts',
						src: ['*.*'],
						dest: 'dest/assets/fonts'
					},
					{
						expand: true,
						cwd: 'app/assets/i18n',
						src: ['*.*'],
						dest: 'dest/assets/i18n'
					}
				]
			}

		}, // copy

		ngtemplates: {
			options: {
				module: 'smw' // TODO replace with the module name
			},
			server: {
				cwd: 'app',
				src: [
					'views/**/*.html'
				],
				dest: '.tmp/assets/js/templates.js'
			},
			dest: {
				options: {
					htmlmin: {
						collapseBooleanAttributes:      true,
						collapseWhitespace:             true,
						removeAttributeQuotes:          true,
						removeComments:                 true, // Only if you don't use comment directives!
						removeEmptyAttributes:          true,
						removeRedundantAttributes:      true,
						removeScriptTypeAttributes:     true,
						removeStyleLinkTypeAttributes:  true
					}
				},
				cwd: 'app',
				src: [
					'views/**/*.html'
				],
				dest: 'dest/assets/js/templates.js'
			}
		}, // ngtemplates

		uglify: {
			options: {
				mangle: false
			},
			dest: {
				files: {
					'dest/assets/js/application.min.js': '.tmp/assets/js/application.js'
				}
			}
		}, // uglify

		clean: ['.tmp', 'dest'],

		// less compile the less files into one css (here is "application.css"
		less: {
			options: {
				paths: ['app/assets/css']
			},
			server: {
				files: {
					'.tmp/assets/css/application.css': 'app/assets/css/application.less'
				}
			},
			dest: {
				options: {
					cleancss: true
				},
				files: {
					'dest/assets/css/application.min.css': 'app/assets/css/application.less'
				}
			}
		} // less

	});

	// load the npm task into the grunt runtime
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('serve', [
		'clean',
		'concat:server',
		'less:server',
		'copy:server',
		'ngtemplates:server',
		'connect:server',
		'watch'
	]);

	grunt.registerTask('dest', [
		'clean',
		'less:dest',
		'concat:dest',
		'uglify:dest',
		'copy:dest',
		'ngtemplates:dest',
		'processhtml:dest'
	]);

	grunt.registerTask('default', function () {
		grunt.log.warn('| nothing to start...');
		grunt.log.warn('| ---------------------------------------------------------------------------');
		grunt.log.warn('| usage:');
		grunt.log.warn('|   grunt serve       starts the internal server at http://localhost:9000/');
	})

};