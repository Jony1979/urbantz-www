---
title: 'Demander une Démo'
body_classes: dark
lang: fr
ref: demo
---

<div ng-show="!view.formSubmitted">
<p>Remplissez le formulaire ci-dessous, et nous vous contacterons dès que possible. Merci de votre intérêt pour URBANTZ!</p>

<form name="joinForm"  novalidate>
<md-card>
<md-card-content>
	<div flex="100" layout="row" layout-xs="column">
        <md-input-container flex="50" flex-xs="100">
            <label>Prénom</label>
            <input type="text" ng-model="view.connectInfo.firstName" ng-required="true">
        </md-input-container>

        <md-input-container flex="50" flex-xs="100">
            <label>Nom de famille</label>
            <input type="text" ng-model="view.connectInfo.lastName" ng-required="true">
        </md-input-container>
    </div>
    
	<div flex="100" layout="row" layout-xs="column">
        <md-input-container flex="50" flex-xs="100">
            <label>Email</label>
            <input type="email" ng-model="view.connectInfo.email" ng-required="true">
        </md-input-container>

        <md-input-container flex="50" flex-xs="100">
            <label>Téléphone</label>
            <input type="text" ng-pattern="'[0-9\+]{5,}'" ng-model="view.connectInfo.phone" ng-required="true">
        </md-input-container>
    </div>
    
	<div flex="100" layout="row" layout-xs="column">
        <md-input-container flex="100">
            <label translate>Nom de la société</label>
            <input type="text" ng-model="view.connectInfo.companyName" ng-required="true">
        </md-input-container>

        <md-input-container flex="100">
            <label translate>Comment avez-vous entendu parlé de nous?</label>

            <md-select ng-model="view.connectInfo.heard" required>
                <md-option value="website" translate>Via notre site internet</md-option>
                <md-option value="article" translate>Via un article de presse</md-option>
                <md-option value="conference" translate>Lors d'une conférence</md-option>
                <md-option value="friend" translate>Via une connaissance</md-option>
                <md-option value="social" translate>Via les réseaux sociaux</md-option>
                <md-option value="advert" translate>Via la publicité</md-option>
                <md-option value="other" translate>Autre</md-option>
            </md-select>				
        </md-input-container>
    </div>
    <div flex="100" layout="row" layout-xs="column">
    <md-input-container flex="100">
        <label translate>Remarque additionnelle</label>
        <input type="text" ng-model="view.connectInfo.additionalRemarks">
    </md-input-container>
    </div>
</md-card-content>
</md-card>
<div layout="row" layout-align="center center">
		<md-button class="md-primary md-raised" ng-disabled="joinForm.$invalid" ng-click="view.submitDemoForm(view.connectInfo)">Soumettre</md-button>
	</div>	
	
</form>
</div>


<div ng-show="view.formSubmitted">
    <h1 translate>Merci!</h1>

    <p style="text-align: center" layout-padding>Your demo request has been sent and we're already scrumbling around to prepare. We'll be in touch very soon.</p>
</div>
