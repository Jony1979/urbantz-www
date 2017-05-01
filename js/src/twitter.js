function initTwitter() {
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        
        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };
        
        return t;
        }(document, "script", "twitter-wjs"))
}

app.directive('twitterTimeline', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        link: function($scope, $element, $attrs) {
            if (!window.twttr) initTwitter();
            
            twttr.ready(function(twttr) {
                twttr.widgets.load($element[0]);
                twttr.widgets.createTimeline(
                    {sourceType: "profile", screenName: $attrs.user},
                    $element[0],
                    {
                        width: '350',
                        height: '400',
                        related: $attrs.user
                    }
                ).then(function(el) {
                    console.log("Embedded a timeline.")
                })
            })
        }
    }
})

app.directive('twitterFollow', function() {
    return {
        restrict: 'E',
        template: `<a data-show-count="false" data-size="large"></a>`,
        replace: true,
        scope: {
            user: '@'
        },
        link: function($scope, $element, $attrs) {
             if (!window.twttr) initTwitter();

             twttr.ready(function(twttr) {
                 twttr.widgets.createFollowButton($attrs.user, $element[0], {showCount: false, size: 'large'});
             })
        }
    }
})