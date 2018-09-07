$(document).ready(function(){
    showDecks();
    showCards();
    toggleBubbles();
});

function showDecks(){
    var address = '/decks/dash';
    $.ajax({
        url: address,
        method: 'GET'
    }).then(function(res){
        //res is the array of objects for my decks
        var length = res.length
            for(var i = 0; i<length;i++){
                var deckName = res[i].name;
                var viewDeck = $('<a>').attr('href','/flashcards/deck/' + res[i].id).text('  view deck'); 
                var editDeck = $('<a>').attr('href','/decks/edit/' + res[i].id).text('  edit deck'); 
                var newDiv = $('<div>').attr('class','p-2 bd-highlight').append(deckName, viewDeck, editDeck);
               
                $('.deckHolder').append(newDiv);
        }
    });
}

function showCards(){
    var address = '/flashcards/community_cards'; 
    $.ajax({
        url: address,
        method: 'GET'
    }).then(function(res){
        var length = res.length;
        for(var i = 0; i<length;i++){
            var cardFront = res[i].front;
            var add = $('<a>').attr('href','/decks/add/'+ res[i].id).text('[+]');
            var newDiv = $('<div>').text('Card # ' + res[i].id + ' : ').append(cardFront, add);
            
            $('#availCards').append(newDiv);
        }
    });
}

function toggleBubbles() {
    $('#toggle').on('click', function() {
        $('.speech-bubble').toggle();
        $('.speech-bubble-t2').toggle();
    })
};
