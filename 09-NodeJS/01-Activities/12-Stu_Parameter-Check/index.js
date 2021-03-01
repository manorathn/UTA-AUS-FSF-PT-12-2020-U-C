// returns an array of command line arguments
console.log(process.argv);

if (process.argv[2] === process.argv[3]) {
    console.log("true")
} else {
    console.log("false")
};

// arguments passed from the command line are accessed by index
process.argv[0];
console.log(process.argv[2]);