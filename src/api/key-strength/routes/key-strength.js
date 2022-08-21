'use strict';

/**
 * key-strength router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::key-strength.key-strength');
