function showPage(page) {
    const pages = ['home-page', 'restaurants-page', 'categories-page', 'suggestions-page', 'restaurant-page', 'food-page'];
    pages.forEach(p => document.getElementById(p).style.display = 'none');
    document.getElementById(page).style.display = 'block';
    if (page === 'restaurants-page') {
        loadRestaurants();
    }
}

function loadRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';
    restaurants.forEach((restaurant, index) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = `
            <h3>${restaurant.name}</h3>
            <button onclick="showMenu(${index})">View Menu</button>
        `;
        restaurantList.appendChild(restaurantItem);
    });
}

function showMenu(restaurantIndex) {
    const menuList = document.getElementById('menu-list');
    const restaurantName = document.getElementById('restaurant-name');
    const restaurant = restaurants[restaurantIndex];

    restaurantName.innerText = restaurant.name;
    menuList.innerHTML = '';

    restaurant.menu.forEach((food, index) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h4>${food.name}</h4>
            <button onclick="showFoodDetails(${restaurantIndex}, ${index})">View Details</button>
        `;
        menuList.appendChild(foodItem);
    });

    showPage('restaurant-page');
}

function showFoodDetails(restaurantIndex, foodIndex) {
    const food = restaurants[restaurantIndex].menu[foodIndex];

    document.getElementById('food-name').innerText = food.name;
    document.getElementById('food-ingredients').innerText = `Ingredients: ${food.ingredients}`;
    document.getElementById('food-calories').innerText = `Calories: ${food.calories}`;
    document.getElementById('food-fat').innerText = `Fat: ${food.fat}`;
    document.getElementById('food-protein').innerText = `Protein: ${food.protein}`;
    document.getElementById('food-price').innerText = `Price: ${food.price}`;

    showPage('food-page');
}
