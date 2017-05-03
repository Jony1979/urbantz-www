---
title: Contact
position: 13
lang: fr
body_classes: dark
ref: contact
nav: true
hidetitle: true
---

<p>Si vous souhaitez nous contacter, remplissez le formulaire ci-dessous, ou envoyez-nous un email à  <a href="mailto:info@urbantz.com">info@urbantz.com</a></p>

<form name="joinForm">
    <md-card>
        <md-card-content>
                <div ng-show="!view.supportFormSubmitted">
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

                    <md-input-container class="md-block">
                        <label>Entrez votre message</label>
                        <textarea ng-model="view.connectInfo.message" rows="5" ng-required="true"  md-maxlength="500"  md-select-on-focus></textarea>
                     </md-input-container>
                </div>

                <div ng-show="view.supportFormSubmitted">
                    <h1 translate># {{supportTicket}}</h1>

                    <p layout-padding>Votre ticket support à été créé avec le numéro de suivi {{supportTicket}}.  Merci de travailler avec nous, nous prendrons contact avec vous dés que possible.</p>
                </div>
        </md-card-content>
    </md-card>

    <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-disabled="joinForm.$invalid" ng-click="view.submitSupportForm(view.connectInfo)">Soumettre</md-button>
    </div>
</form>