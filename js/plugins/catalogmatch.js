
/* input example:
 {'__jsonclass__': ['ampel.base.ScienceRecord.ScienceRecord'],
  'tran_id': {'$numberLong': '1710101025301535'},
  't2_unit_id': 'CATALOGMATCH',
  'compound_id': [{'$binary': '7YhYZ9hatj5qj6nBWb2Ylg==', '$type': '05'},
   {'$binary': '8IrU7PAlHyH0glfNvXVuCQ==', '$type': '05'}],
  'results': [{'versions': {'py': 0.1, 'run_config': 1.0},
    'dt': 1552979135,
    'duration': 0.121,
    'runId': 2425304,
    'output': {'SDSS_spec': {'dist2transient': 1.4960509931624666,
      'z': 0.002692257519811392,
      'bptclass': 1.0,
      'subclass': 'STARBURST'},
     'NEDz': {'dist2transient': 1.4776797344887629,
      'ObjType': 8.0,
      'Velocity': 782.0,
      'z': 0.00261},
     'SDSSDR10': False,
     'brescia': False,
     'milliquas': False,
     'GAIADR2': {'dist2transient': 0.09301847224429731,
      'Mag_G': 19.470095,
      'PMRA': 2.9953943835055186,
      'ErrPMRA': 1.9041169554608655,
      'PMDec': 1.0346194659354677,
      'ErrPMDec': 0.8703496735740784,
      'Plx': -0.8166472646815451,
      'ErrPlx': 0.9179191981655618,
      'ExcessNoise': 0.0,
      'ExcessNoiseSig': 0.0},
     'CRTS_DR1': False,
     'AAVSOVSX': {'dist2transient': 0.11330155262820465, 'TYPE': 'SDOR'},
     'LAMOSTDR4': False}}],
  'info': {'runConfig': 'general',
   'runState': 8,
   'created': {'$date': '2019-03-19T07:04:50Z'},
   'hasError': False}}]
*/

export function display(jdict, divname) {

	var node = new PrettyJSON.view.Node(
		{
			el: $('#' + divname + "-inner"),
			data: jdict
		}
	);

	// Expand results 
	node.childs[2].show();

	// Expand latest result
	node.childs[2].childs[node.childs[2].childs.length-1].show();

	// Expand <latest result> -> output 
	// Note: for some reason, it is really needed twice !
	node.childs[2].childs[node.childs[2].childs.length-1].childs[4].expandAll();
	node.childs[2].childs[node.childs[2].childs.length-1].childs[4].expandAll();

}
