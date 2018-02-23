sap.ui.define([
	] , function () {
		"use strict";

		return {

			formatMapUrl: function(sStreet, sZIP, sCity, sCountry) {
				return "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x640&markers="
					+ jQuery.sap.encodeURL(sStreet + ", " + sZIP +  " " + sCity + ", " + sCountry);
			}
		};

	}
);