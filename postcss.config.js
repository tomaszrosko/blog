module.exports = {
    plugins: [
        require('postcss-preset-env')({}),
        require('postcss-css-variables')({
            preserve: function (declaration) {
                if (declaration.value === 'var(--bs-aspect-ratio)') {
                    return true;
                }
                if (declaration.prop === '--bs-aspect-ratio' || declaration.prop === '--bs-position') {
                    return 'computed';
                }
                return false;
            }
        }),
        require('autoprefixer')({}),
        require('postcss-move-props-to-bg-image-query')({}),
        require('cssnano')({
            preset: ['default', {
                cssDeclarationSorter: true,
                discardComments: {removeAll: true},
                normalizeWhitespace: false
            }
            ]
        }),
        require('mqpacker')({
            sort: true
        }),
        require('postcss-font-display')({
            display: 'swap',
            replace: false
        })
        //https://github.com/jonathantneal/postcss-font-magician
    ]
}