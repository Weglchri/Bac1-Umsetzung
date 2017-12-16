export class Person {
    
    name:string;
    age:number;
    account:string;
    transactions:number;
    insurance:string;
    
    constructor(name:string, age:number, account:string, transactions:number, insurance:string) {
        this.name = name;
        this.age = age;
        this.account = account;
        this.transactions = transactions;
        this.insurance = insurance;
    }
}
