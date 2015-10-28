//var prod = './build/prod';
var dev = './build/dev';
var src = './src';
var jsFileList = '/**/*.{js,coffee}';

module.exports = {
  developer: {
    sequencePre: [
      // need for resolve trouble with empty sequence
      'empty'
    ],
    sequenceClean: [
      'dev-clean'
    ],
    sequenceBuild: [
      'dev-jade',
      'dev-css-vendor',
      'dev-js-direct',
      'dev-js-vendor',
      'dev-js-custom',
      'dev-compass',
      'dev-fonts',
      'dev-images'
    ],
    sequenceServer: [
      'dev-browsersync'
    ],
    sequenceWatch: [
      'dev-watch-jade',
      'dev-watch-compass',
      'dev-watch-js-custom',
      'dev-watch-images'
    ],
    sequencePost: [
      // need for resolve trouble with empty sequence
      'empty'
    ]
  },
  devClean: {
    dest: dev
  },
  devScss: {
    src: src + '/templates/custom.scss',
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'img' // Used by the image-url helper
    }
  },
  devCompass: {
    src: src + '/templates/custom.scss',
    sass: 'src/templates',
    image: 'src/images',
    generated_images_path: 'build/dev/i',
    sourcemap: true,
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css'
  },
  devSassSprites: {
    src: src + '/sprite/*.png',
    exportImg: 'images/_sprite.png',
    exportCss: 'sprite/_sprite.scss',
    dest: src
  },

  devCssVendor: {
    src: [
          './bower_components/normalize-css/normalize.css',
          './bower_components/qtip2/basic/jquery.qtip.css'
        ],
    dest: dev,
    concatFile: 'vendor.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  devJsDirect: {
    src: [
      './node_modules/modernizr/modernizr.js'
    ],
    dest: dev
  },
  devJsCustom: {
    src: src + jsFileList,
    concatFile: 'custom.js',
    watch: src + '/**/*.js',
    dest: dev
  },
  devJsVendor: {
    src: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/jquery-placeholder/jquery.placeholder.js',
      './bower_components/bPopup/jquery.bpopup.js',
      './bower_components/jquery-validation/dist/jquery.validate.js',
      './bower_components/qtip2/basic/jquery.qtip.js'
    ],
    concatFile: 'vendor.js',
    dest: dev
  },
  devImage: {
    watch: src + '/images/**/*',
    src: src + '/images/*',
    dest: dev + '/i'
  },

  devJade: {
    watch: src + '/**/*.jade',
    src: src + '/bundles/*.jade',
    dest: dev
  },  devBrowsersync: {
    dest: dev
  }
};
