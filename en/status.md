---
title: Status
position: 8
lang: en
ref: status
body_classes: dark
menu: true
footer: true
hidetitle: true
---

<div ng-controller="StatusController">
    <div ng-show="statuses.length">
        <div layout="row" layout-xs="column" layout-align="center stretch">
            <div layout="column">
                <status statuses="statuses" items="all,api,db,web,arcgis,ftp"></status>
                <div layout="row" layout-xs="column" layout-align="space-between center" layout-padding>
                    <md-switch ng-model="sandbox">Sandbox</md-switch>
                    <twitter-follow user="urbantz_ops"></twitter-follow>
                </div>
            </div>
            <div>
               <twitter-timeline user="urbantz_ops"></twitter-timeline>
            </div>
            <div>
                <p ng-if="!filteredStatuses.length">No recent events to communicate at the moment</p>
                <table class="status-table" ng-if="filteredStatuses.length">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="status in (filteredStatuses | orderBy: '-date').slice(0,4) track by status.$id" class="{{status.state}}">
                            <td ng-bind="(status.service | serviceDef).label"></td>
                            <td ng-bind="status.date | date: 'dd-MM-yyyy HH:mm'"></td>
                            <td ng-bind="status.state"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div layout="row" layout-align="center center" ng-show="!statuses.length">
        <md-progress-circular md-mode="indeterminate" class="md-accent" md-diameter="120"></md-progress-circular>
    </div>
    <p>If you wish you can contact us <a href="contact">here</a> or by email at <a href="mailto:support@urbantz.com">support@urbantz.com</a></p>
</div>