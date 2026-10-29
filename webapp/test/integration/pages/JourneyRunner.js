sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/upao/s4publicupaosalmonitorreservas/test/integration/pages/ReservList",
	"com/upao/s4publicupaosalmonitorreservas/test/integration/pages/ReservObjectPage",
	"com/upao/s4publicupaosalmonitorreservas/test/integration/pages/ItemObjectPage"
], function (JourneyRunner, ReservList, ReservObjectPage, ItemObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/upao/s4publicupaosalmonitorreservas') + '/test/flp.html#app-preview',
        pages: {
			onTheReservList: ReservList,
			onTheReservObjectPage: ReservObjectPage,
			onTheItemObjectPage: ItemObjectPage
        },
        async: true
    });

    return runner;
});

