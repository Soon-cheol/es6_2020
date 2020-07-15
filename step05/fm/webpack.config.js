const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css를 별도의 파일로 추출해줌

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        open: true,
        hot: true, // 소스가 변경되면 자동으로 빌드되어 반영된다.
        port: 9000, // 서버 포트
        // inline: true, // 핫리로드를 위한 스크립트를 삽입한다. 
        // host: '0.0.0.0', // localhost 를 사용하면 외부에서 접근할 수 없다. 
        // contentBase: './dist' // 서비스 웹 루트 경로
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new MiniCssExtractPlugin({
        //     filename: "main.css"
        // }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};