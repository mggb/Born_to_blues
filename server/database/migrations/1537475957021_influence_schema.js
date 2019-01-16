"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InfluenceSchema extends Schema {
  up() {
    this.create("influences", table => {
      table.increments().unsigned();
      table.string("name");
      table.string("img");
      table.string("song");
      table.text("description");
      table
        .integer("related_song_id")
        .unsigned()
        .references("id")
        .inTable("songs");
    });
  }

  down() {
    this.drop("influences");
  }
}

module.exports = InfluenceSchema;
