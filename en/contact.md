---
title: Contact
lang: en
ref: contact
body_classes: dark
nav: true
---

<p>If you want to contact us you are free to either submit the form below or to send us a message at <a href="mailto:info@urbantz.com">info@urbantz.com</a></p>

<form name="joinForm">
	<md-card>
		<md-card-content>
			<div ng-show="!view.supportFormSubmitted">
                <div flex="100" layout="row" layout-xs="column">
                    <md-input-container flex="50" flex-xs="100">
                        <label>First Name</label>
                        <input type="text" ng-model="view.connectInfo.firstName" ng-required="true">
                    </md-input-container>

                    <md-input-container flex="50" flex-xs="100">
                        <label>Last Name</label>
                        <input type="text" ng-model="view.connectInfo.lastName" ng-required="true">
                    </md-input-container>
                </div>

                <div flex="100" layout="row" layout-xs="column">
                    <md-input-container flex="50" flex-xs="100">
                        <label>Email</label>
                        <input type="email" ng-model="view.connectInfo.email" ng-required="true">
                    </md-input-container>

                    <md-input-container flex="50" flex-xs="100">
                        <label>Phone Number</label>
                        <input type="text" ng-pattern="'[0-9\+]{5,}'" ng-model="view.connectInfo.phone" ng-required="true">
                    </md-input-container>
                </div>

                <md-input-container class="md-block">
                    <label>Enter your message</label>
                    <textarea ng-model="view.connectInfo.message" rows="5" ng-required="true"  md-maxlength="500"  md-select-on-focus></textarea>
                </md-input-container>
            </div>
            
            <div ng-show="view.supportFormSubmitted">
                <h1 translate># {{supportTicket}}</h1>

                <p layout-padding>Your support ticket has been created with the ID {{supportTicket}}.  Thank you for working with us, we'll be in touch very soon.</p>
            </div>
    	</md-card-content>
    </md-card>
    <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-disabled="joinForm.$invalid" ng-click="view.submitSupportForm(view.connectInfo)">Submit</md-button>
    </div>
</form>
