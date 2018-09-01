var URL = '/decks/dash';

$(document).ready(function(){
    showDecks();
});

function showDecks(){
    console.log('SHOW DECKS function works');
    $.ajax({
        url: URL,
        method: 'GET'
    }).then(function(res){
        length = res.length;
        console.log(length);
        for(var i = 0; i<length;i++){
            var deckName = res[i].name;
            var viewCard = $('<a>').attr("href","/flashcards/deck/" + res[i].id).text('view cards'); 
            var newLi = $('<li>').append(deckName, viewCard);
           
            $('.deckHolder').append(newLi);
        }
    });
}