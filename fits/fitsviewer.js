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
	this.stretches = ["linear","sqrt","cuberoot","log","loglog","sqrtlog"];
	this.colors = ["grey","heat","A","B"];
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
			var canvas = e.data.me.canvas + "." + e.data.key;
			console.log("loading "+canvas);
			this.draw(canvas);
			$('#'+e.data.me.id+' .loader').hide();
		});
	}


	// Build the viewer here
	var html = '';
	html += 'Stretch function: <select class="stretch" name="stretch">';
	for(i = 0 ; i < this.stretches.length ; i++){
		html += '<option'+(this.stretches[i]== this.fits.stretch ? ' selected="selected"' : '')+'>'+this.stretches[i]+'</option>';
	}
	html += '</select>';
	html += 'Color scheme: <select class="scale" name="scale">';
	for(i = 0 ; i < this.colors.length ; i++){
		html += '<option'+(this.colors[i]== this.fits.color ? ' selected="selected"' : '')+'>'+this.colors[i]+'</option>';
	}
	html += '</select>';
	for (var k in this.fits) {
		html += '<br /><canvas id="'+this.canvas+'.'+k+'"></canvas>';
	}
	html += '<ul id="list"></ul>';

	$('#'+this.id+'').html(html);
	
	this.imageUnderlay('Try dragging and dropping a FITS file into this box');

	// Bind events
 	$('#'+this.id+' select.file').bind('change',{me:this}, function(e){
 		e.data.me.fits.load($(this).val());
 	});
 	$('#'+this.id+' select.stretch').bind('change',{me:this}, function(e){
		for (var k in e.data.me.fits) {
	 		e.data.me.fits[k].update($(this).val());
		}
 	});
 	$('#'+this.id+' select.scale').bind('change',{me:this}, function(e){
		for (var k in e.data.me.fits) {
	 		e.data.me.fits[k].update({color:$(this).val()});
		}
 	});

	if(this.capability.file){
		// We can use the HTML5 file capabilities. Yay!
		
		// Setup the drag-n-drop listeners.
		$('#'+this.canvas).bind("dragenter",function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).addClass("dragover");
		}).bind("dragover",function(e) {
			e.stopPropagation();
			e.preventDefault();
		}).bind("dragleave",function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).removeClass("dragover");
		}).bind("drop",{me:this},function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).removeClass("dragover");

			var files = e.originalEvent.dataTransfer.files; // FileList object.

			// files is a FileList of File objects. List some properties.
			var output = [];

			output.push('<li><strong>', files[0].name, '</strong> (', files[0].type || 'n/a', ') - ',
			files[0].size, ' bytes','</li>');
			//files[0].lastModifiedDate.toLocaleDateString(), '</li>');

			e.data.me.processFile(files[0].name)

			document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

		});
	} else {
		$('#'+this.id).prepend('<p>The File APIs are not fully supported in this browser. You are missing out on the awesome. :-(</p>');
	}


/*
	Frame <button onClick="fits.update({index:--(document.getElementById('z').value)})">&lt;</button>
	<input id="z" name="z" value="0" size=3 onChange="fits.update({index:this.value})">
	<button onClick="fits.update({index:++(document.getElementById('z').value)})">&gt;</button> of <span id=depth></span>. Format: <span id=bitpix></span>.
	<span id="status"></span>
	<br>
*/


	// Load an initial FITS file
	if(this.file) this.fits.load(this.file);
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