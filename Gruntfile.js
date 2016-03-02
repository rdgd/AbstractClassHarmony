module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        screwIE8: true,
        preserveComments: false
      },
      all: {
        files: grunt.file.expandMapping(['dist/*.js'], 'dist/', {
		    	flatten: true,
          rename: function(destBase, destPath) {
            var filePath = destBase + destPath;
            if (destPath.indexOf('.min.js') !== -1) { return filePath; }
	          return filePath.replace('.js', '.min.js');
	        }
		    })
      }
    },
    webpack: {
      all: {
        entry: "./dev/js/AbstractClass.js",
        output: {
          path: "dist/",
          filename: "AbstractClass.js",
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        storeStatsTo: "webpackStats",
        failOnError: true,
        keepalive: false,
        module: {
          loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                presets: ['es2015']
              }
            }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('default', ['webpack:all']);
};
