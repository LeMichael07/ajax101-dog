//var img = $('<img class="dog-img" src="" />');
//$(document.body).append(img);
/*
$('.js-dog-button').click(function() {
    $(this).text("Generating Doggo...");
    $.get("https://dog.ceo/api/breeds/image/random")
        .then(function(data) { // then is a promise
        //    var img = document.createElement(img);
        //    document.body.append(img);
        $(document.body).append('<img class="js-dog-img" src=" '+ data.message +' " /> ');
        //    img.attr("src", data.mesage);
        })
        .then(function() { //promise 
            $('.js-dog-button').text('Generate  Doggo');
        });
});

*/
var img = $('<img class="dog-img" src="" />');
$(document.body).append(img);

$.get("https://dog.ceo/api/breeds/list")
    .then(function(data) {
        data.message.forEach(function(currentBreed) {
            $('.js-dog-breed').append(`<option val="${currentBreed}"> ${currentBreed} </option>`); // use tilda
        })
    
});

$('.js-dog-breed').change(function() {
    $.get(`https://dog.ceo/api/breed/${this.value}/images/random`) //replace url breed/xxx/images/random with ${this.value} 
        .then(function(data) {
            img.attr('src', data.message);
        })
});

