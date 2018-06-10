var allcards = document.querySelectorAll('.card');
var deck = document.querySelector('.deck');
var openedcards= [];
var matchedcards=[];
var counterhtml = document.querySelector('.moves');
counter = 0;
var matches = 0;
var modalbtn = document.getElementById('modalbttn');
var modal = document.getElementById('mymodal');
var closebttn = document.getElementsByClassName('closebttn')[0];
var modalcontent=document.getElementsByClassName('modal-content')[0];
var text = document.getElementsByClassName('text')[0];
var timer = document.querySelector('.time-display');
var starlist= document.querySelectorAll('.fa.fa-star');
starlist[0].style.color="red";
starlist[1].style.color="red";
starlist[2].style.color="red";
starlist[3].style.color="red";
starlist[4].style.color="red";
 deck.addEventListener('click', startTimer, {once: true});
    allcards.forEach(function(card){
        card.addEventListener('click', function(){
        console.log(card.length);
        startTimer, {once: true};       
        if(!card.classList.contains('show') && (!card.classList.contains('open')) && (!card.classList.contains('match'))){
            openedcards.push(card);
            card.classList.add('open','show')           
            if (openedcards.length == 2){
                    counter+=1;
                    if (counter>1 && counter<10){
                        starlist[4].style.color="black";
                    }
                    if (counter>10 && counter<20){
                        starlist[4].style.color="black";
                        starlist[3].style.color="black";                        
                    }
                    if (counter>20 && counter<30){
                        starlist[4].style.color="black";
                        starlist[3].style.color="black";
                        starlist[2].style.color="black";
                    }
                    if (counter>30 && counter<40){
                        starlist[4].style.color="black";
                        starlist[3].style.color="black";
                        starlist[2].style.color="black";
                        starlist[1].style.color="black";
                    }
                    counterhtml.innerHTML="Moves:"+counter;
                var firstcard = openedcards[0].querySelector('i').classList.item(1);
                console.log(firstcard);
                var secondcard = openedcards[1].querySelector('i').classList.item(1);
                console.log(secondcard);
                 // Rating    
                 let rating= matches/(counter*0.2);
                 rating = rating.toFixed(2);
                console.log('your rating is :'+rating);
                 //Rating
                 let ratinground = Math.round(rating);
                     if( rating < 1.99 ){
                         starlist[0].style.color="red";
                         }
                     if( ratinground ===2 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         }
                     if( ratinground ===3 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         }
                     if( ratinground === 4){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         starlist[3].style.color="red";
                         }
                     if( rating >4.2 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         starlist[3].style.color="red";
                         starlist[4].style.color="red";
                         }  
                    if (counter === matches){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         starlist[3].style.color="red";
                         starlist[4].style.color="red";
                         }  
                    // }
                // Check if all matched
                if (firstcard === secondcard){
                    openedcards[0].classList.add('match','open', 'show');
                    openedcards[1].classList.add('match','open','show');
                    console.log('Success');
                    console.log(openedcards);
                    matchedcards.push(firstcard,secondcard);
                    openedcards=[];
                    matches++;
                    console.log("Maches:" +matches);
                    console.log('your rating is :'+rating);
                    // Won
                    if (matches === 8 ){
                        openmodal();
                        timer.innerHTML = "Time: "+minute+" mins "+second+" secs";
                        clearTimeout(interval); 
                        let ratinground = Math.round(rating);
                        starlist[0].style.color="black";
                        starlist[1].style.color="black";
                        starlist[2].style.color="black";
                        starlist[3].style.color="black";
                        starlist[4].style.color="black";
                     if( rating < 1.99 ){
                         starlist[0].style.color="red";
                         }
                     if( ratinground ===2 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         }
                     if( ratinground ===3 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         }
                     if( ratinground === 4){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         starlist[3].style.color="red";
                         }
                     if( rating >4.2 ){
                         starlist[0].style.color="red";
                         starlist[1].style.color="red";
                         starlist[2].style.color="red";
                         starlist[3].style.color="red";
                         starlist[4].style.color="red";
                         }  
                    if (counter === matches){
                    starlist[0].style.color="red";
                        starlist[1].style.color="red";
                        starlist[2].style.color="red";
                        starlist[3].style.color="red";
                        starlist[4].style.color="red";
                        }  
                         text.innerHTML="Congratulations! You won the game. You Matched all the "+matches+ " pairs in "+counter+" moves"+" in "
                                        +minute+" mins "+second+" secs. Your star rating is : "+rating+"  " 
                                        + starlist[0].outerHTML
                                        + starlist[1].outerHTML 
                                        + starlist[2].outerHTML
                                        + starlist[3].outerHTML
                                        + starlist[4].outerHTML;
                    }
                }
                // else if (card.classList.contains('show') && (card.classList.contains('open')) && (card.classList.contains('match'))){
                //     alert("Congratulations");
                // }
                //Keep checking untill all match!
                else {                
                    console.log('Please Try again');
                    console.log('your rating is :'+rating);
                    counterhtml.innerHTML="Moves: "+counter;
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
    //TO open modal
    function openmodal() {
        modal.style.display="block";
        var text = document.getElementsByClassName('text')[0];
        };
        closebttn.addEventListener('click', closemodal);
        function closemodal() {
        modal.style.display= "none";
    };
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
// play again
 var playagain = document.querySelector('#playagain');
 playagain.addEventListener('click', repeatgame);
 function repeatgame(){
    stopTimer();
    counterhtml.innerText ="Moves: 0";
    timer.innerHTML = "Time: 0 Mins : 0 Secs "
    startTimer();
    moves=0;
     counter=0;
   //  console.log("working");
 }
 //Timer function
let second = 0, minute = 0;
let interval;
function startTimer(){
    interval = setInterval(function(){
        second++;
        timer.innerHTML = "Time: "+minute+" mins "+second+" secs";
        if(second == 60){
            minute++;
            second=0;
        }
    },1000);
}
var stopTimer = function(){
    timer.innerHTML = "Time: 0 mins 0 secs";
  };

  