sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.upao.s4publicupaosalmonitorreservas',
            componentId: 'ItemObjectPage',
            contextPath: '/Reserv/_Item'
        },
        CustomPageDefinitions
    );
});