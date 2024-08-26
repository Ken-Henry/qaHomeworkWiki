//makeAMeal = Function name: order = paramter name;
function makeAMeal(order:string): string {
    return order + " 15.00";
};
function makeBreakfast(breakfastItems: string): string {
    return breakfastItems + " part of this nutritious breakfast";
};
//call the makeAMeal function 
let firstMeal = makeAMeal("Burger, Fries,Coke");
let secondMeal = makeAMeal('Chicken Nuggets, Onion Rings, Sprite');
//call the makeBreakfast
let breakfastOne = makeBreakfast('Pancakes, Bacon, Orange Juice');
let BreakfastTwo = makeBreakfast('Eggs, Hashbrowns, Coffee');

//console.log so that the strings print in the terminal
console.log(firstMeal);
console.log(secondMeal);
console.log(breakfastOne);
console.log(BreakfastTwo);
console.log(`Can you make me some ${breakfastOne}`);

function foodStore(foodItems: string): any {
    if (foodItems == 'Peach') {
        return .99;
    } else if (foodItems == 'Orange') {
        return .75;
    } else if (foodItems == 'Bread') {
        return 2.99;
    } else {
        return "We dont have that try something else."
    }
}
console.log(foodStore('Peach'));
console.log(foodStore('Orange'));
console.log(foodStore('Bread'));
console.log(foodStore('Chocolate'));