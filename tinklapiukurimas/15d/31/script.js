"use strict";

const namesList = [
  "Lebron", "Aaliyah", "Diamond", "Dominique", "Aliyah", "Jazmin", 
  "Darnell", "Hawkins", "Hayden", "Hayes", "Haynes", "Hays", 
  "Head", "Heath", "Hebert", "Henderson", "Hendricks", "Hendrix", 
  "Henry", "Hensley", "Henson", "Herman", "Hernandez", "Herrera", 
  "Herring", "Hess", "Hester", "Hewitt", "Hickman", "Hicks", 
  "Higgins", "Hill", "Hines", "Hinton", "Hobbs", "Hodge", 
  "Hodges", "Hoffman", "Hogan", "Holcomb", "Holden", "Holder", 
  "Holland", "Holloway", "Holman", "Holmes", "Holt", "Hood", 
  "Hooper", "Hoover", "Hopkins", "Hopper", "Horn", "Horne", 
  "Horton", "House", "Houston", "Howard", "Howe", "Howell", 
  "Hubbard", "Huber", "Hudson", "Huff", "Waldo", "Hughes", 
  "Hull", "Humphrey", "Hunt", "Hunter", "Hurley", "Hurst", 
  "Hutchinson", "Hyde", "Ingram", "Irwin", "Jackson", "Jacobs", 
  "Jacobson", "James", "Jarvis", "Jefferson", "Jenkins", "Jennings", 
  "Jensen", "Jimenez", "Johns", "Johnson", "Johnston", "Jones", 
  "Jordan", "Joseph", "Joyce", "Joyner", "Juarez", "Justice", 
  "Kane", "Kaufman", "Keith", "Keller", "Kelley", "Kelly", 
  "Kemp", "Kennedy", "Kent", "Kerr", "Key", "Kidd", "Kim", 
  "King", "Kinney", "Kirby", "Kirk", "Kirkland", "Klein", 
  "Kline", "Knapp", "Knight", "Knowles", "Knox", "Koch", 
  "Kramer", "Lamb", "Lambert", "Lancaster", "Landry", "Lane", 
  "Lang", "Langley", "Lara", "Larsen", "Larson", "Lawrence", 
  "Lawson", "Le", "Leach", "Leblanc", "Lee", "Leon", "Leonard", 
  "Lester", "Levine", "Levy", "Lewis", "Lindsay", "Lindsey", 
  "Little", "Livingston", "Lloyd", "Logan", "Long", "Lopez", 
  "Lott", "Love", "Lowe", "Lowery", "Lucas", "Luna", "Lynch", 
  "Lynn", "Lyons", "Macdonald", "Macias", "Mack", "Madden", 
  "Maddox", "Maldonado", "Malone", "Mann", "Manning", "Marks", 
  "Marquez", "Marsh", "Marshall", "Martin", "Martinez", "Mason", 
  "Massey", "Mathews", "Mathis", "Matthews", "Maxwell", "May", 
  "Mayer", "Maynard", "Mayo", "Mays", "Mcbride", "Mccall", 
  "Mccarthy", "Mccarty", "Mcclain", "Mcclure", "Mcconnell", 
  "Mccormick", "Mccoy", "Mccray", "Waldo", "Mcdaniel", 
  "Mcdonald", "Mcdowell", "Mcfadden", "Mcfarland", "Mcgee", 
  "Mcgowan", "Mcguire", "Mcintosh", "Mcintyre", "Mckay", 
  "Mckee", "Mckenzie", "Mckinney", "Mcknight", "Mclaughlin", 
  "Mclean", "Mcleod", "Mcmahon", "Mcmillan", "Mcneil", 
  "Mcpherson", "Meadows", "Medina", "Mejia", "Melendez", 
  "Melton", "Mendez", "Mendoza", "Mercado", "Mercer", 
  "Merrill", "Merritt", "Meyer", "Meyers", "Michael", 
  "Middleton", "Miles", "Miller", "Mills", "Miranda", 
  "Mitchell", "Molina", "Monroe", "Lucas", "Jake", "Scott", 
  "Amy", "Molly", "Hannah", "Lucas",
];

function locateWaldo(array) {
  const positions = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "Waldo") {
      positions.push(index);
    }
  }
  return positions;
}

const waldoPositions = locateWaldo(namesList);
console.log(...waldoPositions);
console.log(waldoPositions.length);

// 2
console.log("______________");

const daysOfWeek = [
  "sunday", "monday", "tuesday", "wednesday", "thursday", 
  "friday", "saturday",
];

function displayArray(arr) {
  console.log(arr[2]);
  daysOfWeek[4] = null;
  console.log(arr[4]);
  console.log(arr.indexOf(null));
}
displayArray(daysOfWeek);

// 3
console.log("______________");

const numArray = [1, 5, 10, 9, 4, 1];

const findMax = function getMax(arr) {
  return Math.max(...arr);
};
console.log(findMax(numArray));

// 4
console.log("______________");

function totalSum(arr) {
  return arr.reduce((total, current) => total + current);
}
console.log(totalSum([1, 4, 8]));

// 5
console.log("______________");

function areAllPositive(arr) {
  return arr.every((number) => number > 0);
}
console.log(areAllPositive([1, 2, 3, 4, 5]));
console.log(areAllPositive([1, 2, 3, -4, 5]));
console.log(areAllPositive([0, 0, 1]));
