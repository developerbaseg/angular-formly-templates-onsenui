module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates:  {
		'formly.onsenui': {
			src: 'src/fields/**.html',
			dest: 'src/fields/<%= pkg.name %>.templates.js',
			options:  {
				url: function(url) { return url.replace('src/fields', 'onsenui/fields'); }
			}
		}
	},
	uglify: {
      options: {
        banner: 
			'/* <%= pkg.name %>' + 
			' | (v<%= pkg.version %>)' +
			' | builded on <%= grunt.template.today("dd-mm-yyyy") %>' +
			' | GitHub: <%= pkg.repository.url %>' +
			'*/\n(function () {',
		separator: '})(); (function () {',
        footer: '})();'
      },
      build: {
        src: [
					'src/modules/<%= pkg.name %>.js',
					'src/modules/<%= pkg.name %>.config.js',
					'src/directives/*.directive.js',
					'src/fields/<%= pkg.name %>.templates.js'
				],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'src/css',
				src: ['*.css'],
				dest: 'build',
				ext: '.min.css'
			}]
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // Default task(s).
  //grunt.registerTask('default', ['uglify','ngtemplates','cssmin']);
	grunt.registerTask('default', ['ngtemplates','cssmin','uglify']);

};