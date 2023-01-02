const fs = require('fs')
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const smp = new SpeedMeasurePlugin();
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const SvgToMiniDataURI = require('mini-svg-data-uri');
const TerserPlugin = require('terser-webpack-plugin');
//## ##################
const dirSrc = path.join(__dirname, 'src');
const mode = process.env.NODE_ENV || 'development';
const isProduction = mode === 'production';
const isDevelopment = !isProduction;
const filesList = fs.readdirSync(dirSrc).filter(function (file) {
    return path.extname(file).toLowerCase() === '.html';
});
module.exports = {
    mode: 'development',
    context: dirSrc,
    entry: {
        app: [
            './js/theme.js',
            './scss/style.scss'
        ],
        ...(filesList.reduce((a, v) => ({
            ...a,
            [v.replace('.html', '')]: ['./js/' + v.replace('.html', '') + '.js']
        }), {}))
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: 'assets/js/[name].js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
        hot: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                        // name: '../img/[name].[ext]',
                    }
                }
            },
            {
                test: /(ReadexPro)+.*(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                type: 'asset/resource',
                exclude: /node_modules/,
                generator: {
                    filename: '[name]-[hash:8][ext][query]',
                    publicPath: 'assets/fonts/',
                    outputPath: 'assets/fonts/'
                }
            },
            {
                test: /^(?!.*(fonts)).*(svg)(\?[a-z0-9=\.]+)?/,
                type: 'asset',
                exclude: /node_modules/,
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
                generator: {
                    filename: '[name]-[hash:8][ext][query]',
                    publicPath: 'assets/img/svg/',
                    outputPath: 'assets/img/svg/',
                    dataUrl: content => {
                        content = content.toString();
                        return SvgToMiniDataURI(content);
                    }
                }
            },
            // {
            //     test: /^(?!.*(fonts)).*(svg)(\?[a-z0-9=\.]+)?/,
            //     use: [
            //         'svg-transform-loader'
            //     ]
            // },
            {
                test: /\.(scss|css)$/i,
                // type: 'asset/resource',
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url: true,
                            import: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                path: './postcss.config.js'
                            }
                        }
                    },
                    'svg-transform-loader/encode-query',
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.((png|jpg|jpeg|gif))$/,
                type: 'asset/resource',
                exclude: /node_modules/,
                generator: {
                    filename: '[name]-[hash:8][ext][query]',
                    publicPath: 'assets/img/',
                    outputPath: 'assets/img/'
                }
            }
        ]
    },
    plugins: [
        ...(filesList.map((file) => new HtmlWebpackPlugin({
            template: `${file}`,
            filename: `${file}`,
            minify: false,
            cache: true,
            chunks: ['app', file.replace('.html', '')],
            meta: {
                'description': {name: 'description', content: '...'},
                'keyword': {name: 'keywords', content: '...'},
                'og:title': {property: 'og:title', content: '...'},
                'og:description': {
                    property: 'og:description',
                    content: '...'
                },
                'og:type': {property: 'og:type', content: 'website'},
                'og:url': {property: 'og:url', content: '...'},
                'og:image': {property: 'og:image', content: '...'},
                'twitter:card': {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                'twitter:title': {name: 'twitter:title', content: '...'},
                'twitter:description': {
                    name: 'twitter:description',
                    content: '...'
                },
                'twitter:image': {name: 'twitter:image', content: '...'}
            }
        }))),
        new StylelintPlugin({
            configFile: 'stylelint.config.js',
            failOnError: false,
            emitWarning: false,
            quiet: true
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css'
        }),
        new FaviconsWebpackPlugin({
            logo: 'img/logo.png',
            cache: true,
            inject: true,
            mode: 'webapp',
            devMode: 'webapp',
            favicons: {
                appName: 'blog-webapp',
                appDescription: 'BLOG',
                developerName: 'Tomasz',
                developerURL: 'mabb44.netlify.app',
                background: '#fff',
                theme_color: '#1893d2'
            }
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        usedExports: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: isDevelopment
                    },
                    compress: {
                        drop_console: isProduction
                    }
                },
                extractComments: false
            }),
            new CssMinimizerPlugin({})
            // new ImageMinimizerPlugin({
            //     minimizer: {
            //         implementation: ImageMinimizerPlugin.squooshMinify,
            //         options: {
            //             encodeOptions: {
            //                 mozjpeg: {
            //                     // That setting might be close to lossless,
            // but // it’s not guaranteed //
            // https://github.com/GoogleChromeLabs/squoosh/issues/85 quality:
            // 90 }, webp: { lossless: 1 }, avif: { //
            // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
            // cqLevel: 0 }, oxipng: { level: 5 } } } } })
        ]
    }
};
