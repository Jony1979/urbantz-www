'use strict';

app.directive('priceCard', function($timeout) {
	var pricings = [
		{min: 0, max: 1000, unit: 0, name: 'Brussels', icon: 'brussels_atomium', support: 'world'},
		{min: 1000, max: 3000, unit: 0.25, name: 'Dubai', icon: 'dubai_hotel', support: 'world email'},
		{min: 3000, max: 10000, unit: 0.19, name: 'Sidney', icon: 'sidney_opera', support: 'world email telephone'},
		{min: 10000, max: 25000, unit: 0.18, name: 'Paris', icon: 'paris_eiffel', support: 'world email telephone person'},
		{min: 25000, max: 50000, unit: 0.17, name: 'London', icon: 'london_bridge', support: 'world email telephone person'},
		{min: 50000, max: 100000, unit: 0.15, name: 'New-York', icon: 'newyork_manhattan', support: 'world email telephone person'},
		{min: 100000, max: 100001, unit: '?', name: 'Tokyo', icon: 'pagoda', message: 'More', pricing: 'TALK TO US', support: 'world email telephone person'}
	];
	
	return {
		restrict: 'E',
		bindToController: true,
		controllerAs: 'view',
		template: `
		<div layout="column" layout-align="start center">
			<img style="opacity: 0.5;width:100px;" ng-src="/user/themes/halcyon/img/landmarks/black-128x128/{{view.pricing.icon}}.png">
			<h1 style="margin: 0;">{{view.text}}</h1>
			<span style="font-weight: 300;color: #aaa;">Slide left or right</span>
			<md-slider autofocus flex="100" style="width: 400px" min="1000" max="{{view.maxPrice}}" ng-model="view.parcels" step="100" aria-label="red"></md-slider>			
		</div>

		<table class="pricing-table">
			<tr>
				<th>Plan</th>
				<th>Monthly volume</th>
				<th>Price per task</th>
				<th>Support</th>
			</tr>
			<tr ng-repeat="p in view.pricings" ng-class="{active: view.pricing.name === p.name}" ng-click="view.setParcels(p.max)">
				<td>{{p.name}}</td>
				<td>{{p.message || (p.max | number)}}</td>
				<td>{{p.pricing || '€'+(p.unit | number: 2)}}</td>
				<td><i ng-repeat="s in p.support.split(' ')" class="ion-ios-{{s}}-outline"></i></td>
			</tr>
		</table>
		`,
		controller: function($scope) {
			this.parcels = 1000;
			this.pricings = pricings;
			this.maxPrice = pricings[pricings.length-1].max;
			this.setParcels = p => this.parcels = p;
			
			var hasChanged = null;
			
			$scope.$watch('view.parcels', numParcels => {
				var price = 0, dp;
				for (var i=0; i < pricings.length; i++) {
					if (pricings[i].min < numParcels && numParcels <= pricings[i].max) {
						dp = pricings[i].unit * (numParcels - (i ? pricings[i-1].max: 0));
						price += dp;
						this.price = price;
						this.pricing = pricings[i];
						break;
					} else {
						dp = pricings[i].unit * (pricings[i].max - pricings[i].min);
						price += dp;
					}
				}
				if (hasChanged) $timeout.cancel(hasChanged);
				this.text = numParcels;
				
				hasChanged = $timeout(() => {
					this.text = this.pricing.name;
				}, 1000)
			})
		},
		link: function($scope) {
			
		}
	}
})