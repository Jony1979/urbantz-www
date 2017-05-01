var STATUSES = {
    all: {icon: 'ion-ios-checkmark-outline', label: 'All systems'},
    api: {icon: 'ion-ios-gear-outline', label: 'API'},
    db: {icon: 'ion-ios-pie-outline', label: 'DB'},
    web: {icon: 'ion-ios-person-outline', label: 'WEB'},
    arcgis: {icon: 'ion-ios-world-outline', label: 'OPTIM'},
    ftp: {icon: 'ion-ios-cloud-upload-outline', label: 'FTP'},
}

app.filter('serviceDef', function() {
    return function(key) {
        return STATUSES[key]
    }
})

app.directive('status', function($rootScope, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        template: `<div class="status-board">
                <span ng-repeat="s in inferredStatuses" class="{{s.status}}">
                    <span><i class="{{s.icon}}"></i></span>
                    <span>{{s.label}}</span>
                </span>
            </div>`,
        scope: {
            items: '@',
            statuses: '<'
        },
        link: function($scope, $element, $attrs) {
            $scope.$watchCollection('statuses', statuses => {
                $scope.inferredStatuses = $scope.items.split(',').map(x => x.trim().toLowerCase()).map(x => STATUSES[x]);
            })
        }
    }
})

app.controller('StatusController', function($scope, $firebaseArray) {
	var ref = new Firebase("https://urbantz-status-page.firebaseio.com/event");
    
    $scope.statuses = $firebaseArray(ref.orderByChild("date").limitToLast(100));

	function update(statuses) {
        console.log(statuses);
        if ($scope.statuses && $scope.statuses.length) {
            var reversed = angular.copy($scope.statuses).filter(s => s.environment === ($scope.sandbox ? 'sandbox': 'production').toLowerCase()).reverse();

            Object.keys(STATUSES).forEach(key => {
                var status = reversed.find(s => s.service === key);
                
                if (!status || status.state === 'OK') {
                    STATUSES[key].status = 'ok';
                } else {
                    STATUSES[key].status = status.state === 'ALARM' ? 'alert': 'amber';
                }
            })

            if (STATUSES.api.status !== 'ok' || STATUSES.db.status !== 'ok') {
                STATUSES.all.status = 'alert';
            } else if (STATUSES.arcgis.status !== 'ok' || STATUSES.ftp.status !== 'ok') {
                STATUSES.all.status = 'amber';
            } else {
                STATUSES.all.status = 'ok';
            }

            STATUSES.all.icon = {
                ok: 'ion-ios-checkmark-empty',
                amber: 'ion-ios-minus-empty',
                alert: 'ion-ios-close-empty'
            }[STATUSES.all.status]

            $scope.filteredStatuses = reversed;
        }
    }

    $scope.$watchCollection('statuses', update);
    $scope.$watch('sandbox', update);
})