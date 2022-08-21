'use strict';

/**
 * attacking-stat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attacking-stat.attacking-stat');
