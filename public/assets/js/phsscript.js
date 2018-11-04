$(document).ready(function(){
getAllByHouse("Gryffindor", "#gryffindor-template", ".gryffindor");
getAllByHouse("Hufflepuff", "#hufflepuff-template", ".hufflepuff");
getAllByHouse("Ravenclaw", "#ravenclaw-template", ".ravenclaw");
getAllByHouse("Slytherin", "#slytherin-template", ".slytherin");
getAllUnSorted("#unsorted-template", ".unsorted");
$('.parallax').parallax();
});


let getNameDependingonSortState = (sortState) => {
        $.ajax({
            url: "/api/" + sortState,
            method: "GET"
        })
        .then(function (data) {
        });
}

let getAllUnSorted = (templateID, displayClass) => {
    $.ajax({
        url: "/api/unsorted",
        method: "GET"
    })
    .then(function (data) {
        renderHandlebarsTemplate(templateID, displayClass, {names: data});
    });
}


// GET any data from the database depending on the house specified.
// Then send that data to function that setting up the handlebars template
let getAllByHouse = (house, templateID, displayClass) => {
    
    $.ajax({
        url: "/api/" + house,
        method: "GET"
    })
    .then(function (data) {
        renderHandlebarsTemplate(templateID, displayClass, {names: data});
    });
}

let addPersonToDB = () => {
    let name = $(".name-input").val().trim();
    let url = "/api/" + name;
    
    $.ajax({
        url: url,
        method: "POST",
        data: name
    })
    .then(function (data) {
        getAllUnSorted("#unsorted-template", ".unsorted");
    });
}

let addToHouse = (dbid, house) => {
    let url = "/api/" + dbid;
    
    $.ajax({
        url: url,
        method: "PUT",
        data: {
            id: dbid,
            house: house,
        }
    })
    .then(function (data) {
        getAllByHouse("Gryffindor", "#gryffindor-template", ".gryffindor");
        getAllByHouse("Hufflepuff", "#hufflepuff-template", ".hufflepuff");
        getAllByHouse("Ravenclaw", "#ravenclaw-template", ".ravenclaw");
        getAllByHouse("Slytherin", "#slytherin-template", ".slytherin");
        getAllUnSorted("#unsorted-template", ".unsorted");
    });
}


let softDelete = (dbid) => {
    let url = "/api/deleted/" + dbid;
    
    $.ajax({
        url: url,
        method: "PUT",
        data: {
            id: dbid,
        }
    })
    .then(function (data) {
        getAllByHouse("Gryffindor", "#gryffindor-template", ".gryffindor");
        getAllByHouse("Hufflepuff", "#hufflepuff-template", ".hufflepuff");
        getAllByHouse("Ravenclaw", "#ravenclaw-template", ".ravenclaw");
        getAllByHouse("Slytherin", "#slytherin-template", ".slytherin");
        getAllUnSorted("#unsorted-template", ".unsorted");
    });
}

//This Function takes the data from the API and uses handlebars to display on screen
//The templateID and displayClass params allow me to use this one function for displaying multiple templates in the html
let renderHandlebarsTemplate = (templateID, displayClass, data) => {
    let source = $(templateID).text();
    let template = Handlebars.compile(source);
    let html = template(data);
    $(displayClass).html(html);
  }

  $("body").on("click", ".add-to-house", function(event){
    let house = $(this).attr("data-house");
    let dbid = $(this).attr("data-dbid");
    addToHouse(dbid, house);
  });

  $("body").on("click", ".clear", function(event){
    let dbid = $(this).attr("data-dbid");
    softDelete(dbid);
  });

  $(".add-person").on("click", function (event) {
    event.preventDefault();
    addPersonToDB();
    $(".name-input").val("");
});


