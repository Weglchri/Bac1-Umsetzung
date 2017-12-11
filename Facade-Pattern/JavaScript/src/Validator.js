class Validator {
    constructor() {}
    validatePersonData(person) {
        if (!person) {
            return false;
        } else if (!person.name) {
            return false;
        } else if (!person.age) {
            return false;
        } else if (!person.account) {
            return false;
        } else if (!person.transactions) {
            return false;
        } else if (!person.insurance) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Validator;