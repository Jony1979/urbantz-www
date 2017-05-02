window.app = angular.module('urbantz', ['ngMaterial', 'firebase']);

require('./filters.js');
require('./scroll.js');
require('./regroup.js');
require('./price-card.js');
require('./slide-animation.js');
require('./thumbnail.js');
require('./google-maps.js');
require('./twitter.js');
require('./status.js');
require('./tawk.to.js');

app.controller('HomeController', function($scope, $http, $mdSidenav) {
	console.log('Bootstrapping app...');
	$scope.view = $scope.view || {};
	
	$scope.view.submitDemoForm = function(answer) {
		$scope.view.formSubmitted = true;

		$http({
			method: 'POST',
			url: window.configuration.demourl,
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': window.configuration.demokey
			},
			data: answer
		}).then(function() {
			
		}, function() {
			alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
			$scope.view.formSubmitted = false;
		})
	}
	$scope.view.hello = 'World';
	$scope.view.submitSupportForm = function(f) {
		$http({
			method: 'POST',
			url: window.configuration.supporturl,
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': window.configuration.supportkey
			},
			data: {
				"helpdesk_ticket": {
					"description": (f.description || f.message) + ' (PHONE=' + f.phone + ')', 
					"subject": [f.firstName, f.lastName].filter(x => x).join(' ') + ': ' + (f.subject || 'Contact Request'),
					"email": f.email, 
					"priority": 1, 
					"status": 2
				}
			}
		}).then(function(response) {
			$scope.view.supportFormSubmitted = true;
			$scope.supportTicket = response.data.helpdesk_ticket.display_id;
		}, function() {
			alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
			$scope.view.supportFormSubmitted = false;
		})
	}

	$scope.view.submitEmailForm = function(f) {
		console.log(f);
		$http({
			method: 'POST',
			url: window.configuration.contacturl,
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': window.configuration.contactkey
			},
			data: f
		}).then(function(response) {
			$scope.view.formSubmitted = true;
		}, function() {
			alert('An unexpected error occured. Contact our support team at support@urbantz.com. Thank you.');
			$scope.view.formSubmitted = false;
		})
	}
	
	$scope.$watch('view.language', function(lang, prev) {
		if (lang != prev && prev) {
			location.href = `/${lang}/`;
		}
	})
	
	$scope.view.go = function(url) {
		location.href = url;
	}
	
	$scope.view.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}
})


app.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})

app.run(function($http) {
	$http.defaults.useXDomain = true;
})

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('pink');
})

angular.element(document).ready(function () {
	setTimeout(() => {
		if (document.body.scrollTop === 0) bringIntoView(document.querySelector('nav'), 200);
	}, 1000);
})

app.directive('onVideoEnded', function() {
	return function($scope, $element, $attrs) {
		$element[0].addEventListener('ended', function(e) {
			var x = $attrs.onVideoEnded.split('=');
			var eq = x.shift();

			console.log(eq, $scope.$eval(x.join('=')));
			if (eq) {
				$scope[eq] = $scope.$eval(x.join('='));
			} else {
				$scope.$eval($attrs.onVideoEnded);
			}
			$scope.$apply();
		},false);
	}
})