var address = '/decks/dash';

$(document).ready(function(){
    showDecks();
});

function showDecks(){
    console.log('SHOW DECKS function works');
    $.ajax({
        url: address,
        method: 'GET'
    }).then(function(res){
        length = res.length;
        console.log(length);
        for(var i = 0; i<length;i++){
            var deckName = res[i].name;
            var viewDeck = $('<a>').attr('href','/flashcards/deck/' + res[i].id).text('  view deck'); 
            var editDeck = $('<a>').attr('href','/decks/edit/' + res[i].id).text('  edit deck'); 
            var newLi = $('<li>').append(deckName, viewDeck, editDeck);
           
            $('.deckHolder').append(newLi);
        }
    });
}

