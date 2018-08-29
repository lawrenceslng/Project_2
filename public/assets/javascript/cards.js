
var i = 0;
var length;

function updateCard(int){
    $('.flashcard').empty();
    $.ajax({
        url: '/flashcards/community_cards/',
        method: 'GET'
    }).then(function(res){
        length = res.length;
        console.log(res);
        var category = $("<p>").html("Category: " + res[int].category);
        var front = $("<p>").html("Front: " + res[int].front);
        var back = $("<p>").html("Back: " + res[int].back);

        $('.flashcard').append(category, front, back);
    });
}
    
$(window).ready(function(){
    console.log(i);
    updateCard(i);
});
function subtract(){
    if(i > 0){
        i--;
        updateCard(i);
    }
}

function add(){
    if(i <= length-2){
        i++;
        updateCard(i);
    }
}


