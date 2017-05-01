app.directive('regroup', function($compile) {
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			var tag = $attrs.regroup, group, groups = [];
			var prevText;
			
			for (var i = 0; i < $element.children().length; i++) {
				var child = $element.children()[i];

				if (child.tagName == tag.toUpperCase()) {
					group = [];
					groups.push(group);
					group.title = child;
					group.isNew = child.innerText !== prevText; 
					prevText = child.innerText;
				} else {
					if (group) group.push(child);
				}
			}
			
			var parent = document.createElement('div');
			var index = document.createElement('ol');
			index.classList.add('index');
			
			$scope.go = function(hash) {
				var t = document.body.scrollTop + document.querySelector('a[name="'+hash+'"]').getBoundingClientRect().top - 100;
				bringIntoView(t, 1200);
			}
			
			$scope.intoView = function(value, inView) {
				inView ? document.querySelector('[hook="'+value+'"]').classList.add('md-primary'): document.querySelector('[hook="'+value+'"]').classList.remove('md-primary')
			}
			
			function createListItem(txt, i) {
				var t = document.createElement('li');
				t.setAttribute('ng-click', 'go("'+encodeURIComponent(txt)+'")');
				t.setAttribute('hook', encodeURIComponent(txt));
				
				if (txt.indexOf('-') > -1) {
					t.innerText = txt.split('-').pop();
					t.classList.add('indented');	
				} else {
					t.innerText = txt;
				}
				return t;
			}
			
			var count = 1;
			groups.forEach(function(g, i) {
				var div = document.createElement('div');
				div.classList.add('group');
				var id = encodeURIComponent(g.title.innerText);
				var aa = document.createElement('a');
				
				aa.innerText = g.title.innerText;
				aa.setAttribute('name', id);
				aa.setAttribute('into-view', 'intoView(value, inView)')
				g.title.innerText = "";
				g.title.appendChild(aa);
				
				if (g.isNew) {
					parent.appendChild(g.title);
				} else {
					angular.element(g.title).remove();
				}
				
				if (g.isNew) {
					var li = createListItem(g.title.innerText, count);
					
					index.appendChild(li);
				}
				
				g.forEach(function(e) {
					div.appendChild(e);
				})
				if (g.isNew) count++;
					
				parent.appendChild(div);
			})
			
			var e = $compile(index)($scope);
			
			angular.element(document.querySelector('.table-index')).append(e);
			
			$element.append($compile(parent)($scope));
		}
	}
})