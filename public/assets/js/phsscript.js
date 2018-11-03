$(document).ready(function(){


let getNameDependingonSortState = (sortState) => {
        $.ajax({
            url: "/api/" + sortState,
            method: "GET"
        })
        .then(function (data) {
            console.log(data);
        });

}


let getAllByHouse = (house) => {
    $.ajax({
        url: "/api/" + house,
        method: "GET"
    })
    .then(function (data) {
        
        
            return data;
        

        
    });

}





let renderGryffindorTemplate = (data) => {
    let source = $("#gryffindor-template").text();
    let template = Handlebars.compile(source);
    let html = template(data);
    $(".gryffindor").html(html);
  }

  renderGryffindorTemplate(getAllByHouse("Gryffindor"));

});