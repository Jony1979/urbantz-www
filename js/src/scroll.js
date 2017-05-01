window.getScrollTop = function() {
	return document.body.scrollTop || document.documentElement.scrollTop;
}

window.setScrollTop = function(t) {
	document.body.scrollTop = t;
	document.documentElement.scrollTop = t;
}

window.moveScrollTop = function(dt) {
	document.body.scrollTop += dt;
	document.documentElement.scrollTop += dt;
}

window.bringIntoView_started = 0;
window.bringIntoView_ends = 0;
window.bringIntoView_y = 0;
window.bringIntoView_tick = function() {
	var distanceLeft, dt, duration, t, travel;
	t = Date.now();
	if (t < window.bringIntoView_ends) {
		dt = t - window.bringIntoView_started;
		duration = window.bringIntoView_ends - window.bringIntoView_started;
		distanceLeft = window.bringIntoView_y - getScrollTop();
	  	travel = distanceLeft * (dt / duration);
		moveScrollTop(travel);
		
		window.requestAnimationFrame(window.bringIntoView_tick);
	} else {
		setScrollTop(window.bringIntoView_y);
	}
}

window.bringIntoView = function(e, duration) {
	window.bringIntoView_started = Date.now();
	window.bringIntoView_ends = window.bringIntoView_started + duration;
	window.bringIntoView_y = e.tagName ? Math.min(document.body.scrollTop + e.getBoundingClientRect().top, document.body.scrollHeight - window.innerHeight): Math.min(e, document.body.scrollHeight - window.innerHeight);
	window.requestAnimationFrame(window.bringIntoView_tick);
}

app.directive('scrollTo', function() {
	return function($scope, $element, $attrs) {
		$element.on('click', function() {
			var element = document.querySelector($attrs.scrollTo);
			bringIntoView(element, 1200);
		})
	}
})

app.directive('intoView', function() {
	var registers = [];
	
	function isVisible(el) {
		var elemTop = el.getBoundingClientRect().top;
		return elemTop > 0 && elemTop < window.innerHeight;
	}
	
	window.addEventListener('scroll', function() {
		registers.forEach(function(i) {
			i.visible = isVisible(i.el);
		})
		
		for (var k = 0; k < registers.length; k++) {
			var i = registers[k], done;
			if (i.visible && !done) {
				i.scope.intoView({value: i.el.getAttribute('name'), inView: true});
				done = true;
			} else {
				i.scope.intoView({value: i.el.getAttribute('name'), inView: false});
			}
		}
	}, false);
	
	return {
		restrict: 'A',
		scope: {
			intoView: '&'	
		},
		link: function($scope, $element, $attrs) {
			registers.push({el: $element[0], scope: $scope});
		}
	}
})

app.directive('classIntoView', function() {
	var registers = [];
	
	function isVisible(el) {
		var elemTop = el.getBoundingClientRect().top;
		return elemTop > 0 && elemTop < window.innerHeight;
	}
	
	window.addEventListener('scroll', function() {
		registers.forEach(i => i.visible = isVisible(i.el));
		
		for (var k = 0; k < registers.length; k++) {
			var i = registers[k], done;
			
			if (i.visible && !done) {
				i.el.classList.add(i.scope.classIntoView);
				done = true;
			}
		}
	}, false);
	
	return {
		restrict: 'A',
		scope: {
			classIntoView: '@'	
		},
		link: function($scope, $element, $attrs) {
			registers.push({el: $element[0], scope: $scope});
		}
	}
})

app.directive('classScroll', function() {
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			document.onscroll = function() {
				if (document.body.scrollTop > (parseInt($attrs.classScroll || 0))) {
					$element[0].classList.add('scrolled');
				} else {
					$element[0].classList.remove('scrolled');
				}
			}
		}
	}
})