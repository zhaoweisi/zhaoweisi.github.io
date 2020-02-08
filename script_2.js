var total_count = 0;
var avocado_count = 0;
var oats_count = 0;
var steaks_count = 0;
var chicken_count = 0;

//Add items - Products
function add_avocado() {
    total_count++;
    document.getElementById("total_Count").textContent = "You have " + total_count + " items in total.";
    avocado_count++;
    document.getElementById("avocadoCount").textContent = "You added " + avocado_count + " avocados.";
}

function add_oats() {
    total_count++;
    document.getElementById("total_Count").textContent = "You have " + total_count + " items in total.";
    oats_count++;
    document.getElementById("oatsCount").textContent = "You added " + oats_count + " oats.";
}

function add_steak() {
    total_count++;
    document.getElementById("total_Count").textContent = "You have " + total_count + " items in total.";
    steaks_count++;
    document.getElementById("steakCount").textContent = "You added " + steaks_count + " steaks.";
}

function add_chicken() {
    total_count++;
    document.getElementById("total_Count").textContent = "You have " + total_count + " items in total.";
    chicken_count++;
    document.getElementById("chickenCount").textContent = "You added " + chicken_count + " chicken.";
}