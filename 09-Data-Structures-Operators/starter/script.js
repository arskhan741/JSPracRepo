'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = `00:00`,
    address = `Not Specified`,
  }) {
    console.log(
      `Deliever the order to ${address} at ${time} with Indexes, Started =  ${starterIndex}, main = ${mainIndex}`
    );
  },
};

restaurant.orderDelievery({
  time: `22:30`,
  address: `H No 537 Z-1`,
  mainIndex: 2,
  starterIndex: 2,
});

const delieveryInfo = {
  mainIndex: 1,
  time: `12:00`,
  address: `GAMING ZONE`,
  starterIndex: 10,
};

const obj = delieveryInfo;

restaurant.orderDelievery(obj);

// console.log(restaurant.order(2,0));

// const[starter, mainCourse] = restaurant.order(2,0);   //Thats how we return two variables from a function

// console.log(starter, mainCourse);

// De structuring of Nested Arrays. Nested destructuring

// const array1 = [2,4,[5,6]];

// const[i, ,[j, k]] = array1; //We dont want second element (4)

// console.log(i,j,k);

//----------------------------Destructung objects------------------------//

const { name, openingHours: openingHourss, categories } = restaurant;
console.log(name, openingHourss, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, openingHourss, categories);

const { menu = [], starterMenu: starters } = restaurant;

console.log(menu, starters);

//Nested Objects

const {
  fri: { open: openingTime, close: closingTime },
} = openingHourss;

console.log(`\n\n\n\n`, openingTime, closingTime);

//
