'use strict';

/**
 *  key-strength controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::key-strength.key-strength');
