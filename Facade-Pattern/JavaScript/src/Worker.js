class Worker {
    constructor() {}
    checkInsurance(person) {
        if(person.age < 18) {
            console.log("Can't set insurance for underaged person");
            return false;
        } else if (person.account === "invalid") {
            console.log("Can't set insurance with invalid account");
            return false;
        } else if (person.insurance === true) {
            console.log("Person already has a insurance");
            return false;
        } else {
            return true;
        } 
    }
}

module.exports = Worker;