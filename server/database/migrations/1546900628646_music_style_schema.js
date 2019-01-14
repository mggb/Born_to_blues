"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MusicStyleSchema extends Schema {
  up() {
    this.create("music_styles", table => {
      table.increments();
      table.string("name");
      table.string("email");
      table.string("title");
      table.string("tel");
      table.timestamps();
    });
  }

  down() {
    this.drop("music_styles");
  }
}

module.exports = MusicStyleSchema;
