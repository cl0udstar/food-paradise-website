var secret = Math.random().toString(36).slice(2, 15);
document.getElementById("flag").innerHTML = secret;

function displayFlag() {
    const flag_contents1 = document.getElementById("flag-text");
    const flag_contents2 = document.getElementById("flag");
    flag_contents1.style.visibility = "visible";
    flag_contents2.style.visibility = "visible";
    flag_contents2.style.cursor = "pointer";
}

function copyFlag() {
    navigator.clipboard.writeText(secret);
}

// function secretFind() {
//     var check_box_hint1 = document.getElementById("hint1-check");
//     var check_box_hint2 = document.getElementById("hint2-check");
//     var check_box_hint3 = document.getElementById("hint3-check");
//     var check_box_hint4 = document.getElementById("hint4-check");
//     var check_box_hint5 = document.getElementById("hint5-check");
    
//     if (check_box_hint1.checked == true && check_box_hint2.checked == true && check_box_hint3.checked == false && check_box_hint4.checked == true && check_box_hint5.checked == false) {
//         var secret_recipe = prompt("---Hopefully you have the flag copied!---\n--If not keep searching. (at least you found the prompt)");
//         if (secret_recipe == secret) {
//             const url = "recipes/secret-recipe-pizza.html";
//             window.open(url, "_self"); 
//         } else {
//             location.reload();
//         }
//     }
// }

function spoiler() {
    const key = document.getElementById("hide-key");

    key.style.backgroundColor = "transparent";
    key.style.color = "#FEFFE2";
    key.style.cursor = "default";
}

var check_box_hint1 = document.getElementById("hint1-check");
var check_box_hint2 = document.getElementById("hint2-check");
var check_box_hint3 = document.getElementById("hint3-check");
var check_box_hint4 = document.getElementById("hint4-check");
var check_box_hint5 = document.getElementById("hint5-check");

function displayPrompt() {

    var hint1 = document.getElementById("hint1-txt");
    var hint2 = document.getElementById("hint2-txt");
    var hint3 = document.getElementById("hint3-txt");
    var hint4 = document.getElementById("hint4-txt");
    var hint5 = document.getElementById("hint5-txt");

    const p_box = document.getElementById("prompt-box");

    if (check_box_hint1.checked == true && check_box_hint2.checked == true && check_box_hint3.checked == false && check_box_hint4.checked == true && check_box_hint5.checked == false) {
        p_box.style.visibility = "visible";

        hint1.style.display = "none";
        hint2.style.display = "none";
        hint3.style.display = "none";
        hint4.style.display = "none";
        hint5.style.display = "none";

    } else {
        p_box.style.visibility = "hidden";
    }
}

function checkKey() {
    var inputValue = document.getElementById("key-text").value;
    if (inputValue == secret) {
        check_box_hint1.checked = false;
        check_box_hint2.checked = false;
        check_box_hint3.checked = false;
        check_box_hint4.checked = false;
        check_box_hint5.checked = false;

        const url = "recipes/secret-recipe-pizza.html";
        window.open(url, "_self"); 
    } else {
        location.reload();
    }
}