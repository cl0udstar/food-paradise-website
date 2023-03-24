//
// The data that will be matched
//
const objects = [
    {
        "name": "Chicken pasta bake",
        "ingredients": [
            {
                "ing1": "olive oil",
                "ing2": "onion",
                "ing3": "garlic",
                "ing4": "chilli flakes",
                "ing5": "chopped tomatoes",
                "ing6": "caster sugar",
                "ing7": "mascarpone",
                "ing8": "chicken breasts",
                "ing9": "penne",
                "ing10": "cheddar",
                "ing11": "mozzarella",
                "ing12": "parsley"
            }
        ]
    },
    {
        "name": "Smoky beans on toast",
        "ingredients": [
            {
                "ing1": "onion",
                "ing2": "red pepper",
                "ing3": "olive oil",
                "ing4": "garlic",
                "ing5": "chopped tomatoes",
                "ing6": "smoked paprika",
                "ing7": "red wine vinegar",
                "ing8": "butter beans",
                "ing9": "sugar",
                "ing10": "seeded bread",
                "ing11": "parsley"
            }
        ]
    },
    {
        "name": "Mamaliga",
        "ingredients": [
            {
                "ing1": "corn flour",
                "ing2": "water",
                "ing3": "salt",
                "ing4": "butter"
            }
        ]
    },
    // {
    //     "name": "Moldovan steak in sauce",
    //     "ingredients": [
    //         {
    //             "ing1": "onion",
    //             "ing2": "carrots",
    //             "ing3": "bell pepper",
    //             "ing4": "tomato souce",
    //             "ing5": "pork meat",
    //             "ing6": "black pepper",
    //             "ing7": "paprika",
    //             "ing8": "garlic powder"
    //         }
    //     ]
    // },
    {
        "name": "Vegetarian Lasagna",
        "ingredients": [
            {
                "ing1": "red peppers",
                "ing2": "aubergines",
                "ing3": "olive oil",
                "ing4": "lasagna sheets",
                "ing5": "mozarella",
                "ing6": "cherry tomatoes",
                "ing7": "onions",
                "ing8": "garlic",
                "ing9": "carrot",
                "ing10": "tomato puree",
                "ing11": "white wine",
                "ing12": "chopped tomatoes",
                "ing13": "basil",
                "ing14": "butter",
                "ing15": "plain flour",
                "ing16": "milk"
            }
        ]
    },
    {
        "name": "Chicken jalfrezi",
        "ingredients": [
            {
                "ing1": "onion",
                "ing2": "garlic cloves",
                "ing3": "green chilli",
                "ing4": "vegetable oil",
                "ing5": "plum tomatoes",
                "ing6": "coriander",
                "ing7": "cumin",
                "ing8": "turmenic",
                "ing9": "chicken breasts",
                "ing10": "red pepper",
                "ing11": "red chillies",
                "ing12": "garam masala",
                "ing13": "coriander leaves",
                "ing14": "basmati rise"
            }
        ]
    },
    {
        "name": "Healthy lasagna",
        "ingredients": [
            {
                "ing1": "olive oil",
                "ing2": "onion",
                "ing3": "carrots",
                "ing4": "celery sticks",
                "ing5": "bay leaves",
                "ing6": "beef mince",
                "ing7": "garlic cloves",
                "ing8": "chopped tomatoes",
                "ing9": "tomato puree",
                "ing10": "vagatable bouillon powder",
                "ing11": "semi-skimmed milk",
                "ing12": "wholemeal flour",
                "ing13": "nutmeg",
                "ing14": "lasagna sheets",
                "ing15": "parmesan"
            }
        ]
    },
    {
        "name": "Omlette",
        "ingredients": [
            {
                "ing1": "eggs",
                "ing2": "sunflower oil",
                "ing3": "butter"
            }
        ]
    },
    {
        "name": "Fried Rice",
        "ingredients": [
            {
                "ing1": "oil",
                "ing2": "egg",
                "ing3": "bacon",
                "ing4": "mushrooms",
                "ing5": "frozen peas",
                "ing6": "garlic",
                "ing7": "ginger",
                "ing8": "dark soy sauce",
                "ing9": "sugar",
                "ing10": "cooked basmati rice"
            }
        ]
    },
    {
        "name": "Tomato Risotto",
        "ingredients": [
            {
                "ing1": "risotto rice",
                "ing2": "onion",
                "ing3": "butter",
                "ing4": "vegetable stock",
                "ing5": "carton passata",
                "ing6": "cherry tomato",
                "ing7": "mozzrella",
                "ing8": "parmesan"
            }
        ]
    },
    {
        "name": "Fish Curry",
        "ingredients": [
            {
                "ing1": "vegetable oil",
                "ing2": "onion",
                "ing3": "garlic",
                "ing4": "curry paste",
                "ing5": "canned tomatoes",
                "ing6": "vegetable stock",
                "ing7": "fish fillets",
                "ing8": "rice"
            }
        ]
    },
    {
        "name": "Summer Salad",
        "ingredients": [
            {
                "ing1": "black beans",
                "ing2": "spinach leaves",
                "ing3": "tomatoes",
                "ing4": "cucumber",
                "ing5": "mango",
                "ing6": "red onion",
                "ing7": "radishes",
                "ing8": "avocado",
                "ing9": "feta",
                "ing10": "mint",
                "ing11": "coriander",
                "ing12": "basil",
                "ing13": "green chilli",
                "ing14": "garlic",
                "ing15": "olive oil",
                "ing16": "lime",
                "ing17": "white wine vinegar",
                "ing18": "honey"
            }
        ]
    },
    {
        "name": "Mexican Bean Soup",
        "ingredients": [
            {
                "ing1": "rapeseed oil",
                "ing2": "onion",
                "ing3": "red pepper",
                "ing4": "garlic",
                "ing5": "mild chilli powder",
                "ing6": "coriander",
                "ing7": "cumin",
                "ing8": "chopped tomatoes",
                "ing9": "black beans",
                "ing10": "vegetable bouillon powder",
                "ing11": "avocado",
                "ing12": "lime",
                "ing13": "red chilli"
            }
        ]
    },
    {
        "name": "Creamy Mushroom Soup",
        "ingredients": [
            {
                "ing1": "dried porcini",
                "ing2": "butter",
                "ing3": "onion",
                "ing4": "garlic",
                "ing5": "thyme",
                "ing6": "mushrooms",
                "ing7": "vegetable stock",
                "ing8": "parsley",
                "ing9": "creme fraiche",
                "ing10": "cubed white bread",
                "ing11": "pepper",
                "ing12": "chives",
                "ing13": "truffle oil"
            }
        ]
    }, 
    {
        "name": "",
        "ingredients": [{}]
    }
]; 



