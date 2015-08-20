module.exports = function(){
  return [
      {
        "id": "lemon-chicken",
        "name": "Lemon Chicken",
        "cookingTime": "30 minutes",
        "ingredients": {
          "basic": "Chicken, Lemon, Thyme",
          "full": [
            {
              "ingredient": "Chicken Breasts",
              "quantity": "4"
            },
            {
              "ingredient": "tsp Thyme",
              "quantity": "1"
            },
            {
              "ingredient": "Lemon",
              "quantity": "1"
            }
          ]
        },
        "imageUrl": "images/recipes/lemon_chicken.png"
      },
      {
        "id": "beef-stroganoff",
        "name": "Beef Stroganoff",
        "cookingTime": "30 minutes",
        "ingredients": {
          "basic": "Beef, Mustard, Mushrooms"
        }
      },
      {
        "id": "chicken-caesar-salad",
        "name": "Chicken Caesar Salad",
        "cookingTime": "25 minutes",
        "ingredients": {
          "basic": "Lettuce, Chicken, Parmesan"
        }
      }
    ];
};
