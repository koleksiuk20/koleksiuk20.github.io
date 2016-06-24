module.exports = {
    entry: "./app/main.js",
    resolve: {
        modulesDirectories: ['vendor']
    },
    output: {
        path: "js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
