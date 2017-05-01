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
			url: 'https://nexuxw7zte.execute-api.eu-west-1.amazonaws.com/production',
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
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
			url: 'https://hosvq66q80.execute-api.eu-west-1.amazonaws.com/production',
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
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
			url: 'https://a4vvb2px10.execute-api.eu-west-1.amazonaws.com/production',
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': 'Jhpps7TDHj3O9ZQMz38Gx2cGQv06L51Z56fuOT1f'
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
	
	$scope.view.doDownload = function() {
        $scope.view.updateClicked = true;
        
        var a = document.createElement('a');
        
        if ($scope.view.os === 'ios') {
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
                a.href = 'itms-services://?action=download-manifest&url=http://static.urbantz.com.s3-website-eu-west-1.amazonaws.com/app/eu-west-1.plist';
            } else {
                a.href = 'http://static.urbantz.com.s3-website-eu-west-1.amazonaws.com/app/urbantz-eu-west-1.ipa';
            }
			a.download = true;
			console.log(a);
        } else if ($scope.view.os === 'android') {
            a.href = 'https://play.google.com/store/apps/details?id=com.urbantz';
			a.target = '_blank';
        }

        a.click();
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