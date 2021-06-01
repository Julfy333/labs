$(document).ready(function () {
    $.get("https://anapioficeandfire.com/api/characters/585", function(response) {
        console.log(response);
    })
});