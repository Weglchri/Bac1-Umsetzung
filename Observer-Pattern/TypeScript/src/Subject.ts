import { Observer } from "./Observer"

export class Subject {
    
    observers:Observer[] = new Array<Observer>();
    
    constructor() {}

    addObserver(observer:Observer):void {
        this.observers.push(observer);
    }

    removeObserver(observer:Observer):void {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    }

    notify():void {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this);
        }
    }
}
