var clickButton = $('#clicked');
var questionPage = $('#question-page');
console.log(questionPage);


clickButton.on('click', function() {
    console.log("click");
    questionPage.removeClass("hidden");


});
