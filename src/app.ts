import {autoinject} from "aurelia-framework";
import {PLATFORM} from "aurelia-pal";
import {Router, RouterConfiguration} from "aurelia-router";

@autoinject
export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.title = "Sinellil";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("./app"),
        nav: true,
        title: "Welcome"
      }
    ]);
  }
}