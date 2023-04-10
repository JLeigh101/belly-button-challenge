// store source URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// fetch the JSON data and log it
d3.json(url).then(function(data){
    console.log(data);
}); 

//let results = data.samples.filter(id => id.id == sample_ids);

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
    console.log(first_entry);
    
    //have the init() function call the graph generating functions
    makeBar(first_entry);

    }); //end of d3 access
};

//create a function to populate the horizontal bar chart graph
function makeBar(sample){

    //access the sample data for populating the bar chart
    d3.json(url).then((data) => {
        let sample_data = data.samples;
        //apply a filter that matches based on sample id
        let results = sample_data.filter(id => id.id == sample);
        //access and store the first entry in results filter
        let first_result = results[0];
        console.log(first_result);
    });
};




//let sample_values = results.sample_values.slice(0,10);
//let otu_ids = results.otu_ids.slice(0,10);
//let otu_labels = results.otu_labels.slice(0,10);


// let trace = {
//     x: sample_values.reverse(),
//     y: otu_ids.map(item => `OTU ${item}`).reverse(),
//     text: otu_labels.reverse(),
//     type: 'bar',
//     orientation: 'h'
// };

// let traces = [trace];

// let layout = {title: "Top Ten OTUs"};
// Plotly.newPlot("bar", traces, layout);

// //define the function when the dropdown detects a change
// dropdown.on("change", function(){
//     let labels = otu_labels;
// });

init();

