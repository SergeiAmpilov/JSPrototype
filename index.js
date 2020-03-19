var a = [1, 2, 3];
var b = [1, 'hello', 32];


Array.prototype.double = function () {
    // console.log(this);

    var res = [];

    this.forEach(element => {
        console.log(typeof(element));
        if (typeof(element) === 'number') {
            res.push(element * element);
        } else if (typeof(element) === 'string') {
            res.push(element + element);
        } else {
            res.push(element);
        }
    });

    return res;
};

var newB = b.double();
console.log(newB);
