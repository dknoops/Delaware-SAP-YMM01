function initModel() {
	var sUrl = "/SAPGateway/sap/opu/odata/sap/YMM01_DELAWARE_PROJECT_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}