module.exports = {
  target: 'node16',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              target: 'es2021',
            }
          }
        }
      },
      {
        test: /\.(graphql)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'raw-loader',
        }
      },
    ]
  },
  resolve: {
    extensions: [
      '*',
      '.js',
    ],
    alias: {
      src: require('path').resolve(__dirname, '..', 'src'),
    }
  },
  externals: {
    'graphql': 'graphql',
    'express': 'express',
    'mariadb': 'mariadb',
    'sequelize': 'sequelize',
  },
  output: {
    path: require('path').resolve(__dirname, '..', '.dist'),
    filename: '[name].js',
    clean: true,
    library: {
      name: 'pluto',
      type: 'umd'
    }
  },
  stats: {
    warnings: false
  }
}
