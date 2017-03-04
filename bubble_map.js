var map = new Datamap({
    element: document.getElementById('container'),
    fills : {
        defaultFill: '#ABDDA4',
        terror: 'red'
    }
});
dataset = d3.csv("data/gtd/terror_data_sample.csv", function(data) {
    data.forEach(function(d) {
        d.latitude = +d.latitude;
        d.longitude = +d.longitude;
        d.radius = 5;
        d.fillKey = 'terror';
    });
    map.bubbles(data);
});
