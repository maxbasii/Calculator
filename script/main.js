let value1 = null;
let value2 = null;
let action = null;

let $input = $("#input");

function Del() {
  $input.val("0");
  value1 = null;
  value2 = null;
  action = null;
  $(".selected").removeClass("selected");
}

function handlePressPlus() {
  if (value2 != null) calculate();

  action = "+";
  $(".selected").removeClass("selected");
  $("#plus").addClass("selected");
}

// let numEqual = false;

function handlePressNumber(num) {
  if (action == "=") {
    value1 = null;
    action = null;
  }
  if (action == null) {
    value1 = parseFloat((value1 || "") + num).toString();

    $input.val(value1);
  } else {
    value2 = parseFloat((value2 || "") + num).toString();

    $input.val(value2);
    $(".selected").removeClass("selected");
  }
}
// }

function handlePressZero() {
  if (action == null) {
    if (value1 == null) {
      value1 = "0";
      $input.val(value1);
    } else if (value1 == "0") return;
    else {
      value1 = value1 + "0";
      $input.val(value1);
    }
  } else {
    if (value2 == null) {
      value2 = "0";
      $input.val(value2);
    } else if (value2 == "0") return;
    else {
      value2 = value2 + "0";
      $input.val(value2);
    }
  }
}

function handlePressEqual() {
  calculate();
}

function addToHistory(record) {
  $("ul").append(
    "<li>" +
      record +
      '<button class="record-del" > Delete </button>' +
      "<button class='Notise'>Add Notes</button>" +
      "<span>" +
      "</span>" +
      "</li>"
  );
}
$(document).on("click", ".record-del", function (e) {
  $(e.target).parent("li").first().remove();
});

$(document).on("click", ".Notise", function (e) {
  $(e.target)
    .parent("li")
    .first()
    .append(
      '<div class="Dialog-Notes">' +
        "<textarea class='form-control' autofocus></textarea>" +
        "<button class='OK'>OK</button>" +
        "</div>"
    );
});
$(document).on("click", ".OK", function (e) {
  let text_AreaDialog = $(".form-control").val();
  let targ = e.target;
  $(targ).parent("div").first().before(text_AreaDialog);
  $(targ).parent("div").first().remove();
});

// function addToHistory(record) {
//   if ($(" ul li").length < 10) {
//     $("ul").append("<li>" + record + "</li>");
//   } else {
//     $("li:first").remove();
//     $("ul").append("<li>" + record + "</li>");
//   }
// }

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

function handlePressMinus() {
  if (value2 != null) calculate();

  action = "-";
  $(".selected").removeClass("selected");
  $("#minus").addClass("selected");
}

function handlePressMultiplied() {
  if (value2 != null) calculate();

  action = "*";
  $(".selected").removeClass("selected");
  $("#Multiplied").addClass("selected");
}

function handlePressDivide() {
  if (value2 != null) calculate();

  action = "/";
  $(".selected").removeClass("selected");
  $("#Divide").addClass("selected");
}

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
