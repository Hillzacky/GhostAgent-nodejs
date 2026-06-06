const { generate } = require('./engine');

/**
 * @param {Object} [config] 
 * @param {boolean} [config.rotasi=true] 
 * @param {'desktop'|'mobile'} [config.device='desktop'] 
 */
module.exports = function(config = {}) {
    return generate(config.device || 'desktop');
};
