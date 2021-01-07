const {
    override, fixBabelImports, addLessLoader, addWebpackAlias
} = require('customize-cra');
const path = require('path')

module.exports = override(
    addWebpackAlias({
        Http$: path.resolve(__dirname, 'src/axios.js'),
        '~': path.resolve(__dirname, 'src')
    })
);