// Creating a new map
// const fruits = new Map()
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits.get('apples'));
// console.log(fruits.size)
// console.log(fruits.delete("oranges"))

// console.log(fruits)

// let text = "";
// fruits.forEach (function(value, key) {
//     text += key + ' = ' + value;
//   })


//map
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

var officersIds = [];
officers.forEach(function(officer){
    officersIds.push(officer.id)
})

var officersIds = officers.map(function(officer){
    console.log(officer.id)
    return officer.id
})

//reduce
var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

var totalYears = pilots.reduce(function(accumulator,pilot){
    return accumulator + pilot.years;
},0);

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);