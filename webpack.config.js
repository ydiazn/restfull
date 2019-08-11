const path = require('path');

module.exports = {
    entry: {
        'questions': "./restfull/qa/reactjs/questions.js",
    },
    output: {
        path: path.resolve(__dirname, "restfull/qa/static/js/reactjs"),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
