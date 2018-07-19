var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber (array, newName) { // passed
  array.push(newName);
  var pos = array.indexOf(newName);
  pos = pos + 1;
  return `Welcome, ${newName}. You are number ${pos} in line.`;
}

console.log(takeANumber(katzDeli, "Ada"));
console.log(takeANumber(katzDeli, "Grace"));


let deliLine = ["Steven", "Blake", "Avi"];
function nowServing (array) { // passed
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstNameinLine = array[0];
    array.shift(firstNameinLine);
    return `Currently serving ${firstNameinLine}.`;
  }
}

nowServing(deliLine);


let currLine = ["Bill", "Jane", "Ann"];
let currLineCopy = currLine.slice();
currLineCopy.unshift("The line is currently: ");

function currentLine (array, item) { 
  if (array.length === 0) {
    return "The line is currently empty.";
    
  } else {
    for (let i = 0, l = array.length; i < l; i++) {
      array[i] = `${i}. ${array[i]}`;
    // return array[pos];
      
    }
  }
}
    
currentLine(currLineCopy);


function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};