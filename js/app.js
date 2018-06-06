/*
 * Create a list that holds all of your cards
 * 
 */
var allcards = document.querySelectorAll('.card');
var openedcards= [];
var matchedcards=[];
//  var counter=document.getElementsByClassName('.moves');
 var counterhtml = document.querySelector('.moves');
 counter=0;
var matches = 0;
allcards.forEach(function(card){
    card.addEventListener('click', function(){
      console.log(card.length);
      
    if(!card.classList.contains('show') && (!card.classList.contains('open')) && (!card.classList.contains('match'))){
         openedcards.push(card);
         card.classList.add('open','show')
        //  for ( let i = 0; i<=allcards.length;i++){
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
                // alert("Matches: "+matches+", Moves: "+ counter);
                // openedcards.push(card);
            }


            else if (card.classList.contains('show') && (card.classList.contains('open')) && (card.classList.contains('match'))){
                // openedcards.push(card);
            //    card.classList.add('open','show')
                alert("Congrats");
            }
            else {                
                // openedcards=[];
                console.log('Please Try again');
                // counter+=1;
                counterhtml.innerHTML=counter;
                console.log("Maches:"+matches);
                // alert("Matches: "+matches+", Moves: "+ counter);
                setTimeout(function(){
                openedcards.forEach(function(card){
                openedcards=[];    
                card.classList.remove('open','show',);
                // firstcard.classList.remove('open','show','disabled');
                // secondcard.classList.remove('open','show','disabled');
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

// To check if all cards are matched
// allcards.forEach(function(card){
//     card.addEventListener('click', function(){
        
    
//     }

     



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


//copied from html div class="restart">
        		// <i class="fa fa-repeat"></i>
                // </div> 
    //This restarts the deck
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


    //var presethtml=lihtml.innerHTML;

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */