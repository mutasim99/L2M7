//* Example1 ==> polymorphism works only on methods 

class Person {
    getSleep() {
        return console.log('this person sleep for 12 hours');
    };
};


class Student extends Person {
    getSleep() {
        return console.log('this person sleep for 10 hours');
    };
};


class Worker extends Person {
    getSleep() {
        return console.log('this person sleep for 8 hours');
    };
};

const getSleepingHours = (param: Person) => {
    return param.getSleep();
};

const person1 = new Person();
const student = new Student();
const worker = new Worker();

getSleepingHours(person1)
getSleepingHours(student)
getSleepingHours(worker)