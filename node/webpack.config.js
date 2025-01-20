const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule for JavaScript files
        exclude: /node_modules/,
        use: "babel-loader", // Use Babel loader for transpiling JS
      },
      // Add other loaders here (e.g., for CSS, images)
    ],
  },
  mode: "production", // Set the build mode to production or development
};
