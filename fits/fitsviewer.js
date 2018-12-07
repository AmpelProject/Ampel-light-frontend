/*
 * Javascript FITS Viewer 0.1
 * Copyright (c) 2010 Stuart Lowe http://lcogt.net/
 *
 * Licensed under the MPL http://www.mozilla.org/MPL/MPL-1.1.txt
 *
 * Requires:
 *   fits.js
 *   Jacob Seidelin's binaryajax.js from http://www.nihilogic.dk/labs/exif/
 *   excanvas.js
 *   jQuery
 */

function FitsViewer(input){

	// Define some variables
	
	this.version = "0.1";
	this.id = "FITSViewer";
	this.canvas = "FITSimage";
	this.fits = {};
	var labels = ["difference", "science", "template"];
	for (var i in labels) {
		this.fits[labels[i]] = new FITS();
	}
	this.file = "";
	this.stretches = ["sqrt","cuberoot","linear"];
	this.colors = ["grey","viridis"];
	// Check for support of various functions:
	this.capability = { 
		// the File API support
		file: (window.File && window.FileReader && window.FileList && window.Blob)
	}

	// Overwrite with variables passed to the function
	if(input){
		if(typeof input.stretch=="string") this.fits.stretch = input.stretch;
		if(typeof input.file=="string") this.file = input.file;
		if(typeof input.id=="string") this.id = input.id;
	}

	// Bind some events
	for (var k in this.fits) {
		_fits = this.fits[k];
		_fits.bind("click",function(e){
			e.y = this.height - e.y
			//var value =this.image[e.y*this.width+e.x];
			//document.getElementById('status').innerHTML ='click=('+ e.x+','+e.y+')='+value;
		}).bind("mousemove",function(e){
			e.y = this.height - e.y
			//var value =this.image[e.y*this.width+e.x];
			//document.getElementById('status').innerHTML ='move=('+ e.x+','+e.y+')='+value;
		}).bind("load",function(e){
			//document.getElementById('bitpix').innerHTML = this.header.BITPIX;
			//document.getElementById('depth').innerHTML = this.depth;
			//document.getElementById('z').value = 0;

		}).bind("load",{me:this, key:k},function(e){
			var canvas = e.data.me.canvas + "_" + e.data.key;
			console.log("loading "+canvas);
			this.draw(canvas);
			$('#'+e.data.me.id+' .loader').hide();
		});
	}

  $('#'+this.id).bind("click", {me:this}, function(e) {
    for (var k in e.data.me.fits) {
      var fits = e.data.me.fits[k];
      var i = e.data.me.stretches.indexOf(fits.stretch);
      i += 1;
      if (i == e.data.me.stretches.length) i = 0;
      fits.update(e.data.me.stretches[i]);
    }
  });
}


FitsViewer.prototype.processFile = function(file){
	_viewer = this;
	_viewer.src = file;
	console.log("processFile");
	TarGZ.stream(
		file,
		function (event) {
			console.log(event);
			var buffer = new ArrayBuffer(event.data.length);
			var array = new Uint8Array(buffer);
			
			for (i=0; i < event.data.length; i++)
				array[i] = event.data.codePointAt(i);
			var ext = event.filename.indexOf('.fits');
			console.log(event.filename.substring(0, ext));
			_fits = _viewer.fits[event.filename.substring(0, ext)];
			var i = _fits.readFITSHeader(buffer);
			if(_fits.header.NAXIS >= 2) success = _fits.readFITSImage(buffer,2880);
			console.log(_fits);
			_fits.triggerEvent("load")
		},
		function(xhr) {
			console.log("finished "+_viewer.src);
		},
		function(event) {
			console.log("failed to load "+_viewer.src);
			console.log(event);
		}
	);
}

FitsViewer.prototype.imageUnderlay = function(txt){
	return;
	var canvas = $('#'+this.canvas);
	if($('#'+this.id+' .loader').length == 0) $('#'+this.id).append('<div class="loader"><div class="loader_inner">'+txt+'</div></div>');
	else $('#'+this.id+' .loader').html(txt).show();
	$('#'+this.id+' .loader').css({width:canvas.outerWidth(),height:canvas.outerHeight(),left:canvas.offset().left,top:canvas.offset().top,'z-index':-1});

}
FitsViewer.prototype.imageOverlay = function(txt){
	return;
	var canvas = $('#'+this.canvas);
	if($('#'+this.id+' .loader').length == 0) $('#'+this.id).append('<div class="loader"><div class="loader_inner">'+txt+'</div></div>');
	else $('#'+this.id+' .loader').html(txt).show();
	$('#'+this.id+' .loader').css({width:canvas.outerWidth(),height:canvas.outerHeight(),left:canvas.offset().left,top:canvas.offset().top,'z-index':1});

}