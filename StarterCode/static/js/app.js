// store source URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// fetch the JSON data and log it
d3.json(url).then(function(data){
//    dataset = data;
    console.log(data);

//let sample_id = 940;

let sample_ids = Object.values(data.names);
console.log(sample_ids);
//need to iterate through sample_ids in the dropdown menu
//let results = data.samples.filter(id => id.id == sample_ids);
results = [];
for (let i = 0; i < sample_ids.length; i++){
    let id = sample_ids[i];
}
console.log(results);


let sample_values = results.sample_values.slice(0,10);
let otu_ids = results.otu_ids.slice(0,10);
let otu_labels = results.otu_labels.slice(0,10);


//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs 
//found in that (per) individual.
///
function init(){
    
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
};

//create the dropdown list for all sample id's in the dataset by appending each ID as a new value
let dropdown = d3.select("#selDataset");
for (id of sample_ids){
    dropdown.append("option").attr("value", id).text(id);
};

//define the function when the dropdown detects a change
dropdown.on("change", function(){
    let labels = otu_labels;
});

init();

}); // end of d3.json function