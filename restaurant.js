const restaurants = [
    {
        name: "BARBEQUE NATION",
        menu: [
            { name: 'Paneer Tikka', ingredients: 'Paneer, spices, bell peppers', calories: 200, fat: '10g', protein: '12g', price: '₹250' },
            { name: 'Chicken Biryani', ingredients: 'Chicken, rice, spices', calories: 600, fat: '15g', protein: '25g', price: '₹350' },
            { name: 'Veg Platter', ingredients: 'Variety of veg dishes', calories: 300, fat: '12g', protein: '10g', price: '₹300' },
            { name: 'Mutton Seekh Kebab', ingredients: 'Mutton, spices', calories: 400, fat: '30g', protein: '25g', price: '₹400' },
            { name: 'Fish Curry', ingredients: 'Fish, spices, coconut milk', calories: 350, fat: '20g', protein: '30g', price: '₹300' },
            { name: 'Tandoori Chicken', ingredients: 'Chicken, spices', calories: 450, fat: '20g', protein: '30g', price: '₹350' },
            { name: 'Paneer Butter Masala', ingredients: 'Paneer, butter, cream, spices', calories: 500, fat: '40g', protein: '20g', price: '₹300' },
            { name: 'Dal Makhani', ingredients: 'Black lentils, cream, spices', calories: 350, fat: '10g', protein: '15g', price: '₹200' },
            { name: 'Veg Fried Rice', ingredients: 'Rice, vegetables', calories: 300, fat: '5g', protein: '7g', price: '₹200' },
            { name: 'Gulab Jamun', ingredients: 'Milk solids, sugar, rose water', calories: 250, fat: '12g', protein: '4g', price: '₹150' }
        ]
    },
    {
        name: "SMOKE HUB BARBEQUE",
        menu: [
            { name: 'Chicken Tikka', ingredients: 'Chicken, spices', calories: 300, fat: '15g', protein: '25g', price: '₹300' },
            { name: 'Veg Biryani', ingredients: 'Rice, vegetables, spices', calories: 500, fat: '15g', protein: '10g', price: '₹300' },
            { name: 'Grilled Fish', ingredients: 'Fish, spices', calories: 350, fat: '10g', protein: '25g', price: '₹400' },
            { name: 'Cheese Naan', ingredients: 'Naan, cheese', calories: 250, fat: '10g', protein: '8g', price: '₹150' },
            { name: 'Palak Paneer', ingredients: 'Spinach, paneer', calories: 300, fat: '20g', protein: '15g', price: '₹250' },
            { name: 'Tandoori Roti', ingredients: 'Whole wheat flour', calories: 100, fat: '1g', protein: '4g', price: '₹50' },
            { name: 'Samosa', ingredients: 'Potatoes, spices', calories: 150, fat: '7g', protein: '3g', price: '₹50' },
            { name: 'Veg Manchurian', ingredients: 'Vegetables, soy sauce', calories: 400, fat: '20g', protein: '10g', price: '₹200' },
            { name: 'Lassi', ingredients: 'Yogurt, sugar', calories: 200, fat: '5g', protein: '6g', price: '₹100' },
            { name: 'Kheer', ingredients: 'Rice, milk, sugar', calories: 250, fat: '10g', protein: '6g', price: '₹150' }
        ]
    },
    {
        name: "KITES CAFE",
        menu: [
            { name: 'Pasta Primavera', ingredients: 'Pasta, vegetables', calories: 500, fat: '10g', protein: '15g', price: '₹300' },
            { name: 'Cheesy Garlic Bread', ingredients: 'Bread, cheese, garlic', calories: 300, fat: '15g', protein: '10g', price: '₹150' },
            { name: 'Caprese Salad', ingredients: 'Tomato, mozzarella, basil', calories: 200, fat: '10g', protein: '10g', price: '₹250' },
            { name: 'Mushroom Risotto', ingredients: 'Rice, mushrooms', calories: 600, fat: '20g', protein: '12g', price: '₹350' },
            { name: 'Tiramisu', ingredients: 'Coffee, mascarpone', calories: 400, fat: '25g', protein: '6g', price: '₹200' },
            { name: 'Caesar Salad', ingredients: 'Lettuce, croutons, dressing', calories: 250, fat: '15g', protein: '6g', price: '₹200' },
            { name: 'Spinach and Ricotta Ravioli', ingredients: 'Pasta, spinach, ricotta', calories: 500, fat: '15g', protein: '18g', price: '₹350' },
            { name: 'Vegetable Lasagna', ingredients: 'Pasta, vegetables', calories: 600, fat: '25g', protein: '20g', price: '₹400' },
            { name: 'Fruit Tart', ingredients: 'Fruits, pastry', calories: 300, fat: '10g', protein: '4g', price: '₹150' },
            { name: 'Panna Cotta', ingredients: 'Cream, sugar', calories: 350, fat: '20g', protein: '5g', price: '₹200' }
        ]
    },
    {
        name: "JUNIOR KUPPANA",
        menu: [
            { name: 'Mutton Curry', ingredients: 'Mutton, spices', calories: 450, fat: '35g', protein: '28g', price: '₹400' },
            { name: 'Chicken 65', ingredients: 'Chicken, spices', calories: 300, fat: '20g', protein: '25g', price: '₹250' },
            { name: 'Kothu Parotta', ingredients: 'Parotta, meat', calories: 500, fat: '25g', protein: '20g', price: '₹350' },
            { name: 'Chettinad Chicken', ingredients: 'Chicken, spices', calories: 400, fat: '25g', protein: '30g', price: '₹350' },
            { name: 'Fish Fry', ingredients: 'Fish, spices', calories: 300, fat: '15g', protein: '20g', price: '₹300' },
            { name: 'Veg Kurma', ingredients: 'Vegetables, spices', calories: 250, fat: '10g', protein: '8g', price: '₹200' },
            { name: 'Prawn Biryani', ingredients: 'Prawns, rice, spices', calories: 600, fat: '25g', protein: '30g', price: '₹450' },
            { name: 'Curd Rice', ingredients: 'Rice, yogurt', calories: 200, fat: '5g', protein: '6g', price: '₹100' },
            { name: 'Chutney', ingredients: 'Coconut, spices', calories: 100, fat: '5g', protein: '2g', price: '₹50' },
            { name: 'Gulab Jamun', ingredients: 'Milk solids, sugar', calories: 250, fat: '12g', protein: '4g', price: '₹150' }
        ]
    },
    {
        name: "LITTLE ITALLY",
        menu: [
            { name: 'Margherita Pizza', ingredients: 'Tomato, mozzarella, basil', calories: 300, fat: '10g', protein: '12g', price: '₹300' },
            { name: 'Penne Arrabbiata', ingredients: 'Pasta, tomato sauce', calories: 500, fat: '15g', protein: '15g', price: '₹350' },
            { name: 'Fettuccine Alfredo', ingredients: 'Pasta, cream', calories: 600, fat: '30g', protein: '18g', price: '₹400' },
            { name: 'Garlic Butter Bread', ingredients: 'Bread, garlic, butter', calories: 400, fat: '20g', protein: '8g', price: '₹150' },
            { name: 'Vegetable Pizza', ingredients: 'Tomato, cheese, vegetables', calories: 350, fat: '12g', protein: '14g', price: '₹350' },
            { name: 'Pasta Salad', ingredients: 'Pasta, vegetables', calories: 300, fat: '10g', protein: '8g', price: '₹250' },
            { name: 'Lasagna', ingredients: 'Pasta, meat, cheese', calories: 700, fat: '40g', protein: '30g', price: '₹450' },
            { name: 'Caesar Salad', ingredients: 'Lettuce, croutons, dressing', calories: 250, fat: '15g', protein: '6g', price: '₹200' },
            { name: 'Tiramisu', ingredients: 'Coffee, mascarpone', calories: 400, fat: '25g', protein: '6g', price: '₹200' },
            { name: 'Gelato', ingredients: 'Milk, sugar', calories: 250, fat: '15g', protein: '5g', price: '₹150' }
        ]
    },
    {
        name: "HARI BHAVANAM",
        menu: [
            { name: 'Falafel Wrap', ingredients: 'Falafel, vegetables, wrap', calories: 400, fat: '15g', protein: '10g', price: '₹200' },
            { name: 'Hummus Plate', ingredients: 'Hummus, pita bread', calories: 300, fat: '10g', protein: '8g', price: '₹150' },
            { name: 'Shawarma Plate', ingredients: 'Chicken, vegetables, pita', calories: 600, fat: '25g', protein: '30g', price: '₹400' },
            { name: 'Tabbouleh Salad', ingredients: 'Parsley, bulgur, tomatoes', calories: 250, fat: '8g', protein: '7g', price: '₹200' },
            { name: 'Baklava', ingredients: 'Nuts, honey, pastry', calories: 300, fat: '15g', protein: '5g', price: '₹150' },
            { name: 'Kebabs', ingredients: 'Meat, spices', calories: 500, fat: '25g', protein: '30g', price: '₹400' },
            { name: 'Lentil Soup', ingredients: 'Lentils, spices', calories: 200, fat: '5g', protein: '10g', price: '₹100' },
            { name: 'Pita Bread', ingredients: 'Flour, water', calories: 150, fat: '1g', protein: '5g', price: '₹50' },
            { name: 'Mujadara', ingredients: 'Lentils, rice', calories: 300, fat: '10g', protein: '12g', price: '₹200' },
            { name: 'Mansaf', ingredients: 'Lamb, rice, yogurt', calories: 700, fat: '35g', protein: '40g', price: '₹500' }
        ]
    },
    {
        name: "SALEM RR",
        menu: [
            { name: 'Gyoza', ingredients: 'Dumplings, meat, vegetables', calories: 400, fat: '20g', protein: '15g', price: '₹200' },
            { name: 'Ramen', ingredients: 'Noodles, broth, meat', calories: 600, fat: '25g', protein: '30g', price: '₹400' },
            { name: 'Sushi Platter', ingredients: 'Rice, fish, vegetables', calories: 500, fat: '15g', protein: '25g', price: '₹500' },
            { name: 'Teriyaki Chicken', ingredients: 'Chicken, sauce', calories: 350, fat: '10g', protein: '30g', price: '₹300' },
            { name: 'Tempura', ingredients: 'Vegetables, batter', calories: 300, fat: '15g', protein: '5g', price: '₹200' },
            { name: 'Miso Soup', ingredients: 'Tofu, seaweed', calories: 200, fat: '5g', protein: '10g', price: '₹100' },
            { name: 'Edamame', ingredients: 'Soybeans, salt', calories: 150, fat: '5g', protein: '10g', price: '₹100' },
            { name: 'Bento Box', ingredients: 'Rice, vegetables, protein', calories: 700, fat: '25g', protein: '40g', price: '₹500' },
            { name: 'Green Tea Ice Cream', ingredients: 'Green tea, cream', calories: 250, fat: '15g', protein: '5g', price: '₹150' },
            { name: 'Matcha Cake', ingredients: 'Matcha, flour', calories: 300, fat: '10g', protein: '6g', price: '₹200' }
        ]
    },
    {
        name: "CHEAP AND BEST",
        menu: [
            { name: 'Croissant', ingredients: 'Flour, butter', calories: 250, fat: '15g', protein: '6g', price: '₹100' },
            { name: 'Quiche Lorraine', ingredients: 'Eggs, cheese, bacon', calories: 400, fat: '30g', protein: '20g', price: '₹250' },
            { name: 'Coq au Vin', ingredients: 'Chicken, wine, mushrooms', calories: 600, fat: '25g', protein: '40g', price: '₹450' },
            { name: 'Ratatouille', ingredients: 'Vegetables, spices', calories: 300, fat: '10g', protein: '8g', price: '₹200' },
            { name: 'Chocolate Mousse', ingredients: 'Chocolate, cream', calories: 400, fat: '25g', protein: '6g', price: '₹200' },
            { name: 'Baguette', ingredients: 'Flour, water', calories: 200, fat: '1g', protein: '8g', price: '₹50' },
            { name: 'Tarte Tatin', ingredients: 'Apples, pastry', calories: 350, fat: '15g', protein: '4g', price: '₹200' },
            { name: 'Crème Brûlée', ingredients: 'Cream, sugar', calories: 400, fat: '30g', protein: '5g', price: '₹200' },
            { name: 'Madeleine', ingredients: 'Flour, butter, eggs', calories: 300, fat: '15g', protein: '6g', price: '₹150' },
            { name: 'Macaron', ingredients: 'Almonds, sugar', calories: 150, fat: '6g', protein: '3g', price: '₹100' }
        ]
    },
    {
        name: "SHREE ANANDHASS",
        menu: [
            { name: 'Veggie Burger', ingredients: 'Vegetables, bun', calories: 300, fat: '10g', protein: '15g', price: '₹200' },
            { name: 'Classic Cheeseburger', ingredients: 'Beef, cheese, bun', calories: 500, fat: '30g', protein: '25g', price: '₹400' },
            { name: 'Fried Chicken Sandwich', ingredients: 'Chicken, bun, pickles', calories: 600, fat: '35g', protein: '30g', price: '₹350' },
            { name: 'Buffalo Wings', ingredients: 'Chicken, sauce', calories: 400, fat: '25g', protein: '20g', price: '₹300' },
            { name: 'Caesar Salad', ingredients: 'Lettuce, croutons, dressing', calories: 250, fat: '15g', protein: '6g', price: '₹200' },
            { name: 'Onion Rings', ingredients: 'Onions, batter', calories: 300, fat: '20g', protein: '5g', price: '₹100' },
            { name: 'Milkshake', ingredients: 'Milk, ice cream', calories: 400, fat: '20g', protein: '8g', price: '₹200' },
            { name: 'French Fries', ingredients: 'Potatoes, oil', calories: 350, fat: '18g', protein: '4g', price: '₹100' },
            { name: 'Apple Pie', ingredients: 'Apples, pastry', calories: 250, fat: '10g', protein: '3g', price: '₹150' },
            { name: 'Brownie', ingredients: 'Chocolate, flour', calories: 300, fat: '15g', protein: '5g', price: '₹150' }
        ]
    },
    {
        name: "SHREE ANAPOORNA",
        menu: [
            { name: 'Nachos', ingredients: 'Tortilla chips, cheese', calories: 300, fat: '15g', protein: '10g', price: '₹200' },
            { name: 'Quesadilla', ingredients: 'Tortilla, cheese', calories: 400, fat: '25g', protein: '15g', price: '₹300' },
            { name: 'Tacos', ingredients: 'Tortilla, meat, vegetables', calories: 500, fat: '20g', protein: '25g', price: '₹400' },
            { name: 'Burrito', ingredients: 'Tortilla, meat, rice', calories: 600, fat: '25g', protein: '30g', price: '₹450' },
            { name: 'Churros', ingredients: 'Dough, sugar', calories: 300, fat: '15g', protein: '5g', price: '₹150' },
            { name: 'Flan', ingredients: 'Milk, eggs, sugar', calories: 400, fat: '20g', protein: '8g', price: '₹200' },
            { name: 'Mexican Rice', ingredients: 'Rice, vegetables', calories: 250, fat: '5g', protein: '6g', price: '₹150' },
            { name: 'Guacamole', ingredients: 'Avocado, spices', calories: 200, fat: '15g', protein: '3g', price: '₹100' },
            { name: 'Fried Ice Cream', ingredients: 'Ice cream, batter', calories: 350, fat: '20g', protein: '6g', price: '₹200' },
            { name: 'Sopapilla', ingredients: 'Dough, honey', calories: 300, fat: '15g', protein: '5g', price: '₹150' }
        ]
    },
    {
        name: "THE FRENCH LOAF",
        menu: [
            { name: 'Croissant', ingredients: 'Flour, butter', calories: 250, fat: '15g', protein: '6g', price: '₹100' },
            { name: 'Quiche Lorraine', ingredients: 'Eggs, cheese, bacon', calories: 400, fat: '30g', protein: '20g', price: '₹250' },
            { name: 'Coq au Vin', ingredients: 'Chicken, wine, mushrooms', calories: 600, fat: '25g', protein: '40g', price: '₹450' },
            { name: 'Ratatouille', ingredients: 'Vegetables, spices', calories: 300, fat: '10g', protein: '8g', price: '₹200' },
            { name: 'Chocolate Mousse', ingredients: 'Chocolate, cream', calories: 400, fat: '25g', protein: '6g', price: '₹200' },
            { name: 'Baguette', ingredients: 'Flour, water', calories: 200, fat: '1g', protein: '8g', price: '₹50' },
            { name: 'Tarte Tatin', ingredients: 'Apples, pastry', calories: 350, fat: '15g', protein: '4g', price: '₹200' },
            { name: 'Crème Brûlée', ingredients: 'Cream, sugar', calories: 400, fat: '30g', protein: '5g', price: '₹200' },
            { name: 'Madeleine', ingredients: 'Flour, butter, eggs', calories: 300, fat: '15g', protein: '6g', price: '₹150' },
            { name: 'Macaron', ingredients: 'Almonds, sugar', calories: 150, fat: '6g', protein: '3g', price: '₹100' }
        ]
    }
];
