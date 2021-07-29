module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/custom.css': 'sass/custom.scss',       // 'destination': 'source'
      }
    }
  },

  jshint: {
  all: ['Gruntfile.js', 'lib/**/custom.js', 'test/**/custom.js']
},
  watch: {
  scripts: {
    files: ['**/custom.js', 'sass/custom.scss', 'index.html', 'gruntfile.js'],
    tasks: ['uglify', 'sass', 'csslint'],
    options: {
      spawn: false,
    },
  },
},
csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['**/custom.css']
  },
  lax: {
    options: {
      import: false
    },
    src: ['/**/custom.css']
  }
}


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch', 'csslint', 'jshint']);

};
