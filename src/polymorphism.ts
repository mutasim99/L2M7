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

// getSleepingHours(person1);
// getSleepingHours(student);
// getSleepingHours(worker);

//* Example2

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    };
};

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width
    }
    getArea(): number {
        return this.height * this.width;
    }
}

const circleArea = new Circle(6);
const rectangleArea = new Rectangle(50, 5)
console.log(circleArea.getArea().toFixed(3));
console.log(rectangleArea.getArea());
