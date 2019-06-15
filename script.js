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
var img = $('<img class="dog-img" src="" />'); // define image to use
$(document.body).append(img); // append image to screen (no source is set yet)

$.get("https://dog.ceo/api/breeds/list") // load the breed
    .then(function(data) { //promise - after the breed is loaded, then do this function
        data.message.forEach(function(currentBreed) { // iterate through breed list
            $('.js-dog-breed').append(`<option val="${currentBreed}"> ${currentBreed} </option>`); // append an option for the select drop down list. use tilda `
        })
    
});

$('.js-dog-breed').change(function() { // add change event listener when breed is selected
    $.get(`https://dog.ceo/api/breed/${this.value}/images/random`) // replace url breed/xxx/images/random with ${this.value} 
        .then(function(data) { // promise 
            img.attr('src', data.message); // set img attribute
        })
});

