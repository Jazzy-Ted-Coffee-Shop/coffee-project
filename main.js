"use strict";

//registers typing into input
document.getElementById("coffeeName").addEventListener("keyup", updateCoffees);

//function to add user suggested coffee
function addCoffee(e){
    e.preventDefault();
    let userAdd = {};
    let roast = document.querySelector('#userRoast');
    let name = document.querySelector('#userCoffeeName');
    let upperName = name.value.replace(name.value[0], name.value[0].toUpperCase());
    console.log(upperName);
    userAdd.id = (coffees.length) + 1;
    userAdd.name = upperName;
    userAdd.roast = roast.value;
    console.log(userAdd);
    coffees.push(userAdd);
    tbody.innerHTML = renderCoffees(coffees);
}

//Converts selected coffee to HTML elements
function renderCoffee(coffee) {
    var html = "";
    html += "<span class='col-5 mx-2 p-0 my-2 animated flipInX'>";
    html += "<h1 class='d-inline-block mr-1'>" + coffee.name + "</h1>";
    html += "<p class='d-inline-block mr-2'>" + coffee.roast + "</p>";
    html += "</span>";
    console.log(html);
    return html;
}

//Converts HTML elements to one big string
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
    return html;
}

//Sorts thru coffee array and adds to HTML
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var roast = document.forms.form1.coffeeName.value;
    // console.log("success");
    // console.log(roast);
    // console.log(selectedRoast);
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all" )&& coffee.name.toLowerCase().includes(roast.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    // console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//variables for coffee
var tbody = document.querySelector('#coffeeid');
var submitButton = document.getElementById('roast-selection');
var roastSelection = document.querySelector('#roast-selection');
let userSubmit = document.querySelector('#userCoffeeSug');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('change', updateCoffees);
userSubmit.addEventListener('click',addCoffee);





//Pastry section

//registers typing into input
document.getElementById("pastryName").addEventListener('keyup', updatePastries);

//function to add user suggested pastry
function addPastry(e){
    e.preventDefault();
    let userAdd = {};
    let flavor = document.querySelector('#userFlavor');
    let name = document.querySelector('#userPastryName');
    let uppercaseName = name.value.replace(name.value[0], name.value[0].toUpperCase());
    console.log(uppercaseName);
    userAdd.id = (pastrys.length) + 1;
    userAdd.name = uppercaseName;
    userAdd.flavor = flavor.value;
    console.log(userAdd);
    pastrys.push(userAdd);
    tpbody.innerHTML = renderpastrys(pastrys);
}

//Converts selected pastry to HTML elements
function renderPastry(pastry) {
    var html = "";
    html += "<span class='col-5 mx-2 p-0 my-2 animated flipInX'>";
    html += "<h1 class='d-inline-block mr-1'>" + pastry.name + "</h1>";
    html += "<p class='d-inline-block mr-2'>" + pastry.flavor + "</p>";
    html += "</span>";

    return html;
}

//Converts HTML elements to one big string
function renderpastrys(pastrys) {
    var html = '';
    for(var i = pastrys.length - 1; i >= 0; i--) {
        html += renderPastry(pastrys[i]);
    }
    // console.log(html);
    return html;
}

//Sorts thru pastry array and adds to HTML
function updatePastries(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedFlavor = flavorSelection.value;
    var filteredPastries = [];
    var flavor = document.forms.form2.pastryName.value;
    // console.log("success");
    console.log(flavor);
    console.log(selectedFlavor);
    pastrys.forEach(function(pastry) {
        if ((pastry.flavor === selectedFlavor || selectedFlavor === "All" )&& pastry.name.toLowerCase().includes(flavor.toLowerCase())) {
            filteredPastries.push(pastry);
        }
    });
    console.log(filteredPastries);
    tpbody.innerHTML = renderpastrys(filteredPastries);
}

// from http://www.ncausa.org/About-pastry/pastry-Roasts-Guide
var pastrys = [
    {id: 1, name: 'Cheese Danish', flavor: 'sweet'},
    {id: 2, name: 'Coffee Cake', flavor: 'sweet'},
    {id: 3, name: 'Chocolate Chip Cookie', flavor: 'sweet'},
    {id: 4, name: 'Lemon Bars', flavor: 'sweet'},
    {id: 5, name: 'Marble Pound Cake', flavor: 'sweet'},
    {id: 6, name: 'Sugar-Free Brownies', flavor: 'sweet'},
    {id: 7, name: 'Sausage Kolache', flavor: 'savory'},
    {id: 8, name: 'Bacon,Egg,Cheese Crossaint', flavor: 'savory'},
    {id: 9, name: 'Spinach Quiche', flavor: 'savory'},
    {id: 10, name: 'Avocado Toast', flavor: 'savory'},
    {id: 11, name: 'Vanilla Ice Cream', flavor: 'frozen'},
    {id: 12, name: 'Chocolate', flavor: 'frozen'},
    {id: 13, name: 'Strawberry', flavor: 'frozen'},
    {id: 14, name: 'Rainbow Sherbet', flavor: 'frozen'},
];

//variables for coffee
var tpbody = document.querySelector('#pastryId');
var submitPButton = document.getElementById('flavor-selection');
var flavorSelection = document.querySelector('#flavor-selection');
let userPSubmit = document.querySelector('#userPastrySug');
tpbody.innerHTML = renderpastrys(pastrys);
submitPButton.addEventListener('change', updatePastries);
userPSubmit.addEventListener('click',addPastry);
