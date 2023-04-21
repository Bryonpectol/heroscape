let mainImg = document.getElementById("mainImg");

let e = document.getElementById("changecard");

let testImg = document.getElementById("testImg");

let charImg = document.getElementById("charImg");

function test() {
  testImg.setAttribute("src", charImg);
}

function onChange() {
  var value = e.value;
  var text = e.options[e.selectedIndex].text;

  if(value == "jandar")
  {
    mainImg.setAttribute("src", "/images/jandar_straight_blank_960603_original.png");
  }

  if(value == "ullar")
  {
    mainImg.setAttribute("src", "/images/ullar_straight_blank_693955_original.png");
  }

  if(value == "utgar")
  {
    mainImg.setAttribute("src", "/images/utgar_straight_blank_original.png");
  }

  if(value == "vydar")
  {
   mainImg.setAttribute("src", "/images/vydar_straight_blank_963207_original.png");
  }
}
e.onchange = onChange;
onChange();



function test() {

 // Check if the file is an image.

 if (charImg.type && !charImg.type.startsWith('image/')) {

   alert('File is not an image.' + ", " + charImg.type + ", " + charImg);

   return;

 }

 const reader = new FileReader();

 reader.addEventListener('load', (event) => {

   img.src = event.target.result;

 });

 reader.readAsDataURL(charImg);

}


