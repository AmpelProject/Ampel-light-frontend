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
		_fits.bind("load",{me:this, key:k},function(e){
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

var _fits_cache = {lru:[], data:{}};

FitsViewer.prototype.processFile = function(file){
	if (file == this.src) {
		return;
	}
	_viewer = this;
	// Move previous FITS into cache
	for (var label in _viewer.fits) {
		_fits_cache.data[_viewer.src][label] = _viewer.fits[label];
	}
	_viewer.src = file;
	if (file in _fits_cache.data) {
		// Move key to most recently used position
		_fits_cache.lru.splice(_fits_cache.lru.indexOf(file), 1);
		_fits_cache.lru.push(file);
		for (var label in _fits_cache.data[file]) {
			_viewer.fits[label] = _fits_cache.data[file][label];
			_viewer.fits[label].draw(_viewer.canvas + "_" + label);
		}
		return;
	} else {
		// Clear out old images
		while (_fits_cache.lru.length >= 32) {
			delete _fits_cache.data[_fits_cache.lru.shift()];
		}
		_fits_cache.lru.push(file);
		_fits_cache.data[file] = {};
	}
	TarGZ.stream(
		file,
		function (event) {
			var buffer = new ArrayBuffer(event.data.length);
			var array = new Uint8Array(buffer);
			
			for (i=0; i < event.data.length; i++)
				array[i] = event.data.codePointAt(i);
			var label = event.filename.substring(0, event.filename.indexOf('.fits'));
			_viewer.fits[label] = new FITS();
			_fits = _viewer.fits[label];
			var i = _fits.readFITSHeader(buffer);
			if(_fits.header.NAXIS >= 2) success = _fits.readFITSImage(buffer,2880);
			_fits.draw(_viewer.canvas + "_" + label);
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