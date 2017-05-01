app.directive('img', function() {
	var viewer = document.createElement('img');
	viewer.classList.add('image-viewer');
	document.body.appendChild(viewer);
	angular.element(viewer).on('click', function() {
		viewer.classList.remove('opened');
	})

	window.addEventListener('keydown', function(e) {
		if (e.keyCode === 27) {
			viewer.classList.remove('opened');
		}
	})

	return {
		restrict: 'E',
		link: function($scope, $element, $attrs) {
			if ($element && $element[0].classList.contains('thumbnail')) {
				$element.on('click', function() {
					viewer.classList.add('opened');
					viewer.src = $element[0].src;			
				})
			}
		}
	}
})