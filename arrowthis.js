// function Person() {
//   // The Person() constructor defines `this` as an instance of itself.
//   // this.age = 0;
//
//   var that = this;
//   that.age = 0;
//
//   setInterval(function growUp() {
//     // In non-strict mode, the growUp() function defines `this`
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     // this.age++;
//     that.age++;
//   }, 1000);
// }

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}

var p = new Person();
