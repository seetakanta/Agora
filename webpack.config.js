// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development', // Add this line to set the mode
//     entry: './src/index.js', // Ensure this file exists
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'), // Output directory
//         clean: true, // Clean the output directory before each build
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'dist'), // Serve content from this directory
//         },
//         compress: true,
//         port: 9010, // You can change this port if needed
//         open: true, // Open the browser after server start
//     },
//     // module: {
//     //     rules: [
//     //         {
//     //             test: /\.js$/,
//     //             exclude: /node_modules/,
//     //             use: {
//     //                 loader: 'babel-loader', // Uncomment if using Babel
//     //             },
//     //         },
//     //     ],
//     // },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'index.html'), // Use your existing index.html
//         }),
//     ],
// };











const path = require("path");

module.exports = {
    entry: "./agoraLogic.js",
    output: {
        filename: "bundledAgoraLogic.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'), 
        },
        compress: true,
        port: 9000,
    },
};
