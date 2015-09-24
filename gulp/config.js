//var prod = './build/prod';
var dev = './build/dev';
var src = './src';
var cssFile = '/custom.scss';
var jsFileList = '/**/*.{js,coffee}';
var markupFileList = '/index.jade';
var imgFileList = '/img/**/*';

module.exports = {

    devClean: {
        dest: dev
    },
    devScssCustom: {
        src: src + cssFile,
        watch: src + '/**/*.{scss}',
        dest: dev,
        concatFile: 'custom.css',
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'img' // Used by the image-url helper
        }
    },
    devCssVendor: {
        src: [
                './bower_components/normalize-css/normalize.css'
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
            'bower_components/html5shiv/dist/html5shiv.js',
            'bower_components/respond/dest/respond.min.js'
        ],
        dest: dev
    },
    devJsCustom: {
        src: src + jsFileList,
        dest: dev
    },
    devJsVendor: {
        src: [],
        concatFile: 'vendor.js',
        dest: dev
    },
    devImg: {
        src: src + imgFileList,
        dest: dev + '/i'
    },
    devMarkup: {
        src: src + markupFileList,
        dest: dev
    },
    devWatch: {
        js: src + '/**/*.js',
        css: src + '/**/*.scss',
        markup: src + '/**/*.jade',
        img: src + '/img/*'
    },
    devBrowsersync: {
        dest: dev
    }
};