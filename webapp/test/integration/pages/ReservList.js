sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.upao.s4publicupaosalmonitorreservas',
            componentId: 'ReservList',
            contextPath: '/Reserv'
        },
        CustomPageDefinitions
    );
});