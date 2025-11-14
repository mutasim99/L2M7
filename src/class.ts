// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     hasTail:boolean;


//     constructor(name: string, species: string, sound: string, hasTail:boolean) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//         this.hasTail = hasTail;
//     };

//     makeSound(){
//         console.log(`${this.name} is a domestic animal and  making sound like ${this.sound} and has tail ${this.hasTail}`);

//     }
// };


//? parameter properties ==> strip only mode;


class Animal {

    constructor(public name: string, public species: string, public sound: string, public hasTail: boolean) {

    };

    makeSound() {
        console.log(`${this.name} is a domestic animal and  making sound like ${this.sound} and has tail ${this.hasTail}`);

    }
};

const dog = new Animal('dogesh', 'dog', 'ghew ghew', true);
const cat = new Animal('cat bhai', 'cat', 'mew mew', true);

dog.makeSound();

