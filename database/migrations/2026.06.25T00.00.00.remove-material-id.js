// database/migrations/2026.06.25T01.00.00.clear-project-sort-settings.js

'use strict';

module.exports = {
  async up(knex) {
    await knex('strapi_core_store_settings')
      .where('key', 'like', '%project%')
      .andWhere('value', 'like', '%materialId%')
      .delete();
  },

  async down() {}
};