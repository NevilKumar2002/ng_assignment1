let card1= document.getElementById("card1");
let card2= document.getElementById("card2");
let card3= document.getElementById("card3");

let cardContainer= document.getElementById("cardContainer")
let cards=[card1, card2, card3]

cardContainer.addEventListener("mousemove", function (event) {


  var percentage = (event.clientX / cardContainer.offsetWidth) * 100;
  var selectedRange = Math.floor((percentage / 100) * 20);
  var startIndex = Math.floor(selectedRange / 10);
   function displayCard(){
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove("hightlightCard");
       
        if (i === startIndex) {
          cards[i].classList.add("hightlightCard");
         }
         if(i===cards.length)
         {
           i=0;
         }
        
     
    }

   }

  setTimeout(displayCard, 1000);
}
)


















