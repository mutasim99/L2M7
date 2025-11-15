class Counter {
    static count: number = 0;

    static increment() {
       return Counter.count = Counter.count + 1;
    };

    decrement(){
        return Counter.count = Counter.count - 1;
    };
};

//? when use static in variable

// const instance1 = new Counter();
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());



// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());

//? when use static in method then we don't need to create instance

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

