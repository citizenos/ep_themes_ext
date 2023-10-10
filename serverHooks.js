'use strict';

/**
 * Server-side hooks
 *
 * @see {@link http://etherpad.org/doc/v1.5.7/#index_server_side_hooks}
 */

const settings = require('ep_etherpad-lite/node/utils/Settings');

/**
 * ClientVars hook
 *
 * Exposes plugin settings from settings.json to client code
 * inside clientVars variable to be accessed from client side hooks
 *
 * @param {string} hookName Hook name ("clientVars").
 * @param {object} args Object containing the arguments passed to hook. {pad: {object}}
 * @param {function} cb Callback
 *
 * @returns {*}
 *
 * @see {@link http://etherpad.org/doc/v1.5.7/#index_clientvars}
 */
exports.clientVars = (hookName, args, cb) => {
  const pluginSettings = settings.ep_themes_ext;
  if (!pluginSettings) {
    console.warn('ep_themes_ext settings not found. The settings can be specified in EP settings.json.'); // eslint-disable-line max-len

    return cb();
  }

  return cb({ep_themes_ext: pluginSettings}); // eslint-disable-line camelcase
};
