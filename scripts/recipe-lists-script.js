var list_sec1 = document.getElementById("creator");
var list_sec2 = document.getElementById("moldovan-food");
var list_sec3 = document.getElementById("quick-food");
var list_sec4 = document.getElementById("delicious-dishes");
var list_sec5 = document.getElementById("vegetarian");


function list_section1() {
    if (list_sec1.style.display === "none") {
        list_sec1.style.display = "flex";
        list_sec2.style.display = "none";
        list_sec3.style.display = "none";
        list_sec4.style.display = "none";
        list_sec5.style.display = "none";
    } else {
        list_sec1.style.display = "none";
    }
}

function list_section2() {
    if (list_sec2.style.display === "none") {
        list_sec1.style.display = "none";
        list_sec2.style.display = "flex";
        list_sec3.style.display = "none";
        list_sec4.style.display = "none";
        list_sec5.style.display = "none";
    } else {
        list_sec2.style.display = "none";
    }
}

function list_section3() {
    if (list_sec3.style.display === "none") {
        list_sec1.style.display = "none";
        list_sec2.style.display = "none";
        list_sec3.style.display = "flex";
        list_sec4.style.display = "none";
        list_sec5.style.display = "none";
    } else {
        list_sec3.style.display = "none";
    }
}

function list_section4() {
    if (list_sec4.style.display === "none") {
        list_sec1.style.display = "none";
        list_sec2.style.display = "none";
        list_sec3.style.display = "none";
        list_sec4.style.display = "flex";
        list_sec5.style.display = "none";
    } else {
        list_sec4.style.display = "none";
    }
}

function list_section5() {
    if (list_sec5.style.display === "none") {
        list_sec1.style.display = "none";
        list_sec2.style.display = "none";
        list_sec3.style.display = "none";
        list_sec4.style.display = "none";
        list_sec5.style.display = "flex";
    } else {
        list_sec5.style.display = "none";
    }
}