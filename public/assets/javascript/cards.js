//----------------------------------Global Variables
var i = 0;
var length, URL;

//----------------------------------Functions

// functions empties the div that contains the flashcard before invoking AJAX query to repopulate card with properties from the object at index int
function updateCard(int){
    $('.flashcard').empty();
    $.ajax({
        url: URL,
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
 
// onclick of .leftArrow the subtract function is called that decreases the variable i by 1 and then executes the updateCard function with i as its argument
function subtract(){
    if(i > 0){
        i--;
        updateCard(i);
    }
}

// onclick of the .rightArrow the add function is called that increases the variable i by 1 and then executes the updateCard function with i as its argument
function add(){
    if(i <= length-2){
        i++;
        updateCard(i);
    }
}

// when the page loads and the window is ready, the updateCard function is executed with variable i= 0 as its argument
$(window).ready(function(){
    // window.location.href returns the href (URL) of the current page
    // setting the URL request for ajax query based on the href of the current page
    if (window.location.href.split('/flashcards/')[1] == 'all_cards'){
        URL = '/flashcards/community_cards/';
    }
    console.log(i);
    updateCard(i);

});

// if the left key on keyboard is pressed then the subtract function is run and if the right key on the keyboard is pressed then the add function is run
$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {   
        subtract();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        add();
    }   
});