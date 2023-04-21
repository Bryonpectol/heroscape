let mainImg = document.getElementById("mainImg");
let card = document.getElementById("changecard");
let cardValue = card.value;

function changeCard() {
   if(cardValue == "jandar")
   {
      mainImg.setAttribute("src", "/images/jandar_straight_blank_960603_original.png");
   }
}
