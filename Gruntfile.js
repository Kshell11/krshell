module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      options: {
        port: process.env.PORT || 9000,
        hostname: '*'
      },
      app: {
        options: {
          base: 'app'
        }
      },
      deploy: {
        options: {
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
