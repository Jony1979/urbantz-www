function changeBackground(i, key) {
	if (i) {
		var url = '/user/themes/halcyon/img/backgrounds/'+key+'-min.jpg'
		i.style.backgroundImage = 'url('+url+')';
	}
}

var backgrounds = ['bg', 'paris', 'london', 'tokyo', 'rio', 'moscow'];

app.directive('slideAnimation', function() {
	return {
		restrict: 'E',
		link: function($scope, $element, $attrs) {
			var index = 0;
			var s = backgrounds.map(function(b) {
				var e = document.createElement('div');
				
				changeBackground(e, b);
				return e;
			});
			
			s.forEach(function(e) {
				e.classList.add('animated');
				
				$element.append(e);
			})
			$element[0].style.width = (backgrounds.length * 100) + 'vw';
			
			function slide() {
				s.forEach(function(e, i) {
					var k = index % backgrounds.length;
					var p = k * 100;
					$element[0].style.transform = 'translate3d(-'+p+'vw,0,0)'
				})
								
				index++;
				
				//if (index === backgrounds.length) index = 0;
			}
			slide();
			setInterval(slide, 5000);
		}
	}
})