const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
const header = document.querySelector(".header");
const recipeImage = document.querySelector(".recipe-image img");
const introduction = document.querySelector(".introduction");
const ingrediants = document.querySelector(".ingrediants");
const instructions = document.querySelector(".instructions");
const ul = document.querySelector("ul");

async function loadRecipe() {
    let response = await fetch(url);
    let data = await response.json();

    header.innerHTML = `<h1>${data.meals[0].strMeal}</h1>`;

    recipeImage.src = `${data.meals[0].strMealThumb}`;

    introduction.innerHTML = `<p>
    This delicious <b>${data.meals[0].strMeal}</b> belongs to the famous <b>${data.meals[0].strCategory}</b> category. 
    It represents the rich authentic flavors unique to the <b>${data.meals[0].strArea}</b> region. 
    Local chefs pass down this iconic recipe across generations in <b>${data.meals[0].strCountry}</b>. 
    People worldwide love this dish for its unique taste and cultural heritage.
    </p>`;

    for(let i = 1; i < 20; i++) {
        let item = data.meals[0][`strIngredient${i}`];

        if(item && item.trim() !== "") {
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        }
    }

    let rawInstructions = data.meals[0].strInstructions;
    let steps = rawInstructions.split(/\r?\n/);

    if(steps.length <= 1) {
        steps = rawInstructions.split('.');
    }

    let ol = document.createElement("ol");

    steps.forEach(step => {
        let cleanStep = step.trim();
        if(cleanStep.length > 0) {
            let li = document.createElement("li");
            li.textContent = cleanStep;
            ol.appendChild(li);
        }
    });

    instructions.appendChild(ol);
    
}

loadRecipe();