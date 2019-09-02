module.exports = function(grunt){
    // configuration
    grunt.initConfig({
        // pass in options to plugins, references to files, etc.
        jshint: {
          files: ['server.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },
        watch: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('checkJS', ['jshint']);
    grunt.registerTask('runWatch', ['watch'])
}
