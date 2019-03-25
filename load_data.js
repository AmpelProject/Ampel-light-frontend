/**
 * @file             : Ampel-frontend/load_data.js
 * License           : BSD-3-Clause
 * @author           : Unspecified
 * Date              : Unspecified
 * Last Modified Date: 25.03.2019
 * Last Modified By  : vb
 */

number_map = {
	'10': 'a', '11': 'b', '12': 'c', '13': 'd', '14': 'e', '15': 'f',
	'16': 'g', '17': 'h', '18': 'i', '19': 'j', '20': 'k', '21': 'l',
	'22': 'm', '23': 'n', '24': 'o', '25': 'p', '26': 'q', '27': 'r',
	'28': 's', '29': 't', '30': 'u', '31': 'v', '32': 'w', '33': 'x',
	'34': 'y', '35': 'z'
}

function get_ztfname(x) {
	return "ZTF" +
		x.substring(0,2) +
		number_map[x.substring(2,4)] +
		number_map[x.substring(4,6)] +
		number_map[x.substring(6,8)] +
		number_map[x.substring(8,10)] +
		number_map[x.substring(10,12)] +
		number_map[x.substring(12,14)] +
		number_map[x.substring(14,16)];
}

function load_transient_data(channelConfig, targetName, callback) {

	$.getJSON(
		channelConfig.baseURL + 
		"/download?path=" + targetName + 
		"&files=dump.json"
	).done(
		function(data) {
			console.log("Successfuly retrieved dump.json for "+targetName);	
			callback(channelConfig, data);
		}
	).fail(
		function(jqXHR, textStatus, thrownError) {
			console.log(
				"Error while getting " +
				channelConfig.baseURL + 
				"/download?path=" +
				targetName +
				"&files=dump.json"
			);
			console.log(" -> " + textStatus);
			console.log(thrownError);
		}
	);
}
