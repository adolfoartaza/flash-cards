app.controller('MainController', function ($scope, FlashCardsFactory) {
	$scope.getAllCards = function() {
		$scope.currentCategory = null;
		
		// FlashCardsFactory.get... returns a promise, that has to be translated into action using .then method
		FlashCardsFactory.getFlashCards().then(function (cards) {
			$scope.flashCards = cards;
		});
	};

	// Note that $scope.getAllCards() gets called by the controller itself, to ensure that once the controller
	// is loaded, the cards get loaded as well.
	$scope.getAllCards();

	$scope.categories = [ 'MongoDB', 'Express', 'Angular', 'Node' ];

	
	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(function (cards) {
			$scope.flashCards = cards;
		});
	}
	
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

});