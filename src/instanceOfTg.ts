// class Person {
//     name: string;

//     constructor(name: string) {
//         this.name = name
//     };

//     doSleep(numOfHours: number) {
//         return console.log(`${this.name} sleep ${numOfHours} hours in a day`);

//     };
// };


// class Student extends Person {
//     studentId: number
//     constructor(name: string, studentId: number) {
//         super(name);
//         this.studentId = studentId;
//     };

//     doStudy(numOfHours: number) {
//         return console.log(`${this.name} reads ${numOfHours} hours daily`);

//     };
// };

// class Teacher extends Person {
//     teacherId: number
//     constructor(name: string, teacherId: number) {
//         super(name);
//         this.teacherId = teacherId;
//     };

//     takeClass(numOfHours: number) {
//         return console.log(`${this.name} sir take class ${numOfHours} hours daily`);

//     };
// };

// const getUserInfo = (user: Person) => {
//     if (user instanceof Student) {
//         user.doStudy(10)
//     }else if (user instanceof Teacher) {
//         user.takeClass(5);
//     }else{
//         user.doSleep(10);
//     };
// };

// const student1= new Student('Mutasim', 123);
// const teacher1= new Teacher('Salam', 123);
// const person1= new Person('hatii');

// getUserInfo(person1);


//? Function guard ====>

class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    };

    doSleep(numOfHours: number) {
        return console.log(`${this.name} sleep ${numOfHours} hours in a day`);

    };
};

class Student extends Person {
    studentId: number
    constructor(name: string, studentId: number) {
        super(name);
        this.studentId = studentId;
    };

    doStudy(numOfHours: number) {
        return console.log(`${this.name} reads ${numOfHours} hours daily`);

    };
};

class Teacher extends Person {
    teacherId: number
    constructor(name: string, teacherId: number) {
        super(name);
        this.teacherId = teacherId;
    };

    takeClass(numOfHours: number) {
        return console.log(`${this.name} sir take class ${numOfHours} hours daily`);

    };
};

const isStudent = (user: Person) => {
    return user instanceof Student;
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    } else if (isTeacher(user)) {
        user.takeClass(5)
    } else {
        user.doSleep(10)
    };
}

const student1 = new Student('Mutasim', 123);
const teacher1 = new Teacher('Salam', 123);
const person1 = new Person('hatii');

getUserInfo(teacher1);