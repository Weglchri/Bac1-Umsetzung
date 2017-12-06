import { Table } from "./Table"
import { User } from "./User"
import 'mongodb'

export class UserTable implements Table {
    insert(criteria: User): void{}
    delete(criteria: User): void {}
    find(criteria:User): User {return null;}
}

