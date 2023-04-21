let mainImg = document.getElementById("mainImg");

let e = document.getElementById("changecard");

function onChange() {
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  alert(text);

  if(value == "jandar")
  {
    mainImg.setAttribute("src", "images/jandar_straight_blank_960603_original.png");
  }

  if(value == "ullar")
  {
    mainImg.setAttribute("src", "images/ullar_straight_blank_693955_original.png");
  }
}
e.onchange = onChange;
onChange();


