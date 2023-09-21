// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Map Callback
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

console.log(double([1,2,3,4,5]));

/* Write an ES2015 Version of the above code block*/
const double = arr => arr.map(val => val * 2);

console.log(double([5, 6, 7, 8, 9]));

// ES5 Map Callback
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

console.log(squareAndFindEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


/* Write an ES2015 Version of the above code block*/
const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => num ** 2);
    const evens = squares.filter((square) => square % 2 === 0);
    return evens;
};

console.log(squareAndFindEvens([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));