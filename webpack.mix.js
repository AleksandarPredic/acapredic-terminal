const mix = require( 'laravel-mix' );
const CopyFiles = require('copy-webpack-plugin')
let styleLintPlugin = require( 'stylelint-webpack-plugin' );

let projectPath = {
  public: './',
  assets: {
    styles: './src/assets/scss',
    scripts: './src/assets/js',
  },
  dist: {
    styles: './dist/assets/css',
    scripts: './dist/assets/js',
  }
};

mix.webpackConfig( {
  plugins: [
    new styleLintPlugin( {
      files: './src/assets/scss/**/*.scss',
      configFile: './.stylelintrc',
    } ),
    new CopyFiles([
        {
            from: 'src/index.html',
            to: 'dist/index.html',
            toType: 'file'
        },
        {
          from: 'src/data.js',
          to: 'dist/data.js',
          toType: 'file'
        },
        {
          from: 'src/assets/images/',
          to: 'dist/assets/images/',
          toType: 'dir'
        },
    ]
    )
  ],
  devtool: "source-map"
} )
  .options( { publicPath: projectPath.public } )
  .js( projectPath.assets.scripts + '/main.js', projectPath.dist.scripts ).sourceMaps()
  .sass( projectPath.assets.styles + '/main.scss', projectPath.dist.styles ).sourceMaps();
