const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

async function searchRecipe(searchText){
    const response = await fetch("countries.json")
    const recipes = await response.json()

    // let matches = recipes.filter(recipe => {
    //     const regex = new RegExp(`^${searchText}`, "gi")
    //     return recipe.name.match(regex)
    // })
    console.log(recipes)
}
searchRecipe(0)
// search.addEventListener("input", () => searchRecipe(search.value))