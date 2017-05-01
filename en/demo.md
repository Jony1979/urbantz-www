---
title: Book my demo
lang: en
ref: demo
body_classes: dark
---

<div ng-show="!view.formSubmitted">
<p>Fill in the form below and we will contact you as soon as possible. Thanks for your interest in URBANTZ!</p>
	
<form name="joinForm"  novalidate>
<md-card>
<md-card-content>
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
            <label>Phone</label>
            <input type="text" ng-pattern="'[0-9\+]{5,}'" ng-model="view.connectInfo.phone" ng-required="true">
        </md-input-container>
    </div>
	<div flex="100" layout="row" layout-xs="column">
        <md-input-container flex="100">
            <label translate>Company name</label>
            <input type="text" ng-model="view.connectInfo.companyName" ng-required="true">
        </md-input-container>

        <md-input-container flex="100">
            <label translate>How did you hear about us?</label>

            <md-select ng-model="view.connectInfo.heard" required>
                <md-option value="website" translate>Via our website</md-option>
                <md-option value="article" translate>Via a web or press article</md-option>
                <md-option value="conference" translate>In a conference</md-option>
                <md-option value="friend" translate>Through someone you know</md-option>
                <md-option value="social" translate>Via social networks</md-option>
                <md-option value="advert" translate>Through advertisements</md-option>
                <md-option value="other" translate>Other</md-option>
            </md-select>				
        </md-input-container>
    </div>
    <div flex="100" layout="row" layout-xs="column">
    <md-input-container flex="100">
        <label translate>Additional remarks</label>
        <input type="text" ng-model="view.connectInfo.additionalRemarks">
    </md-input-container>
    </div>
</md-card-content>
</md-card>
<div layout="row" layout-align="center center">
		<md-button class="md-primary md-raised" ng-disabled="joinForm.$invalid" ng-click="view.submitDemoForm(view.connectInfo)">Submit</md-button>
	</div>	
</form>
</div>

<div ng-show="view.formSubmitted">
    <h1 translate>Thank you!</h1>

    <p style="text-align: center" layout-padding>Your demo request has been sent and we're already scrumbling around to prepare. We'll be in touch very soon.</p>
</div>