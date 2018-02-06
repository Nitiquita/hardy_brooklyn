module.exports = {
    entry: './app/main.jsx',
    output: {
      path: __dirname,
      filename: './public1/bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "url-loader?name=app/images/[name].[ext]"
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
      ]
    }
  };
