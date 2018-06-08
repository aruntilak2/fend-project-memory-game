var allcards = document.querySelectorAll('.card');
var deck = document.querySelector('.deck');
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
var timer = document.querySelector('.time-display');
   
 deck.addEventListener('click', startTimer, {once: true});
    allcards.forEach(function(card){
        card.addEventListener('click', function(){
        console.log(card.length);
        startTimer, {once: true};       
        if(!card.classList.contains('show') && (!card.classList.contains('open')) && (!card.classList.contains('match'))){
            openedcards.push(card);
            card.classList.add('open','show')           
                if (openedcards.length == 2 ){
                    counter+=1;
                    counterhtml.innerHTML="Moves:"+counter;
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
                        text.innerHTML="Congratulations! You won the game. You Matched all the "+matches+ " pairs in "+counter+" moves"+" in "+minute+" mins "+second+" secs";;
                        timer.innerHTML = "Time: "+minute+" mins "+second+" secs";
                        clearTimeout(interval);                   
                    }
                }
                // else if (card.classList.contains('show') && (card.classList.contains('open')) && (card.classList.contains('match'))){
                //     alert("Congratulations");
                // }
                else {                
                    console.log('Please Try again');
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
      ;  
 }
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

  