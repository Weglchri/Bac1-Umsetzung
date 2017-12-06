export class User {
    
    _id:string;
    name:string;
    age:number;
    address:string;
    
    constructor(username:string, name:string, age:number, address:string) {
        this._id = username;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
