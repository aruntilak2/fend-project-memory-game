var allcards = document.querySelectorAll('.card');
var openedcards= [];
var matchedcards=[];
var counterhtml = document.querySelector('.moves');
counter=0;
var matches = 0;
var modalbtn = document.getElementById('modalbttn');
var modal = document.getElementById('mymodal');
var closebttn = document.getElementsByClassName('closebttn')[0];
var modalcontent=document.getElementsByClassName('modal-content')[0];
var text = document.getElementsByClassName('text')[0];
//  var modal =document.querySelector('#modal');
// modalbtn.addEventListener('click', openmodal);
function openmodal() {
  modal.style.display="block";
  var text = document.getElementsByClassName('text')[0];
//   text.innerHTML="Congrats! You won the game";
};
closebttn.addEventListener('click', closemodal);
function closemodal() {
  modal.style.display= "none";
};


timer = document.querySelector('.time-display');
allcards.forEach(function(card){
    card.addEventListener('click', function(){
      console.log(card.length);
      
    if(!card.classList.contains('show') && (!card.classList.contains('open')) && (!card.classList.contains('match'))){
         openedcards.push(card);
         card.classList.add('open','show')
            if (openedcards.length == 2 ){
                counter+=1;
                counterhtml.innerHTML=counter;
            var firstcard = openedcards[0].querySelector('i').classList.item(1);
            console.log(firstcard);
            var secondcard = openedcards[1].querySelector('i').classList.item(1);
            console.log(secondcard);
            if (firstcard === secondcard){
                openedcards[0].classList.add('match','open', 'show');
                openedcards[1].classList.add('match','open','show');
                console.log('Success');
                console.log(openedcards);
                matchedcards.push(firstcard,secondcard);
                openedcards=[];
                matches++;
                console.log("Maches:" +matches);
                 
                if (matches === 8 ){
                    openmodal();
                    text.innerHTML="Congrats! You won the game.You Matched: "+matches+" in "+ counter+ "moves";
                //    alert("GREAT! You Matched: "+matches+" in "+ counter+ "moves");
                 }
            }
            else if (card.classList.contains('show') && (card.classList.contains('open')) && (card.classList.contains('match'))){
                alert("Congrats");
            }
            else {                
                console.log('Please Try again');
                counterhtml.innerHTML=counter;
                console.log("Maches:"+matches);
                setTimeout(function(){
                openedcards.forEach(function(card){
                openedcards=[];    
                card.classList.remove('open','show',);
                });
                }, 300);
                console.log(openedcards);
                 clear();
                function clear() {
                    var lihtml = document.querySelector('.deck');
                  return lihtml;  
                }
            }      
        }  
     } 
    });
}); 
    

    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
    }
    var restart = document.querySelector('.restart');
    var lihtml = document.querySelector('.deck');
    var presethtml=lihtml.innerHTML;
    let cards = document.querySelectorAll('.card');
    restart.addEventListener('click', function(){
         shuffle(cards);
        lihtml.innerHTML = presethtml;     
        var allcards = document.querySelectorAll('.card');
        allcards.forEach(function(card){
        card.addEventListener('click', function(){
        console.log(card);
         card.classList.add('open','show')
        });
     }); 
 });
