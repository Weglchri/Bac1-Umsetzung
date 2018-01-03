import { Subject } from "./Subject"

export class Component extends Subject {
    
    id:number;
    name:string;
    
    constructor(id:number, name:string) {
        super();
        this.id = id;
        this.name = name;
    }

    setId(id:number) {
        this.id = id;
        this.notify();
    }

    setName(name:string) {
        this.name = name;
        this.notify();
    }
}
