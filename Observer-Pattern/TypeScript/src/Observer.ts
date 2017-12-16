import { Subject } from "./Subject"

export interface Observer {
    update(ctx:Subject):void;
}
