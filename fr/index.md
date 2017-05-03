---
title: Accueil
<<<<<<< HEAD
=======
position: 15
layout: home
>>>>>>> 9cb59765c640826b7015793c55dad050e939e1da
lang: fr
layout: home
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
                <p class="usp">La meilleure application pour gérer<br> vos opérations du premier et dernier kilomètre</p>
                <!--<p class="usp usp-small">Save time, miles and delight your customers</p>-->
            </div>
            <md-button class="md-primary demo-button" href="demo">Demander une Démo</md-button>
        </div>

        <i class="ion-ios-arrow-down annoyingArrow" onClick="bringIntoView(document.querySelectorAll('slide')[1], 800)"></i>
	</slide>

    <slide class="services">
       <div layout="row" layout-align="center center"><h2>Services</h2></div>

       <md-card ng-init="sections=['Premier kilomètre', 'Dernier kilomètre', 'Express', 'Servicing']">
            <div layout="row" layout-xs="column" layout-align="stretch center" layout-align-xs="start stretch" class="services-header" ng-init="view.serviceSection=0">
                <md-button flex ng-repeat="s in sections" ng-click="view.serviceSection=$index" ng-class="{active: view.serviceSection===$index}">{{s}}</md-button>
            </div>

            <md-tabs md-selected="view.serviceSection" md-dynamic-height class="services-content">
                <md-tab label="1">
                    <img src="/img/home/3 Activities/Icons-01.png">
                    <h3>UN SERVICE PERFORMANT</h3>
                    <p>Nous résolvons vos problèmes d'éfficacité en vous épargnant des kilomètres et du temps dans toutes vos opérations de premier kilomètre. Mélangez vos activités de collecte et de livraison au sein d'une même tournée afin de garantir une éfficacité optimale.</p>
                    <md-button class="md-primary md-raised" href="demo">Plus d'info</md-button>
                </md-tab>

                <md-tab label="2">
                    <img src="/img/home/3 Activities/Icons-02.png">
                    <h3>AUGMENTEZ VOS VOLUMES</h3>
                    <p>URBANTZ optimise vos activités du dernier kilomètre. Notre plateforme ne vous permet pas seulement de mieux gérer vos activités, mais d'augmenter vos volumes. Gérez, préparez et contrôlez vos tournées en toute simplicité.</p>
                    <md-button class="md-primary md-raised" href="demo">Plus d'info</md-button>
                </md-tab>

                <md-tab label="3">
                    <img src="/img/home/3 Activities/Icons-03 A.png">
                    <h3>REJOUISSEZ VOS CLIENTS</h3>
                    <p>Peu importe si vous avez des changements de dernière minute ou si votre activité est basée sur la flexibilité, URBANTZ vous permet de mélanger des tâches planifiées et les demandes express. Parce qu'il n'y a aucune raison que votre plateforme ne soit pas aussi flexible que vous !</p>
                    <md-button class="md-primary md-raised" href="demo">Plus d'info</md-button>
                </md-tab>

                <md-tab label="4">
                    <img src="/img/home/3 Activities/Icons-04.png">
                    <h3>OPTIMISEZ VOS SERVICES</h3>
                    <p>URBANTZ ne se limite pas à la gestion des colis, nous gérons aussi vos diverses activités de service. Dites aurevoir au papier et gardez un oeil sur vos opérations tout en offrant les meilleures tournées pour vos gens sur le terrain.</p>
                    <md-button class="md-primary md-raised" href="demo">Plus d'info</md-button>
                </md-tab>
            </md-tabs>
        </md-card>
    </slide>

	<slide class="map" class-into-view="into-view">
		<div layout="row" layout-xs="column" layout-align="space-between center">
            <h1>Gérez <b>tout</b> type de véhicules</h1>
			<div layout="column">
				<img src="/img/home/4 Any type of vehicle/Vehicle icons-01.png">
				<span>Vélo</span>
			</div>
			<div layout="column">
				<img src="/img/home/4 Any type of vehicle/Vehicle icons-02.png">
				<span>Vélo Cargo</span>
			</div>
			<div layout="column">
				<img src="/img/home/4 Any type of vehicle/Vehicle icons-03.png">
				<span>Voiture</span>
			</div>
			<div layout="column">
				<img src="/img/home/4 Any type of vehicle/Vehicle icons-04.png">
				<span>Camionnette</span>
			</div>
			<div layout="column">
				<img src="/img/home/4 Any type of vehicle/Vehicle icons-05.png">
				<span>Camion</span>
			</div>
		</div>
	</slide>

    <slide class="features" vh-fix>
		<h1>Augmentez vos volumes de livraison</h1>
		<div layout="row" layout-xs="column">
        <div layout="column" class="boxes">
			<div layout="column" layout-padding>
				<img src="/img/home/5 Scale up your delivery activities/Photo 1.jpg">
			</div>
			<div layout="column" layout-padding class="inverted">
                <div class="title"><h2>Soyez plus performant</h2></div>
				<p>Créez les meilleures tournées, préparez les facilement et devenez plus éfficace.</p>
			</div>
        </div>
        <div layout="column" class="boxes">
			<div layout="column" layout-padding flex-order-xs="1">
                <div class="title"><h2>Devenez flexible</h2></div>
				<p>Adaptez facilement à la demande et assurez une haute qualité de service à tout moment.</p>
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
                <div class="title"><h2>Améliorez vos services</h2></div>
				<p>Gagnez en visibilité et tenez vos clients informés à tout instant.</p>
			</div>
		</div>
        </div>
	</slide>


	<slide class="slide-demo-button" vh-fix>
		<md-button class="md-primary demo-button" href="demo">Demander une Démo</md-button>
	</slide>

    <slide class="testimonials">
        <h1>Témoignages</h1>
        <div layout="row" layout-xs="column">
            <div layout="column">
                <div class="quote">Sans ce formidable assistant informatique pour l'optimisation de tournées et son application smartphone conviviale, ma prestation ne serait pas la même.</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 1.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Jean Vincent Bauwens</span>
                        <span class="title">Fondateur, Airbornes</span>
                    </div>
                </div>
            </div>
            <div layout="column">
                <div class="quote">Urbantz a une équipe au top, disponible, rapide et efficace! Ce logiciel accompagne autant les patrons que les salariés pour un véritable gain de temps à tous les niveaux.</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 2.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Tom Bellaire</span>
                        <span class="title">Fondateur, A Dom Drive</span>
                    </div>
                </div>
            </div>
            <div layout="column">
                <div class="quote">Un logiciel au top pour une équipe de choc ! Merci URBANTZ !</div>
                <div class="user" layout="row" layout-align="center center">
                    <img src="/img/home/6 Testimonials/Photo 3.png">
                    <div layout="column" layout-align="center start">
                        <span class="name">Jerome Dezothez</span>
                        <span class="title">Fondateur, Transport Dezothez</span>
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
                <h3>Soins de santé</h3>
            </div>
            <div layout="column">
                <img src="/img/home/7 Industries/Icons-02.png">
                <h3>Vente au détail</h3>
            </div>
            <div layout="column">
                <img src="/img/home/7 Industries/Icons-03.png">
                <h3>Servicing</h3>
            </div>
            <div layout="column">
                <img src="/img/home/7 Industries/Icons-04.png">
                <h3>E-commerce</h3>
            </div>
            <div layout="column">
                <img src="/img/home/7 Industries/Icons-05.png">
                <h3>Express & colis</h3>
            </div>
            <div layout="column">
                <img src="/img/home/7 Industries/Icons-06.png">
                <h3>Logistique des retours</h3>
            </div>
        </div>
    </slide>

    <slide class="dot-map">
        <div>
            <h2>Traquez tout</h2>
            <p>Peu importe si vous travaillez avec vos propres livreurs ou des tierces parties utilisant URBANTZ, vous ne perdrez jamais vue sur vos colis. URBANTZ vous permet de suivre vos colis en temps réel.</p>
        </div>
    </slide>

    <slide class="slide-demo-button" vh-fix>
        <md-button class="md-primary demo-button" href="demo">Demander une Démo</md-button>
    </slide>

    <slide class="partners">
        <h1>Partenaires</h1>

        <div layout="row" layout-xs="column" layout-align="stretch center">
            <div flex="50" flex-xs="100">
                <img style="width:100%" src="/img/home/8 Partners/ADNEOM Logo.png">
            </div>

            <div flex="50" flex-xs="100">
                <p><a href="http://www.adneom.com" target="_blank"><b>ADNEOM</b></a> est une société de plus de 1000 consultants spécialisé dans les Business, le Management, l'Informatique et l'Ingénieurie. ADNEOM est présent en France, Allemagne, Belgique, Luxembourg et aux Pays Bas.</p>

                <p><b>ADNEOM est un PARTENAIRE URBANTZ GOLD </b> Ce partenariat permet à URBANTZ d'avoir un accès facile à des individus de talent au moment propice et nous permet d'assurer une plateforme et un service d'une qualité irréprochable pour nos clients.</p>
            </div>
        </div>
    </slide>
    <i class="ion-ios-arrow-up annoyingArrow bottom" onClick="bringIntoView(document.querySelectorAll('slide')[0], 800)"></i>
</div>