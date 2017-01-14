module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      app: {
        options: {
          base: 'app'
        }
      },
      deploy: {
        options: {
          hostname: '0.0.0.0',
          base: 'app'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  // server task
  grunt.registerTask('serve', ['connect:app:keepalive']);

  grunt.registerTask('deploy', ['connect:deploy:keepalive']);
  // Default task(s).
  grunt.registerTask('default', ['deploy']);


};
