---
title: Support
position: 9
lang: en
ref: support
body_classes: dark
nav: true
---

<p>Fill in the form below and we will contact you as soon as possible. Alternatively, you can send us an email at <a href="mailto:support@urbantz.com">support@urbantz.com</a></p>
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
                        <label>Phone</label>
                        <input type="text" ng-pattern="'[0-9\+]{5,}'" ng-model="view.supportInfo.phone" ng-required="true">
                    </md-input-container>
                </div>

                <div flex="100" layout="row" layout-xs="column">
                    <md-input-container flex="100">
                        <label>Subject</label>
                        <input type="text" ng-model="view.supportInfo.subject" ng-required="true">
                    </md-input-container>
                </div>

                 <md-input-container class="md-block">
                 	<label>Please describe your issue as precisely as possible</label>
                 	<textarea ng-model="view.supportInfo.description" rows="5" ng-required="true"  md-maxlength="500"  md-select-on-focus></textarea>
                 </md-input-container>
            </div>
	        <div ng-show="view.supportFormSubmitted">
    	        <h1 translate># {{supportTicket}}</h1>

        	    <p layout-padding>Your support ticket has been created with the ID {{supportTicket}}.  Thank you for working with us, we'll be in touch very soon.</p>
            </div>
        </md-card-content>
    </md-card>

	<div layout="row" layout-align="center center" ng-show="!view.supportFormSubmitted">
    	<md-button class="md-raised md-primary" ng-disabled="supportForm.$invalid" ng-click="view.submitSupportForm(view.supportInfo)">Submit</md-button>
    </div>
</form>