let mainImg = document.getElementById("mainImg");

let e = document.getElementById("changecard");

function onChange() {
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  alert(text);
}
e.onchange = onChange;
onChange();


