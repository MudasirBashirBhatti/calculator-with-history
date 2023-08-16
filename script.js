var resultElement = document.getElementById("result");
    var historyList = document.getElementById("historyList");
    var result = "0";

    function clearResult() {
      result = "0";
      updateResult();
    }

    function deleteLastCharacter() {
      if (result.length === 1) {
        result = "0";
      } else {
        result = result.slice(0, -1);
      }
      updateResult();
    }

    function appendCharacter(character) {
      if (result === "0") {
        result = character;
      } else {
        result += character;
      }
      updateResult();
    }

    function calculateResult() {
      try {
        var expression = result;
        result = eval(result).toString();
        updateResult();
        addToHistory(expression + " = " + result);
      } catch (error) {
        result = "Error";
        updateResult();
      }
    }

    function updateResult() {
      resultElement.innerText = result;
    }

    function addToHistory(expression) {
      var listItem = document.createElement("li");
      listItem.innerText = expression;
      historyList.appendChild(listItem);
    }