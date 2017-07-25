// problem: Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

var myArgs = process.argv;
myArgs = myArgs.slice(2);                        

var word = myArgs[i];

function reverse (word) {
    var scrambled = '';    
    for (var i = word.length - 1; i >= 0; i--) {
        scrambled += word[i];
    }
    word = scrambled;
    return word;
}

for (var i = 0; i < myArgs.length; i++) {          
    console.log(reverse(myArgs[i]));    
}