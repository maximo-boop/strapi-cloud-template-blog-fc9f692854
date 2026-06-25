// database/migrations/2026.06.25T00.00.00.remove-material-id.js

'use strict';

module.exports = {
  async up(knex) {
    const exists = await knex.schema.hasColumn('project_galleries', 'material_id');
    if (exists) {
      await knex.schema.table('project_galleries', table => {
        table.dropColumn('material_id');
      });
    }
  },

  async down(knex) {
    await knex.schema.table('project_galleries', table => {
      table.string('material_id');
    });
  }
};