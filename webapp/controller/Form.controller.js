sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ehb.YMM01_App.controller.Form", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ehb.YMM01_App.view.Form
		 */
		onInit: function () {

		},
		
		executeForm: function(oEvent) {
			var mat = this.byId("matInput").getValue();
			var plant = this.byId("plantInput").getValue();
			var batch = this.byId("batchInput").getValue();
			var date = this.byId("DP").getValue();
			var withoutStock = this.byId("isWithoutStock").getSelected();
			var update = this.byId("isUpdate").getSelected();
			
			var oData = {
				"Zustd": "1"
			}
			
			console.log(oData);
			
			//DISPLAYEN
			if(!update) {
				var filters = [];
				if (mat !== ""){
					filters.push(new Filter("Matnr", FilterOperator.EQ, mat));
				}
				if (plant !== ""){
					filters.push(new Filter("Werks", FilterOperator.EQ, plant));
				}
				if (batch !== ""){
					filters.push(new Filter("Charg", FilterOperator.EQ, batch));
				}
				if (date){
					filters.push(new Filter("Vfdat", FilterOperator.LE, date));
				}
				
				//console.log(filters);
				
				var table = this.getView().byId("table");
				//console.log(table);
				//console.log(table.getBinding("items"));
				table.getBinding("items").filter(filters);
			}
			//UPDATEN
			else{
				date = date + "T00:00:00";
				var oModel = this.getOwnerComponent().getModel();
				oModel.update("/batchSet(Mandt='211',Matnr='" + mat + "',Werks='" + plant + "',Charg='" + batch + "')", oData);
			}
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ehb.YMM01_App.view.Form
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ehb.YMM01_App.view.Form
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ehb.YMM01_App.view.Form
		 */
		//	onExit: function() {
		//
		//	}

	});

});