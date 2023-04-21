let mainImg = document.getElementById("mainImg");
let card = document.getElementById("changecard");
let e = card.value;
let cardValue = card.options[card.selectedIndex].value;

function changeCard() {
   if(cardValue == "jandar")
   {
      mainImg.setAttribute("src", "/images/jandar_straight_blank_960603_original.png");
   }
   
   if(cardValue == "ullar")
   {
      mainImg.setAttribute("src", "images/ullar_straight_blank_693955_original.png");
   }

   alert(cardValue);
}
