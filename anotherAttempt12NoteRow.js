var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var invert = function inversion() {
    console.log('hello');
    var sum;
    for (i = 0; array.length; i++) {
        result = array.length - array[i];
        sum = result++;
    }
    console.log(sum);
    return sum;
}
// // from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length;
    var t;
    var i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    var resultArray = array
    console.log(resultArray);
    invert(resultArray);
    return resultArray;
}
console.log(shuffle(array));

// console.log(resultArray);

    

// console.log(inversion());

// console.log("retrograde: " + array.reverse());


// inversion array index - 11 (or the array length)