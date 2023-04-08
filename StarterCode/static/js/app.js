// store source URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//var dataset;

// fetch the JSON data and log it
d3.json(url).then(function(data){
//    dataset = data;
    console.log(data);

let sample_id = 940;
let results = data.samples.filter(id => id.id == sample_id);
let result = results[0];
console.log(result);
let sample_values = result.sample_values.slice(0,10);
let otu_ids = result.otu_ids.slice(0,10);
let otu_labels = result.otu_labels.slice(0,10);

let names = Object.values(data.names);
//console.log(data.samples);
//console.log(names);

//function selectID();
//let otu_ids = Object.values(data[0][samples][otu_ids]);

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs 
//found in that (per) individual.
///

let trace = {
    x: sample_values.reverse(),
    y: otu_ids.map(item => `Otu ${item}`).reverse(),
    text: otu_labels.reverse(),
    type: 'bar',
    orientation: 'h'
};

let traces = [trace];

let layout = {title: "top ten OTUs"};
Plotly.newPlot("bar", traces, layout);
});