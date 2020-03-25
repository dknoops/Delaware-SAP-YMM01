/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ehb/YMM01_App/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});