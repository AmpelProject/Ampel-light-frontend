var margin = {top: 100, right: 100, bottom: 100, left: 100}
  , width = window.innerWidth - margin.left - margin.right // Use the window's width
  , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height


function set_fig(data_) {
  var xmax    = d3.max(data_.map(function(d) { return d.jd}));
  var xmin    = d3.min(data_.map(function(d) { return d.jd}));
  var ymin    = d3.min(data_.map(function(d) { return d.magpsf}));
  var ymax    = d3.max(data_.map(function(d) { return d.magpsf}));

  // xlim, ylim
  var xScale = d3.scaleLinear()
      .domain([xmin-1, xmax+3]) // input
      .range([0, width]); // output

  var yScale = d3.scaleLinear()
      .domain([ymax*1.05, ymin*0.95]) // input
      .range([height, 0]); // output

  // 1. Add the SVG to the page and employ #2
  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // 3. Call the x axis in a group tag
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickSizeOuter(0)); // Create an axis component with d3.axisBottom
  // Top axis bar
  svg.append("g")
          .attr("class", "x axis")
          .call(d3.axisTop(xScale).ticks(0).tickSizeOuter(0));
  // 4. Call the y axis in a group tag
  svg.append("g")
              .attr("class", "y axis")
              .call(d3.axisLeft(yScale).tickSizeOuter(0));

  svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate( " + width + ", 0 )")
    .call(d3.axisRight(yScale).ticks(0).tickSizeOuter(0));

  // Labels
  svg.append("text")
            .attr("class", "axeslabel") // Assign a class for styling
            .attr("x", 0+ width/2)
            .attr("y", 0 + height + margin.top - margin.bottom/2)
            .style("text-anchor", "middle")
            .text("Date");

  svg.append("text")
            .attr("class", "axeslabel") // Assign a class for styling
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Magnitude (PSF)");


  return [svg, xScale, yScale];
}

function add_scatter(svg_, datain_) {
  var scatter = svg_.selectAll(".dot")
                .data(datain_)
                .enter();

  scatter.append("circle") // Uses the enter().append() method
    .attr("class", "circle") // Assign a class for styling
    .attr("cx", function(d) { return xScale(d.jd) })
    .attr("cy", function(d) { return yScale(d.magpsf) })
    .attr("fill", function(d) { return ZTFDATA[d.fid].color })
    .attr("stroke","grey")
    .attr("lineWidth", 1)
    .attr("r", 7)
      .on("mouseover", function(d) {
        d3.select(this).attr('r', d3.select(this).attr('r')*1.5)
        d3.select(this).attr('stroke', "grey")
        d3.select(this).attr('stroke-width', 3);
      })
      .on("mouseout", function(d) {
        d3.select(this).attr('r', d3.select(this).attr('r')/1.5)
        d3.select(this).attr('stroke', "grey")
        d3.select(this).attr('stroke-width', 2);
      });
}

function add_errorbar(svg_, datain_) {
  svg_.append("g")
    .selectAll("g")
      .data(datain_).enter()
      .append("g")
        .each(errorBar)
}
function errorBar(d) {
  	let g = d3.select(this).selectAll('line').data([d]).enter();

    // Add Error Line
    g.append("line")
      .attr("class", "error-line")
      .attr("x1", function(d) {
        return xScale(d.jd);
      })
      .attr("y1", function(d) {
        return yScale(d.magpsf + d.sigmapsf);
      })
      .attr("x2", function(d) {
        return xScale(d.jd);
      })
      .attr("y2", function(d) {
        return yScale(d.magpsf - d.sigmapsf);
      });

  // Add Error Top Cap
  g.append("line")
    .attr("class", "error-cap")
    .attr("x1", function(d) {
      return xScale(d.jd) - 4;
    })
    .attr("y1", function(d) {
      return yScale(d.magpsf + d.sigmapsf);
    })
    .attr("x2", function(d) {
      return xScale(d.jd) + 4;
    })
    .attr("y2", function(d) {
      return yScale(d.magpsf + d.sigmapsf);
    });

     // Add Error Bottom Cap
  g.append("line")
    .attr("class", "error-cap")
    .attr("x1", function(d) {
      return xScale(d.jd) - 4;
    })
    .attr("y1", function(d) {
      return yScale(d.magpsf - d.sigmapsf);
    })
    .attr("x2", function(d) {
      return xScale(d.jd) + 4;
    })
    .attr("y2", function(d) {
      return yScale(d.magpsf - d.sigmapsf);
    });
 }

 function add_upperlimits(svg_, dataupper_) {

   // Define the marker
   svg_.append("svg:marker")
       .selectAll(".arrows")
       .data(dataupper_).enter()
       .append("svg:marker")
       .attr("class", "triangle")
       .attr("id", function (d) {return "triangle_"+d.fid})
       .attr('markerHeight', 12)
       .attr('markerWidth', 12)
       .attr('markerUnits', 'strokeWidth')
       .attr('orient', 'auto')
       .attr('refX', 0)
       .attr('refY', 0)
       .attr('viewBox', "-5 -5 10 10")
       .append("path")
         .attr("d", "M 0,0 m -5,-5 L 5,0 L -5,5 Z")
         .attr("fill", function(d) { return ZTFDATA[d.fid].color})
         ;
   // Apply it
   svg_.selectAll(".lines")
         .data(dataupper_).enter()
         .append("svg:line")
         .attr("x1", function(d) { return xScale(d.jd) })
         .attr("y1", function(d) { return yScale(d.diffmaglim) })
         .attr("x2", function(d) { return xScale(d.jd) })
         .attr("y2", function(d) { return yScale(d.diffmaglim+0.1) })
         //.attr("fill", function(d) { return ZTFDATA[d.fid].color } )
         .attr("stroke", function(d) { return ZTFDATA[d.fid].color })
         .attr("marker-end", function(d) {return "url(#triangle_"+d.fid +")"});
 }
