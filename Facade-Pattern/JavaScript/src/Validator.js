class Validator {
    constructor() {}
    validatePersonData(person) {
        if (person === undefined || person === null) {
            return false;
        } else if (person.name === undefined) {
            return false;
        } else if (person.age === undefined) {
            return false;
        } else if (person.account === undefined) {
            return false;
        } else if (person.transactions === undefined) {
            return false;
        } else if (person.insurance === undefined) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Validator;