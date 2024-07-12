
// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: 'Tulsi', age: 25, gender: 'female' },
  { name: 'Aonik', age: 30, gender: 'male' },
  { name: 'Sourob', age: 35, gender: 'male' },
  { name: 'Progga', age: 28, gender: 'female' }
];
const filterAndMapNames = (people) => {
  return people
    .filter(person => person.gender !== 'female')
    .map(person => person.name);
};
// Result
// console.log(filterAndMapNames(people));


// 2.Task: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: 'Book-1', author: 'Author-1', year: 2000 },
  { title: 'Book-2', author: 'Author-2', year: 2010 },
  { title: 'Book-3', author: 'Author-3', year: 2020 }
];

const extractBookTitles = (books) => {
  return books.map(book => book.title);
};
// Result
// console.log(extractBookTitles(books));



//4.Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: 'Toyota', model: 'BMW', year: 2010 },
  { make: 'Honda', model: 'BMW', year: 2005 },
  { make: 'Ford', model: 'BMW', year: 2015 }
];
const sortCarsByYear = (cars) => {
  return cars.sort((car1, car2) => car1.year - car2.year);
};
// Result
// console.log(sortCarsByYear(cars));


// 5.Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
let peopleToUpdate = [
  { name: 'Aonik', age: 25 },
  { name: 'Progga', age: 30 },
  { name: 'Nikil', age: 35 }
];

const findAndModifyAge = (people, name, newAge) => {
  const person = people.find(person => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

peopleToUpdate = findAndModifyAge(peopleToUpdate, 'Progga', 16);
// Result
// console.log(peopleToUpdate);


// 6.Task: Array Reduction
// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvenNumbers = (numbers) => {
  return numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
};
// Result
// console.log(sumOfEvenNumbers(numbers)); 