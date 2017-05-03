---
title: Support
lang: fr
ref: support
body_classes: dark
nav: true
hidetitle: true
---

<p>Remplissez le formulaire ci-dessous, et nous vous contacterons dès que possible. Vous pouvez aussi nous envoyer un email à <a href="mailto:support@urbantz.com">support@urbantz.com</a></p>

<form name="supportForm" novalidate ng-init="view.supportInfo={}">
    <md-card>
        <md-card-content>
            <div ng-show="!view.supportFormSubmitted">
                <div flex="100" layout="row" layout-xs="column">
                    <md-input-container flex="50" flex-xs="100">
                        <label>Email</label>
                        <input type="email" ng-model="view.supportInfo.email" ng-required="true">
                    </md-input-container>

                    <md-input-container flex="50" flex-xs="100">
                        <label>Téléphone</label>
                        <input type="text" ng-pattern="'[0-9\+]{5,}'" ng-model="view.supportInfo.phone" ng-required="true">
                    </md-input-container>
                </div>
                <div flex="100" layout="row" layout-xs="column">
                <md-input-container flex="100">
                    <label>Objet</label>
                    <input type="text" ng-model="view.supportInfo.subject" ng-required="true">
                </md-input-container>
                </div>


                <md-input-container class="md-block">
                 	<label>Décrivez votre problème aussi précisément que possible</label>
                 	<textarea ng-model="view.supportInfo.description" rows="5" ng-required="true"  md-maxlength="500"  md-select-on-focus></textarea>
                 </md-input-container>
            </div>

            <div ng-show="view.supportFormSubmitted">
                <h1 translate># {{supportTicket}}</h1>

                <p layout-padding>Votre ticket support à été créé avec le numéro de suivi {{supportTicket}}.  Merci de travailler avec nous, nous prendrons contact avec vous dés que possible.</p>
            </div>
        </md-card-content>
    </md-card>
    
    <div layout="row" layout-align="center center" ng-show="!view.supportFormSubmitted">
		<md-button class="md-primary md-raised" ng-disabled="supportForm.$invalid" ng-click="view.submitSupportForm(view.supportInfo)">Soumettre</md-button>
	</div>	
</form>