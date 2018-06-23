/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('cjs-eslint-config/.eslintrc.js'),

    env: {
        node: true,
        browser: true
    },

    globals: {
        debug: false
    },

    // override any settings from the "parent" configuration
    rules: {    
        'no-path-concat': 'off'
    }
};