//
// Main function.
// When a key is pressed, the function kicks in.
// It gets the input from the input box.
// Matches the input with the objects in the data array.
// Displays the data matched.
//
function getInputValue(){
    console.clear()

    // Store the input value
    var inputValue = document.getElementById("search").value.toLowerCase();
    console.log(inputValue);

    // Create array to hold data that is a match
    var results = []

    // Loop through the main data array
    for (i = 0; i < objects.length; i++) {

        // Convert the data to JSON format and to lower case
        const objectsConvert = JSON.stringify(objects[i]["name"]).toLowerCase();

        // Variable that holds the match
        let found = objectsConvert.match(inputValue);

        // // Validation check
        if (found === null) {
            if (results.length === 0) {
                console.log("No match!");
                document.getElementById("output").innerHTML = "";
                document.getElementById("output-text").innerHTML = "No match";
            } else {
                document.getElementById("output").innerHTML = "";
                document.getElementById("output-text").innerHTML = "";
            }
        } else if (inputValue === '') {
            found = null
            console.log("No data")
            document.getElementById("output-text").innerHTML = "Try searching for something";
            document.getElementById("output").innerHTML = "";
        } else {
            console.log(found)
            results.push(objects[i]["name"]);
        //     //console.log(objectsConvert);
        //     //console.log(found)
        }
        
        
        // console.log(objectsConvert.replace(/\s+/g, '-').toLowerCase());
    }

    // Remove any data previously stored in the div
    // /document.getElementById("output").innerHTML = "";

    // Loop through the results array
    for (i = 0; i < results.length; i++) {
        console.log(results[i].replace(/\s+/g, '-').toLowerCase());
        const div = document.createElement("div");
        div.className = "image-link";
        
        const recipeImage = results[i].replace(/\s+/g, '-').toLowerCase();
        // Create an image tag
        const img = document.createElement("img");
        img.src = "images/" + recipeImage + ".png";
        // img.src = "images/" + recipeImage + ".jpg";
        img.className = "image";
        img.draggable = false;

        // Create an anchor tag
        const a = document.createElement("a");
        a.innerHTML = results[i];
        a.title = results[i].replace(/\s+/g, '-').toLowerCase();
        a.href = "recipes/" + a.title + ".html";

        // Append the 'img' and 'a' tag to the div element
        div.appendChild(img);
        div.appendChild(a);

        if (results.length <= 3) {
            document.getElementById("output-text").appendChild(div);
            document.getElementById("output").innerHTML = "";
        } else {
            // Create the output for the html
            document.getElementById("output").appendChild(div);
            document.getElementById("output-text").innerHTML = "";
        }
    }
}

    
// function getInputValue2(){
//     console.clear()

