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


function get_datatest () {
  var dataall = [
  {
      "_id" : -6712963424220243,
      "alFlags" : [
          1,
          2,
          24,
          27
      ],
      "diffmaglim" : 20.2434005737305,
      "fid" : 2,
      "jd" : 2458425.7963426,
      "rcid" : 42
  }
  ,
  {
      "_id" : -6713442014220470,
      "alFlags" : [
          1,
          2,
          23,
          27
      ],
      "diffmaglim" : 20.4703998565674,
      "fid" : 1,
      "jd" : 2458425.8442014,
      "rcid" : 42
  }
  ,
  {
      "_id" : 674294034215015004,
      "aimage" : 1.20700001716614,
      "aimagerat" : 0.531718075275421,
      "alFlags" : [
          1,
          2,
          23,
          27
      ],
      "bimage" : 1.08500003814697,
      "bimagerat" : 0.477973580360413,
      "chinr" : 6.89599990844727,
      "chipsf" : 0.793699979782104,
      "classtar" : 0.61599999666214,
      "clrcoeff" : -0.0589400008320808,
      "clrcounc" : 2.44554994424107e-05,
      "clrmed" : 0.748000025749207,
      "clrrms" : 0.330374002456665,
      "dec" : -9.0246254,
      "decnr" : -9.0253477,
      "diffmaglim" : 20.5337104797363,
      "distnr" : 2.59563398361206,
      "distpsnr1" : 6.70547389984131,
      "distpsnr2" : 9.91983795166016,
      "distpsnr3" : 18.471923828125,
      "dsdiff" : -5.07403564453125,
      "dsnrms" : 6.14432621002197,
      "elong" : 1.11244237422943,
      "exptime" : 30.0,
      "fid" : 1,
      "field" : 349,
      "fwhm" : 2.26999998092651,
      "isdiffpos" : "t",
      "jd" : 2458428.7940394,
      "jdendhist" : 2458428.7940394,
      "jdendref" : 2458368.905289,
      "jdstarthist" : 2458428.7660301,
      "jdstartref" : 2458323.941146,
      "magap" : 19.9936008453369,
      "magapbig" : 20.0200004577637,
      "magdiff" : -0.271077007055283,
      "magfromlim" : 0.540109813213348,
      "maggaia" : 18.5945243835449,
      "maggaiabright" : -999.0,
      "magnr" : 18.6800003051758,
      "magpsf" : 20.2646770477295,
      "magzpsci" : 26.2866764068604,
      "magzpscirms" : 0.0359449982643127,
      "magzpsciunc" : 1.78002992470283e-05,
      "mindtoedge" : 515.106994628906,
      "nbad" : 0,
      "ncovhist" : 85,
      "ndethist" : 2,
      "neargaia" : 53.0521659851074,
      "neargaiabright" : -999.0,
      "nframesref" : 15,
      "nid" : 674,
      "nmatches" : 342,
      "nmtchps" : 6,
      "nneg" : 2,
      "objectidps1" : 97170317934660050,
      "objectidps2" : 97170317924541500,
      "objectidps3" : 97160317905518270,
      "pdiffimfilename" : "ztf_20181106294005_000349_zg_c11_o_q3_scimrefdiffimg.fits",
      "pid" : 674294034215,
      "programid" : 1,
      "programpi" : "Kulkarni",
      "ra" : 31.7952798,
      "ranr" : 31.795171,
      "rb" : 0.633333325386047,
      "rbversion" : "t8_f5_c3",
      "rcid" : 42,
      "rfid" : 349120142,
      "scorr" : 7.56521654129028,
      "seeratio" : 1.31645250320435,
      "sgmag1" : 18.4094009399414,
      "sgmag2" : 18.8033008575439,
      "sgmag3" : -999.0,
      "sgscore1" : 0.16295200586319,
      "sgscore2" : 0.246655002236366,
      "sgscore3" : 0.5,
      "sharpnr" : 0.709999978542328,
      "sigmagap" : 0.240899994969368,
      "sigmagapbig" : 0.310400009155273,
      "sigmagnr" : 0.119999997317791,
      "sigmapsf" : 0.166013315320015,
      "simag1" : 17.5569000244141,
      "simag2" : 18.3749008178711,
      "simag3" : 21.0674991607666,
      "sky" : 0.131971403956413,
      "srmag1" : 17.593599319458,
      "srmag2" : 18.2105007171631,
      "srmag3" : 20.8167991638184,
      "ssdistnr" : -999.0,
      "ssmagnr" : -999.0,
      "ssnamenr" : "null",
      "ssnrms" : 11.2183618545532,
      "sumrat" : 0.994987726211548,
      "szmag1" : 17.7119998931885,
      "szmag2" : 18.6012001037598,
      "szmag3" : 20.179500579834,
      "tblid" : 4,
      "tooflag" : 0,
      "xpos" : 2344.103515625,
      "ypos" : 515.106994628906,
      "zpclrcov" : -1.92400002561044e-05,
      "zpmed" : 26.2469997406006
  }
  ,
  {
      "_id" : 674266034215015002,
      "aimage" : 0.745000004768372,
      "aimagerat" : 0.253401011228561,
      "alFlags" : [
          1,
          2,
          24,
          27
      ],
      "bimage" : 0.592000007629395,
      "bimagerat" : 0.201361000537872,
      "chinr" : 8.44600009918213,
      "chipsf" : 1.53140997886658,
      "classtar" : 0.976000010967255,
      "dec" : -9.0245714,
      "decnr" : -9.0253735,
      "diffmaglim" : 20.4671001434326,
      "distnr" : 2.91936993598938,
      "elong" : 1.25845003128052,
      "fid" : 2,
      "field" : 349,
      "fwhm" : 2.94000005722046,
      "isdiffpos" : "1",
      "jd" : 2458428.7660301,
      "magap" : 19.8166999816895,
      "magapbig" : 19.5839996337891,
      "magdiff" : 0.0442019999027252,
      "magfromlim" : 0.650407016277313,
      "magnr" : 18.0839996337891,
      "magpsf" : 19.7724990844727,
      "mindtoedge" : 503.390014648438,
      "nbad" : 0,
      "nid" : 674,
      "nneg" : 5,
      "pdiffimfilename" : "ztf_20181106265984_000349_zr_c11_o_q3_scimrefdiffimg.fits",
      "pid" : 674266034215,
      "programid" : 1,
      "programpi" : "Kulkarni",
      "ra" : 31.7952672,
      "ranr" : 31.7950885,
      "rb" : 0.810000002384186,
      "rbversion" : "t12_f5_c3",
      "rcid" : 42,
      "scorr" : 9.69513,
      "seeratio" : 0.905430972576141,
      "sharpnr" : 0.537000000476837,
      "sigmagap" : 0.24940000474453,
      "sigmagapbig" : 0.253600001335144,
      "sigmagnr" : 0.101999998092651,
      "sigmapsf" : 0.176207005977631,
      "sky" : 0.305633991956711,
      "ssdistnr" : null,
      "ssmagnr" : null,
      "ssnamenr" : null,
      "sumrat" : 1.0,
      "tblid" : 2,
      "xpos" : 2327.55004882812,
      "ypos" : 503.390014648438
  }
  ,
  {
      "_id" : 677236114215015000,
      "aimage" : 1.34500002861023,
      "aimagerat" : 0.619857847690582,
      "alFlags" : [
          1,
          2,
          23,
          27
      ],
      "bimage" : 1.25699996948242,
      "bimagerat" : 0.579302132129669,
      "chinr" : 6.89599990844727,
      "chipsf" : 1.10532486438751,
      "classtar" : 0.625999987125397,
      "clrcoeff" : -0.0628499984741211,
      "clrcounc" : 6.96674032951705e-05,
      "clrmed" : 0.597000002861023,
      "clrrms" : 0.315578013658524,
      "dec" : -9.0247207,
      "decnr" : -9.0253477,
      "diffmaglim" : 19.9472045898438,
      "distnr" : 2.28681564331055,
      "distpsnr1" : 6.72063732147217,
      "distpsnr2" : 10.1238613128662,
      "distpsnr3" : 18.4590625762939,
      "dsdiff" : -8.80058860778809,
      "dsnrms" : 7.24676752090454,
      "elong" : 1.0700079202652,
      "exptime" : 30.0,
      "fid" : 1,
      "field" : 349,
      "fwhm" : 2.1698522567749,
      "isdiffpos" : "t",
      "jd" : 2458431.7361111,
      "jdendhist" : 2458431.7361111,
      "jdendref" : 2458368.905289,
      "jdstarthist" : 2458428.7660301,
      "jdstartref" : 2458323.941146,
      "magap" : 19.0983009338379,
      "magapbig" : 18.8314990997314,
      "magdiff" : -0.0928080007433891,
      "magfromlim" : 0.848904371261597,
      "maggaia" : 18.5945243835449,
      "maggaiabright" : -999.0,
      "magnr" : 18.6800003051758,
      "magpsf" : 19.1911087036133,
      "magzpsci" : 26.2321071624756,
      "magzpscirms" : 0.0470229983329773,
      "magzpsciunc" : 4.00682984036393e-05,
      "mindtoedge" : 509.050506591797,
      "nbad" : 0,
      "ncovhist" : 86,
      "ndethist" : 3,
      "neargaia" : 52.725227355957,
      "neargaiabright" : -999.0,
      "nframesref" : 15,
      "nid" : 677,
      "nmatches" : 262,
      "nmtchps" : 6,
      "nneg" : 1,
      "objectidps1" : 97170317934660050,
      "objectidps2" : 97170317924541500,
      "objectidps3" : 97160317905518270,
      "pdiffimfilename" : "ztf_20181109236100_000349_zg_c11_o_q3_scimrefdiffimg.fits",
      "pid" : 677236114215,
      "programid" : 1,
      "programpi" : "Kulkarni",
      "ra" : 31.7953173,
      "ranr" : 31.795171,
      "rb" : 0.483333319425583,
      "rbversion" : "t8_f5_c3",
      "rcid" : 42,
      "rfid" : 349120142,
      "scorr" : 5.35583019256592,
      "seeratio" : 2.0,
      "sgmag1" : 18.4094009399414,
      "sgmag2" : 18.8033008575439,
      "sgmag3" : -999.0,
      "sgscore1" : 0.16295200586319,
      "sgscore2" : 0.246655002236366,
      "sgscore3" : 0.5,
      "sharpnr" : 0.709999978542328,
      "sigmagap" : 0.119699999690056,
      "sigmagapbig" : 0.118199996650219,
      "sigmagnr" : 0.119999997317791,
      "sigmapsf" : 0.130484983325005,
      "simag1" : 17.5569000244141,
      "simag2" : 18.3749008178711,
      "simag3" : 21.0674991607666,
      "sky" : 0.369254589080811,
      "srmag1" : 17.593599319458,
      "srmag2" : 18.2105007171631,
      "srmag3" : 20.8167991638184,
      "ssdistnr" : -999.0,
      "ssmagnr" : -999.0,
      "ssnamenr" : "null",
      "ssnrms" : 16.0473556518555,
      "sumrat" : 1.0,
      "szmag1" : 17.7119998931885,
      "szmag2" : 18.6012001037598,
      "szmag3" : 20.179500579834,
      "tblid" : 0,
      "tooflag" : 0,
      "xpos" : 2324.78979492188,
      "ypos" : 509.050506591797,
      "zpclrcov" : -4.8040001274785e-05,
      "zpmed" : 26.1909999847412
  }
  ]

  var transient = {"tran_id": 1710101010203311,
  "flags": 3, "journal": [{"tier": 0, "dt": 1541437302, "alertId": 672320054215015009, "logs": {"$oid": "5be0773c7f3fc30039842a23"}}, {"tier": 2, "dt": 1541437413.707914, "unit": "SNCOSMO", "success": 1, "logs": {"$oid": "5be077b07f3fc300035671c6"}}, {"tier": 0, "dt": 1541440862, "alertId": 673294274215015010, "logs": {"$oid": "5be0836b7f3fc30039520418"}}, {"tier": 2, "dt": 1541440948.292066, "unit": "SNCOSMO", "success": 1, "logs": {"$oid": "5be085797f3fc3000356726f"}}, {"tier": 0, "dt": 1541482346, "alertId": 674223764215015011, "logs": {"$oid": "5be11f277f3fc30124d07447"}}, {"tier": 2, "dt": 1541482447.985862, "unit": "SNCOSMO", "success": 1, "logs": {"$oid": "5be127987f3fc300035675e4"}}, {"tier": 0, "dt": 1541485648, "alertId": 674261654215015005, "logs": {"$oid": "5be11f277f3fc30124946f1e"}}, {"tier": 2, "dt": 1541485724.99689, "unit": "SNCOSMO", "success": 1, "logs": {"$oid": "5be1346a7f3fc30003567680"}}, {"tier": 3, "dt": 1541509200, "jobName": "ZTFbhSummary", "taskName": "DoktorMerkwuerdigliebe", "logs": {"$oid": "5be190507f3fc3050c5592c3"}}, {"tier": 3, "dt": 1541509200, "jobName": "ZTFbhSummary", "taskName": "DoctorDemento", "logs": {"$oid": "5be190507f3fc3050c5592c3"}}, {"tier": 3, "dt": 1541509200, "jobName": "ZTFbhSummary", "taskName": "Fabianski", "logs": {"$oid": "5be190507f3fc3050c5592c3"}}, {"tier": 0, "dt": 1541658267, "alertId": 676257994215015019, "logs": {"$oid": "5be3bc067f3fc3013d62eb68"}}, {"tier": 2, "dt": 1541658360.921641, "unit": "SNCOSMO", "success": 1, "logs": {"$oid": "5be3d6b57f3fc300039c59b1"}}, {"tier": 3, "dt": 1541682000, "jobName": "ZTFbhSummary", "taskName": "DoktorMerkwuerdigliebe", "logs": {"$oid": "5be433507f3fc3056c6cb27d"}}, {"tier": 3, "dt": 1541682000, "jobName": "ZTFbhSummary", "taskName": "DoctorDemento", "logs": {"$oid": "5be433507f3fc3056c6cb27d"}}, {"tier": 3, "dt": 1541682000, "jobName": "ZTFbhSummary", "taskName": "Fabianski", "logs": {"$oid": "5be433507f3fc3056c6cb27d"}}], "latest_state": {"$binary": "DCToW4XYvkT40KZKVO9QZg==", "$type": "05"}
  }

  transient["ztfName"] = get_ztfname(String(transient["tran_id"]))



  // Parsing data
  var i=0,
      j=0,
      k=0;
  var dataset = [],
      datasetupper = [];
  // Create the dataset
  for (i=0; i< dataall.length; i++) {
      if (dataall[i]._id>0) {
        dataset[j] = dataall[i];
        j++;
        }
      else {
        datasetupper[k] = dataall[i];
        k++;
        }
  }
  return [dataall, dataset, datasetupper, transient];
}

function load_transient_data (baseURL, targetName, callback) {
  var transient = null;
  $.getJSON(baseURL+"/download?path=%2F"+targetName+"&files=transient.json",
  //$.getJSON(baseURL+"/transient.json",
    null,
    function (transient) { 
      $.getJSON(baseURL+"/download?path=%2F"+targetName+"&files=dump.json",
      //$.getJSON(baseURL+"/dump.json",
        null,
        function (dump) {
          transient["ztfName"] = get_ztfname(String(transient["tran_id"]));
          var i=0, j=0, k=0;
          const photopoints = dump.photopoints;
          var detections = [];
          var upper_limits = [];
          for (i=0; i< photopoints.length; i++) {
              if (photopoints[i].content._id>0) {
                detections[j] = photopoints[i].content;
                j++;
              } else {
                upper_limits[k] = photopoints[i].content;
                k++;
              }
          }
          callback(transient, detections, upper_limits);
        })
    });
}
