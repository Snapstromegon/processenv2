'use strict';
const replaceValues = (elem, key, env) => {
    let rV = elem.replace('${', '');
    rV = rV.replace('}', '');

    if(key === null || typeof key === 'undefined' ||
        env === null || typeof env === 'undefined'){
        return elem;
    }

    if(Object.keys(env).includes(rV)){
        return key.replace('${' + rV + '}', env[rV])
    }

    return elem;
};

module.exports = { replaceValues }