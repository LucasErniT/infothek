sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'qperior/infothek/Q_Infothek_Projects/model/formatter'
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("qperior.infothek.Q_Infothek_Projects.controller.CustomerProjects", {
		formatter: formatter,
	});
});