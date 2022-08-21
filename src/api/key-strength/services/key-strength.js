'use strict';

/**
 * key-strength service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-strength.key-strength');
