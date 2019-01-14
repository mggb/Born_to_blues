"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.post("music-style", "MusicStyleController.create");
  Route.get("music-style", "MusicStyleController.index");
  Route.get("music-style/:id", "MusicStyleController.fetchOne");
  Route.put("music-style/:id", "MusicStyleController.update");
  Route.delete("music-style/:id", "MusicStyleController.delete");
}).prefix("api");
