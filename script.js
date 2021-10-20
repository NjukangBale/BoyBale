
// countdown
var bale = 10;
var timer
function count() {
    if(bale){
        console.log(bale)

    }
    else {
        clearInterval(timer)
    }
    bale--
    if(bale === 0){
        console.log("DONE!")
    }
}
timer = setInterval(function(){count()}, 1000)



// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame(){

  function counter(){
    var count = 0;
    return function(){
        return ++count
    }
  }

  var gameCount = counter();

  function fn(){
    var randomNum = Math.random();
    if(randomNum > 0.75){
      console.log(gameCount());
        clearInterval(timerId);
    } else {
      gameCount()
    }
  }
  
  var timerId = setInterval(fn, 1000);
} 



// write a function called isEven which takes in a number and return true if the number is even and false if it is not
function isEven(num){
  if(num % 2 == 0){
      return "True"
    }  else {
      return "False"
    }
  
}

console.log(isEven(3));
console.log(isEven(2));


// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

function isOdd(num){
  if(num % 2 !== 0){
    return "True";
  } else{
    return "False";
  }
  
}
console.log(isOdd(3));
console.log(isOdd(14));



// write a function called isPrime which takes in a number and returns true if the number is a prime number
function isPrime(n){
  if (n===1) {
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(9));
console.log(isPrime(17));


//   prime , even and odd
function value(value1, callback){
  return callback(value1) .map(fn => fn())
}
function isEven(a){
  return[
      () => a % 2 === 1
  ]
}
function isPrime(n){
  if (n===1) {
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(9));
console.log(isPrime(17));


// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.


function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
    
  } else{
    return a*b;
  }
  
}
console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));


// Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it  .

function numberFact(n, fn){
  return fn(n);
}
console.log(59,isEven);
console.log(59,isOdd);
console.log(59,isPrime);