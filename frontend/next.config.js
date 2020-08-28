const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// fix: prevents error when .less files are required by node
if(typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
}

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: lessToJS(
            fs.readFileSync(path.resolve(__dirname, './less/antd.less'), 'utf8')
        ),
    },
})