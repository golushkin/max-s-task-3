const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const conf ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./result/'),
        filename:'main.js',
        publicPath:'dist/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:'/node-modules/'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devServer:{
        overlay:true,
	    historyApiFallback: true,
        contentBase: './',
    }
};
module.exports = (env,options)=>{
    let production = options.mode==='production';
    conf.devtool = production?false:'eval';
    return conf
};

