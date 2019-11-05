import AppView from "app/AppView";
import AppModel from "app/AppModel";
import AppController from "app/AppController";

export default class App {
    constructor() {
        this.view = new AppView();
        this.model = new AppModel(this.view);
        this.controller = new AppController(this.model);
    }

    init() {
        this.controller.run()
    }
}
