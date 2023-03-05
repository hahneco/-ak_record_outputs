window.name = 'John';

// const a = () => console.log('Bye ' + this.name);

const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        // const a = () => console.log('Bye ' + this.name);
        // a();
    }
}
// person.hello();

function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}

b();