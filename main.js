

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

form.addEventListener('submit', function (e) {

  e.preventDefault();

  let perfomanceScore = calculate(some(perfomanceWeightInputs, perfomanceScoreInputs))[0] + "%";
  document.getElementById("perfomanceFinalScore").innerHTML = perfomanceScore;

  let easyScore = calculate(some(easyOfUseWeightInputs, easyOfUseScoreInputs))[0] + "%";
  document.getElementById("easyFinalScore").innerHTML = easyScore;

  let complianceScore = calculate(some(complianceWeightInputs, complianceScoreInputs))[0] + "%";
  document.getElementById("complianceFinalScore").innerHTML = complianceScore;

  document.getElementById("final").innerHTML = (finalScore / 2 / 4 / 5 * 100).toFixed() + "%";
});
