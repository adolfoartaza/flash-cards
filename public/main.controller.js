app.controller('MainController', function ($scope, FlashCardsFactory) {
	$scope.flashCards = FlashCardsFactory;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

});