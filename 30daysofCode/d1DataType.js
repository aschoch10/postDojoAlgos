process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    let i2 = readLine()
    let d2 = readLine()
    let s2 = readLine()
    // Print the sum of both integer variables on a new line.
    console.log(i + parseInt(i2))
    // Print the sum of the double variables on a new line.
    console.log((d+parseFloat(d2)).toFixed(1))
    // Concatenate and print the String variables on a new line
    console.log(s+s2)
    // The 's' variable above should be printed first.

}