var input = process.argv;
input = input.slice(2);

var output = "";

for (var i = 0; i < input.length; i++) {
    output += input[i].substring(1) + input[i].substring(0, 1) + "ay" + " ";
}

output = output.slice(0,-1);
console.log(output);