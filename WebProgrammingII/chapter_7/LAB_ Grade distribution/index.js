function parseScores(scoresString) {
  // TODO: Compete the function
  return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
  // TODO: Compete the function
  let distribution = [0, 0, 0, 0, 0];
  for (let i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] >= 90) {
      distribution[0]++;
    } else if (scoresArray[i] >= 80) {
      distribution[1]++;
    } else if (scoresArray[i] >= 70) {
      distribution[2]++;
    } else if (scoresArray[i] >= 60) {
      distribution[3]++;
    } else {
      distribution[4]++;
    }
  }
  return distribution;
}

function setTableContent(userInput) {
  // TODO: Compete the function
  let scores = parseScores(userInput);
  let distribution = buildDistributionArray(scores);
  let firstRow = document.getElementById("firstRow");
  let thirdRow = document.getElementById("thirdRow");

  for (let i = 0; i < distribution.length; i++) {
    let td = document.createElement("td");
    let div = document.createElement("div");
    div.style.height = `${distribution[i] * 10}px`;
    div.className = `bar${i}`;
    td.appendChild(div);
    firstRow.appendChild(td);

    let td2 = document.createElement("td");
    td2.innerHTML = distribution[i];
    thirdRow.appendChild(td2);
  }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
