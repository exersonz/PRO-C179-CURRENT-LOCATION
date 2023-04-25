// global variable which will be an empty object
var coordinates = {}

$(document).ready(function(){
    get_coordinates();
}); 

function get_coordinates(){
    // using URLSearchParams() to get the lat and lng of the source and destination
    let searchParams = new URLSearchParams(window.location.search);

    // checking if source and destination exists in searchParams
    if(searchParams.has('source') && searchParams.has('destination')){
        // getting the source and destination info from searchParams
        let source = searchParams.get('source');
        let destination = searchParams.get('destination');

        // getting lat and lng of the source's location
        coordinates.source_latitude = source.split(';')[0];
        coordinates.source_longitude = source.split(';')[1];

        // getting lat and lng of the destination's location
        coordinates.destination_latitude = destination.split(';')[0];
        coordinates.destination_longitude = destination.split(';')[1];
    }
    else{
        alert('Coordinates were not selected!');

        // you go back to the last visited page in your history
        window.history.back();
    }
}