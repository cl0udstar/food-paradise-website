var hint1 = document.getElementById("hint1-txt");
var hint2 = document.getElementById("hint2-txt");
var hint3 = document.getElementById("hint3-txt");
var hint4 = document.getElementById("hint4-txt");
var hint5 = document.getElementById("hint5-txt");


function hint_1() {
    if (hint1.style.display === "none") {
        hint1.style.display = "block";
        hint2.style.display = "none";
        hint3.style.display = "none";
        hint4.style.display = "none";
        hint5.style.display = "none";
    } else {
        hint1.style.display = "none";
    }
}

function hint_2() {
    if (hint2.style.display === "none") {
        hint1.style.display = "none";
        hint2.style.display = "block";
        hint3.style.display = "none";
        hint4.style.display = "none";
        hint5.style.display = "none";
    } else {
        hint2.style.display = "none";
    }
}

function hint_3() {
    if (hint3.style.display === "none") {
        hint1.style.display = "none";
        hint2.style.display = "none";
        hint3.style.display = "block";
        hint4.style.display = "none";
        hint5.style.display = "none";
    } else {
        hint3.style.display = "none";
    }
}

function hint_4() {
    if (hint4.style.display === "none") {
        hint1.style.display = "none";
        hint2.style.display = "none";
        hint3.style.display = "none";
        hint4.style.display = "block";
        hint5.style.display = "none";
    } else {
        hint4.style.display = "none";
    }
}

function hint_5() {
    if (hint5.style.display === "none") {
        hint1.style.display = "none";
        hint2.style.display = "none";
        hint3.style.display = "none";
        hint4.style.display = "none";
        hint5.style.display = "block";
    } else {
        hint5.style.display = "none";
    }
}
