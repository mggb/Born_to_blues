"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArtistSchema extends Schema {
  up() {
    this.create("artists", table => {
      table.increments().unsigned();
      table.string("name");
      table.string("img");
      table.text("song");

      // Relationships
      table.json("descriptions");
      table.json("influences");
    });
  }

  down() {
    this.drop("artists");
  }
}

module.exports = ArtistSchema;
