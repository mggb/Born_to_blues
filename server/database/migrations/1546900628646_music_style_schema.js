"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MusicStyleSchema extends Schema {
  up() {
    this.create("music_styles", table => {
      table.increments().unsigned();
      table.string("name");
      table.string("img");
      table.text("origin");
      table.text("theme");
      table.text("peach");

      // Relationships
      table.json("descriptions");
      table.json("influences");
      table.json("anecdotes");
    });
  }

  down() {
    this.drop("music_styles");
  }
}

module.exports = MusicStyleSchema;
