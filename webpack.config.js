const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, '/public')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
       
        ]
    },
    devServer: {
        host: 'localhost',
        port: port,
        open: true
    }
}