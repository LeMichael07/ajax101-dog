//var img = $('<img class="dog-img" src="" />');
//$(document.body).append(img);

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

$('.js-dog-breed').click(function(dogList) {
    $.get("https://dog.ceo/api/breeds/list")
        .then(function(data) {
            $('.js-dog-breed').append('<option>Select dog breed</option>');
            data.message.map(function(currentBreed) {
                $('.js-dog-breed').append('<option val="'+ currentBreed +'">'+ currentBreed +'</option>');
            })
        })
});


