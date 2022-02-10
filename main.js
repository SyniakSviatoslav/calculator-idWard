

const form = document.getElementById('signup');
const allScore = document.getElementById("final");




let finalScore = 0;

let perfomanceWeightInputs = document.getElementsByClassName("perfomanceWeight");
let perfomanceScoreInputs = document.getElementsByClassName("perfomanceScore");

let easyOfUseWeightInputs = document.getElementsByClassName("EasyOfUseWeight");
let easyOfUseScoreInputs = document.getElementsByClassName("EasyOfUseScore");

let complianceWeightInputs = document.getElementsByClassName("ComplianceWeight");
let complianceScoreInputs = document.getElementsByClassName("ComplianceScore");

let some = (weights, scores) => {

  let smallSome = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(+arr[i].value)
    }
    return newArr
  };

  let weightsValues = smallSome(weights);
  let scoreValues = smallSome(scores);
  let result = [weightsValues, scoreValues]

  return result
};

let calculate = (arr) => {

  let sum = arr[0].reduce((prev, curr) => +prev + +curr);

  let weightPercentage = arr[0].map((item) => (item / sum * 100));
  let weightedValueSum = 0;
  for (let i = 0; i < weightPercentage.length; i++) {
    weightedValueSum += (weightPercentage[i] * arr[1][i] / 100)

  }
  let result = [Math.round(+weightedValueSum / 0.05), weightedValueSum];
  let counter = makeCounter(result);
  (counter(result))
  return result;
}

function makeCounter(arr) {
  // console.log(arr)
  return function () {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        finalScore += arr[arr.length - 1]
      }
    }
  };
}


let showColor = (score) => {
  let valueColor = "";

  if (score > 74) {
    valueColor = "green"
  }
  else if (score > 49) {
    valueColor = "yellow"
  }
  else if (score > 24) {
    valueColor = "orange"
  }
  else {
    valueColor = "red"
  }
  return valueColor
};

let showWord = (score) => {
  let word = "";

  if (score > 74) {
    word = "Great - The solution meets your requirements overall. Albeit not perfect, it is worth testing and working with the solution provider to further improve it"
  }
  else if (score > 49) {
    word = "Good - The solution meets many of your requirements, but still has significant gaps. It is worth testing if you get clear answers on how the gaps will be filled"
  }
  else if (score > 24) {
    word = "Mediocre - The solution might meet some of your requirements, but it has really big gaps. Only worth testing if you are convinced that it will get better over time"
  }
  else {
    word = "Bad - The solution does not meet most of the requirement that are important to you. Avoid at all costs"
  }
  console.log(word)
  return word
};




form.addEventListener('submit', function (e) {

  e.preventDefault();

  let perfomanceScore = calculate(some(perfomanceWeightInputs, perfomanceScoreInputs))[0];
  document.getElementById("perfomanceFinalScore").innerHTML = perfomanceScore + "%";
  document.getElementById("perfomanceFinalScore").style.color = showColor(perfomanceScore);

  let easyScore = calculate(some(easyOfUseWeightInputs, easyOfUseScoreInputs))[0];
  document.getElementById("easyFinalScore").innerHTML = easyScore + "%";
  document.getElementById("easyFinalScore").style.color = showColor(easyScore);

  let complianceScore = calculate(some(complianceWeightInputs, complianceScoreInputs))[0];
  document.getElementById("complianceFinalScore").innerHTML = complianceScore + "%";
  document.getElementById("complianceFinalScore").style.color = showColor(complianceScore);

  let finalNumber = (finalScore / 2 / 4 / 5 * 100).toFixed();


  let text = showWord(finalNumber);
  let check = document.getElementById("check");
  let div = document.createElement('div');
  div.id = 'text';
  div.innerHTML = text;

  check.appendChild(div);

  document.getElementById("final").innerHTML = "Your Score is " + finalNumber + "%";
  document.getElementById("final").style.color = showColor(finalNumber);



});




