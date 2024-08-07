const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    datePicker: './src/datePicker.js',
    displayTask: './src/displayTask.js',
    deleteTask: './src/deleteTask.js',
    completeTask: './src/completeTask.js',
    expandAndCollapse: './src/completeTask.js',
    toggleMenu: './src/toggleMenu.js',
    editTask: './src/editTask.js',
    taskFilter: './src/taskFilter.js',
    createProject: './src/createProject.js',
    createProjectContainer: './src/createProjectContainer.js',
    removeProject: './src/removeProject.js',
    toggleTask: './src/toggleTask.js',
    localStorageFunctions: './src/localStorageFunctions.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};