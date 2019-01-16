const wpSrvCfg = require('./webpack.srv');
const wpClientCfg = require(process.env.NODE_ENV === development ?
    './webpack.dev' :
    './webpack.prod'
);

module.exports = [wpClientCfg, wpSrvCfg];
