$.ajax({
    url: '/decks/dash',
    method: 'GET'
}).then(function(res){
    // console.log(res);
    for(var j =0; j< res.length; j++){
        var option = $('<option>').attr('name', 'decks_id').attr('value', res[j].id).html(res[j].name);
        $('.deckOptions').append(option);   
    }
});