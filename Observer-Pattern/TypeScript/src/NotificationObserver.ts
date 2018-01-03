import { Observer } from "./Observer" 
import { Logger } from "./Logger"
import { Component } from "./Component"

export class NotificationObserver implements Observer {
    constructor() {}

    update(ctx:Component) {
        console.log("Following changes in object were made: " + JSON.stringify(ctx));
    }
}
