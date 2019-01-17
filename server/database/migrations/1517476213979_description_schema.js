"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DescriptionSchema extends Schema {
  up() {
    this.create("descriptions", table => {
      table.increments().unsigned();
      table.string("name");
      table.string("img");
      table.text("content");
    });
  }

  down() {
    this.drop("descriptions");
  }
}

module.exports = DescriptionSchema;
