// webpack.config.js
const webpack = require("webpack");

module.exports = {
        webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
            canvas: "commonjs canvas",
        });
        return config;
        },
  
    
  };
  