var a = [1, 2, 3];
var b = [1, 'hello', 32];


Array.prototype.double = function () {
    


    return this.map(function(element){
        if (typeof(element) === 'number') {
            return element * element;
        } else if (typeof(element) === 'string') {
            return element + element;
        }

        return element;
    });

    var res = [];

    this.forEach(element => {
        console.log(typeof(element));
        
    });

    return res;
};

var newB = b.double();
console.log(newB);
