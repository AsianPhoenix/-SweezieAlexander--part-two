let name = prompt("Welcome to GC Mini-Golf! What is your name?");
let totalHoles = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?");
let totalScore = 0;
let holeCount = 3;

if (totalHoles == "6") {
  holeCount = 6;
}

let totalPutts = 0;

for (let i = 0; i < holeCount; i++) {
  totalPutts += parseInt(prompt("How many putts for hole " + (i + 1) + "? (par: 3)"))
}

let totalPar = totalPutts - (3 * holeCount);

if (totalPutts > 3 * holeCount) {
  console.log("Nice try, " + name + "... Your total par was: +" + totalPar + ".");
} else if (totalPutts < 3 * holeCount) {
  console.log("Great job, " + name + "! Your total par was " + totalPar + ".");
} else if (totalPutts == (3 * holeCount)) {
  console.log("Good game, " + name + ". Your total par was 0.");
}
