var selectedCells = [];
var cellBackground = 'lightblue';
var minRiskLabel, lowRiskLabel, modRiskLabel;

function initElement() {
  minRiskLabel = document.getElementById('minimalRisk');
  lowRiskLabel = document.getElementById('lowRisk');
  modRiskLabel = document.getElementById('moderateRisk');

  var cells = document.getElementsByClassName('cell');

  for(let item of cells) {
    item.addEventListener("click", function() {
        if(selectedCells.includes(item.id)) {
            selectedCells.splice(selectedCells.indexOf(item.id), 1);
            removeCellHighlight(item);  
        } else {
            selectedCells.push(item.id);
            highlightCell(item);
        } 
        calculateRisk(selectedCells);
    });
  }
   
  /*for (var i = 0; i < cells.length; i++) {	      
	var item = cells[i];
    item.addEventListener("click", function(item) {				
        if(selectedCells.includes(item.id)) {
            selectedCells.splice(selectedCells.indexOf(item.id), 1);
            removeCellHighlight(item);  
        } else {
            selectedCells.push(item.id);
            highlightCell(item);
        } 
        calculateRisk(selectedCells);
    });
  }
}*/
 

function highlightCell(element) {
  element.style.backgroundColor = cellBackground;
}

function removeCellHighlight(element) {
    element.style.backgroundColor = '';
}

function calculateRisk(array) {
  // clean start
  removeCellHighlight(minRiskLabel);
  removeCellHighlight(lowRiskLabel);
  removeCellHighlight(modRiskLabel);
  
  var finalRisk;

  var risks = [];
  array.forEach(function(elmentID) {
    risks.push(document.getElementById(elmentID).getAttribute("risk"));
  });
  var hasMod = risks.includes('moderate');
  var hasLow = risks.includes('low');
  var hasMin = risks.includes('minimal');
  
  if(hasMod) {
    highlightCell(modRiskLabel);
    finalRisk = modRiskLabel;
  } else if (hasLow && !hasMod) {
    highlightCell(lowRiskLabel);
    finalRisk = lowRiskLabel;
  } else if (hasMin && !hasMod && !hasLow) {
    highlightCell(minRiskLabel);
    finalRisk = minRiskLabel;
  } else if (!hasMod && !hasLow && !hasMin) {
    console.log('NOTHING');
  }
  
  console.log(finalRisk.id);
  return finalRisk.id;
}









