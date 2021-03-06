var dispatch = d3.dispatch("load", "statechange");

d3.json("./assets/output.json", function(error, data) {
    if (error) throw error;
    dispatch.load(data);
});

dispatch.on("load.plot", function(data) {
    var  margin = {top: 50, right: 20, bottom: 30, left: 40},
        width = 880,
        height = 460;

    // append the plot svg
    var svg = d3.select("#container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // plot title
    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "24px") 
        .text("Visualizing 2012 NYPD Stop and Frisk Data");

    // x axis configuration
    var x = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d["inc"]; })])
        .rangeRound([0, width])
        .nice();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickFormat(d3.format("$s"));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .attr("id", "xaxis")
        .call(xAxis);

    var xlabel = svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("id", "xaxislabel")
      .attr("x", width)
      .attr("y", height - 6)
      .text("Average household income, USD");

    // y axis configuration
    var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d["num_stops"] })])
        .rangeRound([height, 0])
        .nice();

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format("s"));

    svg.append("g")
        .attr("class", "y axis")
        .attr("id", "yaxis")
        .call(yAxis);

    var ylabel = svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("id", "yaxislabel")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Number of stops per 1000 residents");

    // bind the data to the plot
    data.forEach( function(d) {
        svg.append("circle")
            .attr("cx", x(d["inc"]))
            .attr("cy", y(d["num_stops"]))
            .attr("r", 8)
            .attr("id", d.id)
            .style("fill", "#aaa")
            .style("opacity", 0.7);
    });

  // handle drop down selection event
  dispatch.on("statechange.plot", function(a) {

    if (a == "race" || a == "inc") {

        // clear previous axis labels and ticks
        d3.select("#xaxis").remove();
        d3.select("#xaxislabel").remove();

        // x axis configuration
        var x = d3.scale.linear()
            .domain([0, d3.max(data, function(d) { return d[a]; })])
            .rangeRound([0, width])
            .nice();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        if (a == "race") {
            xAxis.tickFormat(d3.format("%"));
        } else if (a == "inc") {
            xAxis.tickFormat(d3.format("$s"));
        }

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .attr("id", "xaxis")
            .call(xAxis);

        var xlabel = svg.append("text")
          .attr("class", "x label")
          .attr("text-anchor", "end")
          .attr("id", "xaxislabel")
          .attr("x", width)
          .attr("y", height - 6);

        if (a == "race") {
            xlabel.text("Percent of residents identying as white and non-Hispanic");
        } else if (a == "inc") {
            xlabel.text("Average household income, USD");
        }

    } else {

        // clear previous axis labels and ticks
        d3.select("#yaxis").remove();
        d3.select("#yaxislabel").remove();

        // y axis configuration
        var y = d3.scale.linear()
            .domain([0, d3.max(data, function(d) { return d[a] })])
            .rangeRound([height, 0])
            .nice();

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        if (a == "pct_weapon") {
            yAxis.tickFormat(d3.format(".1%"));
        } else if (a == "pct_search" || a == "pct_frisk" || a == "pct_arrest" || a == "pct_force") {
            yAxis.tickFormat(d3.format("%"));
        } else if (a == "num_stops") {
            yAxis.tickFormat(d3.format("s"));
        }

        svg.append("g")
            .attr("class", "y axis")
            .attr("id", "yaxis")
            .call(yAxis);

        var ylabel = svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("id", "yaxislabel")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)");

        if (a == "num_stops") {
            ylabel.text("Number of stops per 1000 residents");
        } else if (a == "pct_arrest") {
            ylabel.text("Percent of stops resulting in arrest");
        } else if (a == "pct_frisk") {
            ylabel.text("Percent of stops involving frisk");
        } else if (a == "pct_search") {
            ylabel.text("Percent of stops involving a search");
        }  else if (a == "pct_weapon") {
            ylabel.text("Percent of stops yielding a weapon");
        } else if (a == "pct_force") {
            ylabel.text("Percent of stops involving the use of force");
        }

    }

    if (a == "race" || a == "inc") {

        // update the position of each point
        data.forEach( function(d) {
            d3.select("#" + d.id)
                .transition(1000)
                .ease("cubic-in-out")
                .attr("cx", x(d[a]));
        });

      } else {
          data.forEach( function(d) {
              d3.select("#" + d.id)
                  .transition(1000)
                  .ease("cubic-in-out")
                  .attr("cy", y(d[a]));
          });
      }

  }); // dispatch.on("statechange.plot")
}); // dispatch.on("load.plot")

// a drop-down menu for selecting a data type
dispatch.on("load.menu", function(stateById) {
    var container = d3.select("#container");

    container
    .append("div")
        .attr("class", "axisselector")
    .append("label")
        .attr("for", "xaxisselect")
        .text("X axis: demographic data by community district")
    .append("select")
        .attr("name", "xaxisselect")
        .attr("class", "form-control")
        .on("change", function() { dispatch.statechange(this.value); });

    container
    .append("div")
        .attr("class", "axisselector")
    .append("label")
        .attr("for", "yaxisselect")
        .text("Y axis: nypd data by precinct")
    .append("select")
        .attr("name", "yaxisselect")
        .attr("class", "form-control")
        .on("change", function() { dispatch.statechange(this.value); });

    container.select("[name=xaxisselect]")
        .selectAll("option")
        .data([
            {"key": "inc", "value": "Income"},
            {"key": "race", "value": "Race"}
        ])
        .enter().append("option")
            .attr("value", function(d) { return d.key; })
            .text(function(d) { return d.value; });

  container.select("[name=yaxisselect]")
      .selectAll("option")
      .data([
          {"key": "num_stops", "value": "Number of stops"},
          {"key": "pct_arrest", "value": "Percent suspect arrested"},
          {"key": "pct_search", "value": "Percent suspects searched"},
          {"key": "pct_frisk", "value": "Percent suspects frisked"},
          {"key": "pct_force", "value": "Percent force used"},
          {"key": "pct_weapon", "value": "Percent weapon found"},
      ])
      .enter().append("option")
          .attr("value", function(d) { return d.key; })
          .text(function(d) { return d.value; });

    dispatch.on("statechange.menu", function(d) {
        container.property("value", d);
  });  // dispatch.on("statechange.menu")
});  // dispatch.on("load.menu")