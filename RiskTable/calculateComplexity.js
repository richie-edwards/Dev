var log = console.log;

var dataReviewedInput = 2;
var problemPointsInput = 2;
var riskInput = 'moderate';

var myArray = [dataReviewedInput, problemPointsInput, riskInput];
log('Input array is: ' + myArray);
log('My complexity is: ' + calculateComplexity(myArray));

 // convert the string risk and any nulls to respective int
function convertNullAndRiskToInt(myArray) {
  //
  for(i = 0; i < myArray.length; i++) {
    switch (myArray[i]) {
      case (undefined || null):
        myArray[i] = 0;
        break;
      case 'Minimal':
        myArray[i] = 1;
        break;
      case 'Low':
        myArray[i] = 2;
        break;
      case 'Moderate':
        myArray[i] = 3;
        break;
      case 'High':
        myArray[i] = 4;
        break;
    }
  }
  log('Converted array values to respective int: ' + myArray);
  return myArray;
}

// Calculate the overall MDM complexity
function calculateComplexity(myArray) {
  
  // make string risk (ie 'Low') an int (ie 2) in array
  var pointsArray = convertNullAndRiskToInt(myArray);

  // sort the array from smallest to largest
  pointsArray.sort(function(a, b) {
    return a - b;
  });
    
  // ignore lowest and take index 1 as answer
  var resultPoints = pointsArray[1];
  
  // return correct complexity
  var complexity = null;
  switch (true) {
    case (resultPoints == 1):
      complexity = 'Straighforward';
      break;
    case (resultPoints == 2):
      complexity = 'Low';
      break;
    case (resultPoints == 3):
      complexity = 'Moderate';
      break;
    case (resultPoints >= 4):
      complexity = 'High';
      break;
  }
  return complexity;
}