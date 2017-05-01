app.directive('googleMap', function() {
    return {
        restrict: 'E',
        template: '<div style="min-height: 150px"></div>',
        replace: true,
        link: function($scope, $element, $attrs) {
            angular.element(document).ready(function() {
                var lat = parseFloat($attrs.latitude);
                var lng = parseFloat($attrs.longitude);

                var map = new google.maps.Map($element[0], {
                    center: {lat: lat, lng: lng},
                    zoom: parseFloat($attrs.zoom) || 10,
                    disableDefaultUI: true
                })
                
                var marker = new google.maps.Marker({
                    position: {lat: lat, lng: lng},
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: 'URBANTZ'
                })

                if ($attrs.info) {
                    var infowindow = new google.maps.InfoWindow({
                        content: $attrs.info
                    });

                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });

                    infowindow.open(map, marker);
                }
            })
        }
    }
})