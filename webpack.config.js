module.exports = {
    entry:  './app/assets/js/scripts.js',
    output: {
        path:     '/app/assets/js/',
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|vendor)/,
                // loader: 'babel-loader',
                loader: 'babel-loader!eslint-loader',
            }
        ]
    },

    // jshint: {
    //     asi: true,
    //     esversion: 6,
    //     eqeqeq: true,
    //     undef: true,
    //     varstmt: true,
    //     browser: true,
    //     devel: true,
    // },
    eslint: {
        configFile: './.eslintrc'
    },
    debug: true
};