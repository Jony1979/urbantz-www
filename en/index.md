---
title: Home
layout: home
lang: en
demo: true
body_classes: home
---
<div class="home">
    <slide class="cover" vh-fix>
        <video poster="/img/video-min.png" playsinline autoplay on-video-ended="ended=true" ng-class="{ended: ended}">
            <source src="/img/video/video.webm" type='video/webm; codecs="vp8.0, vorbis"'>
            <source src="/img/video/video.ogv" type='video/ogg; codecs="theora, vorbis"'>
            <source src="/img/video/video.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'>
        </video>

        <div>
            <img src="/img/logo-white-2.png" class="logo">

            <div>
                <p class="usp">The best software to manage your<br> first and last mile operations</p>
                <!--<p class="usp usp-small">Save time, miles and delight your customers</p>-->
            </div>
            <md-button class="md-primary demo-button" href="demo">Book my demo</md-button>
        </div>

        <i class="ion-ios-arrow-down annoyingArrow" onClick="bringIntoView(document.querySelectorAll('slide')[1], 800)"></i>
    </slide>

    <slide class="services">
       <div layout="row" layout-align="center center"><h2>Services</h2></div>

       <md-card ng-init="sections=['First Mile', 'Last Mile', 'On Demand', 'Servicing']">
            <div layout="row" layout-xs="column" layout-align="stretch center" layout-align-xs="start stretch" class="services-header" ng-init="view.serviceSection=0">
                <md-button flex ng-repeat="s in sections" ng-click="view.serviceSection=$index" ng-class="{active: view.serviceSection===$index}">{{s}}</md-button>
            </div>

            <md-tabs md-selected="view.serviceSection" md-dynamic-height class="services-content">
                <md-tab label="1">
                    <img src="/img/home/3 Activities/Icons-01.png">
                    <h3>BUILD A STRONG FIRST MILE SERVICE</h3>
                    <p>We solve your efficiency problems by saving you miles and time throughout your first mile operations. With us, you can even mix first and last mile activities within the same round to guarantee your vehicles are always operating at maximum efficiency.
                   </p>
                    <div align="center"><md-button class="md-primary md-raised" href="demo">More info</md-button></div>
                </md-tab>

                <md-tab label="2">
                    <img src="/img/home/3 Activities/Icons-02.png">
                    <h3>SCALE UP WITH EASE</h3>
                    <p>URBANTZ was initially conceived to optimise your rounds in your last mile activities. Our platform not only allows you operate better, it enables you to grow your business at your will while you continue to create, manage and control your activities.
                    </p>
                    <div align="center"><md-button class="md-primary md-raised" href="demo">More info</md-button></div>
                </md-tab>

                <md-tab label="3">
                    <img src="/img/home/3 Activities/Icons-03 A.png">
                    <h3>DELIGHT YOUR CUSTOMER</h3>
                    <p>Be it whether you have last minute changes or because your business is based on being flexible, URBANTZ allows you mix planned and last minute activities. Because why wouldn't this platform be as flexible as you?
                    </p>
                    <div align="center"><md-button class="md-primary md-raised" href="demo">More info</md-button></div>
                </md-tab>

                <md-tab label="4">
                    <img src="/img/home/3 Activities/Icons-04.png">
                    <h3>OPTIMIZE YOUR SERVICES</h3>
                    <p>URBANTZ isn't limited to parcels, we also handle your various servicing optimisation needs. Stay paperless and keep track of your operations whilst offering a first class solution to your people on the ground.
                    </p>
                    <div align="center"><md-button class="md-primary md-raised" href="demo">More info</md-button></div>
                </md-tab>
            </md-tabs>
        </md-card>
    </slide>

    <slide class="map" class-into-view="into-view">
        <div layout="row" layout-xs="column" layout-align="space-between center">
            <h1>Manage <b>any</b> type of vehicle</h1>
            <div layout="column">
                <img src="/img/home/4 Any type of vehicle/Vehicle icons-01.png">
                <span>Bike</span>
            </div>
            <div layout="column">
                <img src="/img/home/4 Any type of vehicle/Vehicle icons-02.png">
                <span>Cargo Bike</span>
            </div>
            <div layout="column">
                <img src="/img/home/4 Any type of vehicle/Vehicle icons-03.png">
                <span>Car</span>
            </div>
            <div layout="column">
                <img src="/img/home/4 Any type of vehicle/Vehicle icons-04.png">
                <span>Van</span>
            </div>
            <div layout="column">
                <img src="/img/home/4 Any type of vehicle/Vehicle icons-05.png">
                <span>Truck</span>
            </div>
        </div>
    </slide>

    <slide class="features" vh-fix>
		<h1>Scale-up your delivery activities</h1>
		<div layout="row" layout-xs="column">
        <div layout="column" class="boxes">
			<div layout="column" layout-padding>
				<img src="/img/home/5 Scale up your delivery activities/Photo 1.jpg">
			</div>
			<div layout="column" layout-padding class="inverted">
                <div class="title"><h2>Enhance your performance</h2></div>
				<p>Create the best optimised rounds, dispatch easily and be more efficient.</p>
			</div>
        </div>
        <div layout="column" class="boxes">
			<div layout="column" layout-padding flex-order-xs="1">
                <div class="title"><h2>Become flexible</h2></div>
				<p>Easily adapt to demand and ensure a high quality service at all times.</p>
			</div>
            <div layout="column" layout-padding flex-order-xs="0">
				<img src="/img/home/5 Scale up your delivery activities/Photo 2.jpg">
			</div>
		</div>
        <div layout="column" class="boxes">
			<div layout="column" layout-padding>
				<img src="/img/home/5 Scale up your delivery activities/Photo 3.jpg">
			</div>
            <div layout="column" layout-padding>
                <div class="title"><h2>Improve your services</h2></div>
				<p>Gain more visibility and keep your clients updated at all times.</p>
			</div>
		</div>
        </div>
	</slide>


    <slide class="slide-demo-button" vh-fix>
        <md-button class="md-primary demo-button" href="demo">Book my demo</md-button>
    </slide>

    <slide class="testimonials">
        <h1>Testimonials</h1>
        <div layout="row" layout-xs="column">
            <div layout="column">
                <div class="quote">Without this amazing IT solution for round optimisation with a friendly mobile interface, the quality of my services would not be the same.</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 1.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Jean Vincent Bauwens</span>
                        <span class="title">Founder, Airbornes</span>
                    </div>
                </div>
            </div>
            <div layout="column">
                <div class="quote">URBANTZ has a top notch team that is available, fast and efficient! This platform accompanies managers as well as employees for a real gain in efficiency on all levels.</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 2.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Tom Bellaire</span>
                        <span class="title">Founder, A Dom Drive</span>
                    </div>
                </div>
            </div>
            <div layout="column">
                <div class="quote">An Excellent Software with an Elite Team - Thank you Urbantz!</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 3.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Jerome Dezothez</span>
                        <span class="title">Founder, Transport Dezothez</span>
                    </div>
                </div>
            </div>
        </div>
    </slide>

    <slide class="industries">
        <h2>Industries</h2>
        <div layout="row" layout-xs="column">
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-01.png">
               <h3>Healthcare</h3>
           </div>
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-02.png">
               <h3>Retail & FMCG</h3>
           </div>
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-03.png">
               <h3>Servicing</h3>
           </div>
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-04.png">
               <h3>E-Commerce</h3>
           </div>
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-05.png">
               <h3>Parcels & Express</h3>
           </div>
           <div layout="column">
               <img src="/img/home/7 Industries/Icons-06.png">
               <h3>Reverse Logistics</h3>
           </div>
       </div>
    </slide>

    <slide class="dot-map">
        <div>
            <h2>Track it down</h2>
            <p>Whether you're working with your own drivers or with a third party using URBANTZ, you'll never lose sight of your parcels. URBANTZ allows you to stay updated in real time on the status of your parcels.</p>
        </div>
    </slide>

    <slide class="slide-demo-button" vh-fix>
        <md-button class="md-primary demo-button" href="demo">Book my demo</md-button>
    </slide>

    <slide class="partners">
        <h1>Partners</h1>

        <div layout="row" layout-xs="column" layout-align="center center">
            <div flex="50" flex-xs="100">
                <img style="width:70%" src="/img/home/8 Partners/ADNEOM Logo.png">
            </div>

            <div flex="50" flex-xs="100">
                <p><a href="http://www.adneom.com" target="_blank"><b>ADNEOM</b></a> is a 1000+ head strong consultancy specialized in Business, Management, IT and Engineering. ADNEOM is present in France, Germany, Belgium, Luxemburg and the Netherlands.</p>

                <p><b>ADNEOM is an URBANTZ GOLD PARTNER</b> This partnership allows URBANTZ to have easy access to talented individuals at the right time and enables us to deliver a top notch platform and service to our clients.</p>
            </div>
        </div>
    </slide>
    <i class="ion-ios-arrow-up annoyingArrow bottom" onClick="bringIntoView(document.querySelectorAll('slide')[0], 800)"></i>
</div>