//     var checked = document.getElementById("search2");

//     if (checked.checked == true) {

//         // Store the input value
//         var inputValue = document.getElementById("search2").value.toLowerCase();
//         console.log(inputValue);

//         // Create array to hold data that is a match
//         var results = []        

//         // Loop through the main data array
//         for (i = 0; i < objects.length; i++) {
//             // Convert the data to JSON format and to lower case
//             const objectsConvert = JSON.stringify(objects[i]["ingredients"]).toLowerCase();

//             // Variable that holds the match
//             let found = objectsConvert.match(inputValue);
            

//             // Validation check
//             if (found === null) {
//                 if (results.length === 0) {
//                     console.log("No match!");
//                     ddocument.getElementById("output").innerHTML = "";
//                     document.getElementById("output-text").innerHTML = "No match";
//                 } else {
//                     document.getElementById("output").innerHTML = "";
//                     document.getElementById("output-text").innerHTML = "";
//                 }
//             } else if (inputValue === '') {
//                 found = null;
//                 console.log("No data");
//                 document.getElementById("output-text").innerHTML = "Try Searching for something";
//                 document.getElementById("output").innerHTML = "";
//             } else {
//                 results.push(objects[i]["name"]);
//             }

            
//         }

//         // Remove any data previously stored in the div
//         //document.getElementById("output").innerHTML = "";

    
//         // Loop through the results array
//         for (i = 0; i < results.length; i++) {
//             const div = document.createElement("div");
//             div.className = "image-link";
            
//             // Create an image tag
//             const img = document.createElement("img");
//             img.src = "images/test1.jpg";
//             img.className = "image";
//             img.draggable = false;

//             // Create an anchor tag
//             const a = document.createElement("a");
//             a.innerHTML = results[i];
//             a.title = convertedResult = results[i].replace(/\s+/g, '-').toLowerCase();
//             a.href = a.title + ".html";

//             // Append the 'img' and 'a' tag to the div element
//             div.appendChild(img);
//             div.appendChild(a);

//             // Create the output for the html
//             document.getElementById("output").appendChild(div);
//         }
//     } else {
//         document.getElementById("output").innerHTML = "";
//         console.log("Unchecked")
//     }
// }