// inMemory expression
let value1 = null;
let value2 = null;
let action = null;

let $input = $("#input");

// reset memory
function handlePressDel() {
  $input.val("0");
  resetInMemoryExpression();
  $(".selected").removeClass("selected");
}
function calculateIfNeeded() {
  if (value2 != null) calculate();
}
function highlightPressedButtom() {
  $(".selected").removeClass("selected");
  $(event.currentTarget).addClass("selected");
}
function handleSelecteMathFunc(funcName) {
  calculateIfNeeded();
  action = funcName;
  highlightPressedButtom();
}
function calculate() {
  let result = null;
  let historyRecord = null;
  if (value2 == null) return;

  if (action == "+") {
    result = parseFloat(value1) + parseFloat(value2);
    historyRecord = value1.toString() + "+" + value2.toString() + "=" + result;
  }
  if (action == "-") {
    result = parseFloat(value1) - parseFloat(value2);
    historyRecord = value1.toString() + "-" + value2.toString() + "=" + result;
  }
  if (action == "*") {
    result = parseFloat(value1) * parseFloat(value2);
    historyRecord = value1.toString() + "*" + value2.toString() + "=" + result;
  }
  if (action == "/") {
    result = parseFloat(value1) / parseFloat(value2);
    historyRecord = value1.toString() + "/" + value2.toString() + "=" + result;
  }

  result = parseFloat(result.toPrecision(12));
  value1 = result;
  $input.val(result);
  value2 = null;
  action = "=";
  $(".selected").removeClass("selected");
  addToHistory(historyRecord);
}

//
function resetInMemoryExpression() {
  value1 = null;
  value2 = null;
  action = null;
}
function appendToIMEvalue1(num) {
  value1 = parseFloat((value1 || "") + num).toString();
}
function appendToIMEvalue2(num) {
  value2 = parseFloat((value2 || "") + num).toString();
}
function updateInputFromMemory(valueNumber) {
  switch (valueNumber) {
    case 1: {
      $input.val(value1);
      break;
    }
    case 2: {
      $input.val(value2);
      break;
    }
    default:
      break;
  }
}

// add an actione to the value
function handlePressNumber(num) {
  if (action == "=") resetInMemoryExpression();

  if (action == null) {
    appendToIMEvalue1(num);
    updateInputFromMemory(1);
  } else {
    appendToIMEvalue2(num);
    updateInputFromMemory(2);
    $(".selected").removeClass("selected");
  }
}
//
function handlePressZero() {
  if (action == null) {
    if (value1 == null) {
      value1 = "0";
      updateInputFromMemory(1);
    } else if (value1 == "0") return;
    else {
      value1 = value1 + "0";
      updateInputFromMemory(1);
    }
  } else {
    if (value2 == null) {
      value2 = "0";
      updateInputFromMemory(2);
    } else if (value2 == "0") return;
    else {
      value2 = value2 + "0";
      updateInputFromMemory(2);
    }
  }
}

function handlePressEqual() {
  calculate();
}

function addToHistory(record) {
  $("ul").append(
    '<li class="history-item">' +
      '<span class="calculation-result">' +
      record +
      "</span>" +
      '<button class="record-del" > Delete </button>' +
      '<button class="Notise">Add Notes</button>' +
      "</li>"
  );
}
$(document).on("click", ".record-del", function (e) {
  $(e.target).parents("li").first().remove();
});

$(document).on("click", ".Notise", function (e) {
  var historyItem = $(e.target).parents(".history-item").first();

  openNotesEditor(historyItem, "", true);
});

$(document).on("click", ".notes", function (e) {
  var historyItem = $(e.target).parents(".history-item").first();
  let notes = $(e.target);

  notes.addClass("active");

  openNotesEditor(historyItem, notes.text(), false);
});

function openNotesEditor(selectedNote, text, isAdd) {
  var button = isAdd
    ? "<button class='OK add-history-item'>Add</button>"
    : "<button class='OK save-history-item'>Save</button>";

  selectedNote.append(
    '<div class="Dialog-Notes">' +
      "<textarea class='form-control' autofocus>" +
      text +
      "</textarea>" +
      button +
      "</div>"
  );
}

$(document).on("click", ".add-history-item", function (e) {
  var historyItem = $(e.target).parents(".history-item").first();
  let text_AreaDialog = $(".form-control").val();

  historyItem.append('<div class="notes">' + text_AreaDialog + "</div>");

  closeNoteEditor(historyItem);
});

$(document).on("click", ".save-history-item", function (e) {
  var historyItem = $(e.target).parents(".history-item").first();
  let text_AreaDialog = $(".form-control").val();

  historyItem.find(".notes.active").text(text_AreaDialog);

  closeNoteEditor(historyItem);
});

function closeNoteEditor(selectedNote) {
  selectedNote.find(".notes.active").removeClass("active");
  selectedNote.find(".Dialog-Notes").remove();
}

$(document).bind("keypress", function (e) {
  console.log(e);
  switch (e.which) {
    case 13:
      alert("you pressed enter");
      break;
    case "41":
      alert(1);
      break;
  }
});

function handlePressPersent() {
  if (action == null) {
    value1 = value1 / 100;

    $input.val(value1);
  } else if (action == "*") {
    value2 = value2 / 100;
    $input.val(value2);
  } else if (action == "/") {
    value2 = value2 / 100;
    $input.val(value2);
  } else if (action == "+") {
    value2 = (value2 / 100) * value1;
    $input.val(value2);
  } else if (action == "-") {
    value2 = (value2 / 100) * value1;
    $input.val(value2);
  }
}
function handlePressPlusMinus() {
  value1 = value1 * "-1";
  $input.val(value1);
}

function handlePressDecimal() {
  if (action == null) {
    if (value1 == null) {
      value1 = "0.";
      $input.val(value1);
    } else {
      if (value1.indexOf(".") === -1) value1 += ".";
      $input.val(value1);
    }
  } else {
    if (value2 == null) {
      value2 = "0.";
      $input.val(value2);
    } else {
      if (value2.indexOf(".") === -1) value2 += ".";
      $input.val(value2);
    }
  }
}
// document.getElementById("resHistory").addEventListener("click", myClick);

// function myClick() {
//   // console.log("yea");
//   var A = document.getElementById("input").value;
//   console.log(A);
//   document.getElementById("history_1").innerHTML += A;
// }
