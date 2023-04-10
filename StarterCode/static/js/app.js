// store source URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// fetch the JSON data and log it
d3.json(url).then(function(data){
    console.log(data);
}); 


//let sample_id = 940;

//need to iterate through sample_ids in the dropdown menu
//let results = data.samples.filter(id => id.id == sample_ids);
let ids = [];
let labels = [];
let values = [];
for (let i = 0; i < sample_ids.length; i++){
    let id = sample_ids[i];
    results.push()
}
console.log(results);


//create init function that will manage dropdown, bar chart, and bubble chart
function init(){
    //create the dropdown list for all sample id's in the dataset by appending each ID as a new value
    let dropdown = d3.select("#selDataset");
    //access sample data using d3
    d3.json(url).then((data) => {
    //gather the sample ids from the names list in data
    let sample_ids = data.names;
    console.log(sample_ids);
        for (id of sample_ids){
            dropdown.append("option").attr("value", id).text(id);
        };
    //store the first sample for display initialization
    let first_entry = sample_ids[0];
    }); //end of d3 access
};

let sample_values = results.sample_values.slice(0,10);
let otu_ids = results.otu_ids.slice(0,10);
let otu_labels = results.otu_labels.slice(0,10);


let trace = {
    x: sample_values.reverse(),
    y: otu_ids.map(item => `OTU ${item}`).reverse(),
    text: otu_labels.reverse(),
    type: 'bar',
    orientation: 'h'
};

let traces = [trace];

let layout = {title: "Top Ten OTUs"};
Plotly.newPlot("bar", traces, layout);

//define the function when the dropdown detects a change
dropdown.on("change", function(){
    let labels = otu_labels;
});

init();

