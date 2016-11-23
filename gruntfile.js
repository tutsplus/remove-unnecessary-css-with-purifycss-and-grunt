module.exports = function(grunt) {
    grunt.initConfig({
        purifycss: {
            target: {
                src: ['*.html', 'js/*.js'],
                css: ['css/bootstrap-full.css'],
                dest: 'css/bootstrap-grunt.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-purifycss');
}
