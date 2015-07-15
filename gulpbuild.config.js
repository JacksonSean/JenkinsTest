/**
 * This file/module contains all configuration for the build process.
 *
 *    -- WHAT TO DO WHEN INSTALLING A NEW LIBRARY VIA BOWER: --
 *
 * Many of the objects/attributes below are self explanatory, but let's
 * run through what to do when you install a new library via bower for
 * your app.
 *
 * 1. Use `$ bower install <package> --save` to make sure your library
 *    is added to the bower.json file. This is necessary in production
 *    builds to maintain the proper package version when we switch
 *    our <script> and <link> tags to CDN sources.
 * 2. If the needed bower package is a JavaScript file, add the filepath
 *    of your JS file to the `bowerFiles.js` attribute's array. If it's CSS,
 *    add it to the `bowerFiles.css` array. Any fonts or assets can also
 *    be added to their respective attributes. These will be injected into
 *    the `index.html` of our dev build.
 * 3. If you'd like the switch out the local <script> and <head> tags of
 *    your bower packages with CDN sources in the minified (production)
 *    build, add an object to the array within the `bowerFiles.cdn` object.
 *    The `file:` attribute should match the local path from step 2, the
 *    `package:` attribute should match the name of the bower package
 *    (i.e. if you do $ bower install angular-ui-router, the package name
 *    is "angular-ui-router"). The `cdn:` attribute should be the URL to the
 *    CDN source you wish to use. Once this is done, you're good to go!
 */
module.exports = {

	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once it's
	 * completely built.
	 */
	buildDir: 'build',
	prodDir: 'dist',

	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctml` contains
	 * any reusable components' (`common`) HTML files, while
	 * `ahtml` contains the same, but for our app's code. `html` is just our
	 * main index HTML file, `less` is our main LESS stylesheet, and `unit` contains our
	 * app's unit tests. CSS contains any css files present, but we should be using
	 * LESS for all of our stylesheets.
	 */
	appFiles: {
		js: ['app/**/*.js', '!app/**/*.spec.js', '!scripts/**/*.spec.js', '!assets/**/*.js'],
		jsunit: ['src/**/*.spec.js'],
		scripts: ['scripts/*.js'],

		ahtml: ['app/**/*.html'],
		chtml: [],

		html: ['index.html'],

		scss: 'src/scss/*.scss',
		less: 'assets/less/main.less',
		css: 'assets/css/custom.css',

		assets: 'assets/img/**/*'
	},

	/**
	 * This is a collection of files used during testing only.
	 */

	testFiles: {
		js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
	},

	miscFiles: {
		img: [
            'assets/img/favicon.png'
        ]
	},

	/**
	 * This is the same as `appFiles`, except it contains patterns that
	 * reference vendor code (`bower_components/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `bowerFiles.js`.
	 *
	 * The `bowerFiles.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `bowerFiles.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `bowerFiles.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 */

	bowerFiles: {
		js: [
          'bower_components/angular/angular.js',
          'bower_components/ng-table/dist/ng-table.js',
          'bower_components/Chart.js/Chart.js',
          'bower_components/angular-chart.js/angular-chart.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js',
          'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
          'bower_components/angular-aria/angular-aria.js'
        ],
		css: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/fontawesome/css/font-awesome.min.css',
          'bower_components/ng-table/ng-table.css'
        ],
		assets: [
        ],
		fonts: [
          'bower_components/fontawesome/fonts/*'
        ],
		cdn: [
			{
				file: 'bower_components/angular/angular.js',
				package: 'angular',
				cdn: '//ajax.googleapis.com/ajax/libs/angularjs/${version}/angular.min.js'
                },
			{
				file: 'bower_components/ng-table/ng-table.js',
				package: 'ng-table',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/ng-table/${version}/ng-table.js'
                },
			{
				file: 'bower_components/angular-ui-router/release/angular-ui-router.js',
				package: 'angular-ui-router',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/${version}/angular-ui-router.js'
                },
			{
				file: 'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js',
				package: 'angular-ui-bootstrap-bower',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/${version}/ui-bootstrap.js'
                },
			{
				file: 'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
				package: 'angular-ui-bootstrap-bower',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/${version}/ui-bootstrap-tpls.js'
                },
			{
				file: 'bower_components/angular-aria/angular-aria.js',
				package: 'angular-aria',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/angular.js/${version}/angular-aria.js'
                },
			{
				file: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
				package: 'bootstrap',
				cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/${version}/css/bootstrap.min.css'
                },
			{
				file: 'bower_components/fontawesome/css/font-awesome.min.css',
				package: 'fontawesome',
				cdn: 'https://maxcdn.bootstrapcdn.com/font-awesome/${version}/css/font-awesome.min.css'
                },
			{
				file: 'bower_components/ng-table/ng-table.css',
				package: 'ng-table',
				cdn: '//cdnjs.cloudflare.com/ajax/libs/ng-table/${version}/ng-table.css'
                }
            ]
	}
};