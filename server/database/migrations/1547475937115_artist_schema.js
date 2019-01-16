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
      table
        .integer("related_description_id")
        .unsigned()
        .references("id")
        .inTable("descriptions");
      table
        .integer("related_influence_id")
        .unsigned()
        .references("id")
        .inTable("influences");
    });
  }

  down() {
    this.drop("artists");
  }
}

module.exports = ArtistSchema;
