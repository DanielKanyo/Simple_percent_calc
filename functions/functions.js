function main() {
  var calcButton = document.getElementById('calculateButton');
  calcButton.addEventListener('click', function() {
    var maxPoint = document.getElementById('maxPoint').value;
    var achivedPoint = document.getElementById('achievedPoint').value;
    //if variables values are not empty then...
    if (maxPoint && achivedPoint) {
      calculate(maxPoint, achivedPoint);
    } else {
      alert('Fill the input fields!');
    }
  });

  var clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    document.getElementById('achievedPoint').value = '';
    document.getElementById('resultNumber').innerHTML = '';
  });
}

function calculate(maxPoint, achivedPoint) {
  var result = (achivedPoint / maxPoint) * 100;
  result = result.toFixed(2);
  var resultDiv = document.getElementById('resultNumber');
  resultDiv.innerHTML = result + '%';
}

main();
