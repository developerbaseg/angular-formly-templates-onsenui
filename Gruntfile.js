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
        src: ['src/modules/<%= pkg.name %>.js','src/modules/<%= pkg.name %>.config.js','src/fields/<%= pkg.name %>.templates.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-angular-templates');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify','ngtemplates']);

};