module.exports = {
    extends: ['stylelint-config-twbs-bootstrap', 'stylelint-config-prettier'],
    rules: {
        // 'scss/at-rule-no-unknown': null
        "string-quotes": "single",
        "number-leading-zero": "always"
    },
    ignoreFiles: [
        "node_modules/**/*.html"
    ]
}
