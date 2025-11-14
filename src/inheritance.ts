//* if we have same property in many classes then we can add a parent class;

class parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} is sleep at least ${numOfHours} hours in a day`);

    };
}


class Student extends parent {

};

class Developer extends parent {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {

        super(name,  age, address);
        this.designation = designation;
    };



    doCode(numOfHours: number) {
        console.log(`${this.name} have to doing code at least ${numOfHours} hours in a day`);

    };
};


const student1 = new Student('Mr Atel', 15, 'Rangpur');
const developer = new Developer('Mr. X', 26, 'khulna', 'jounior developer')

developer.getSleep(56)
