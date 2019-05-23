'use strict';

function getImage() {
    console.log(fetch ("https://dog.ceo/api/breed/"+document.getElementById("breed").value+"/images/random"))
    fetch ("https://dog.ceo/api/breed/"+document.getElementById("breed").value+"/images/random")
        .then(console.log(fetch ("https://dog.ceo/api/breed/"+document.getElementById("breed").value+"/images/random")))
        //.then(console.log(responseJson.message))
        .then(response => response.json())
        //.then(console.log(response))
        .then(responseJson => displayResults(responseJson))
        .catch(error=>alert(""+responseJson.message+""))
}

function displayResults(responseJson) {
    console.log(responseJson);
    console.log(responseJson.message.length);
    if (responseJson.message != "Breed not found") {
        $(".dogPic").append('<img src='+(responseJson.message)+' class="dogPic">')
    }
    else {
        $(".dogPic").append("<span>"+responseJson.message+"<span>")
    }
}

function watchForSubmit() {
    $("form").submit(event => {
        event.preventDefault();
        getImage();
    });
}

$(function() {
    console.log("Waiting for submission");
    watchForSubmit();
});