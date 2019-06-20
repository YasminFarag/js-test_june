// 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array.1. >10


let greaterThan = [1,4,6,17,29,12];
const filtered = greaterThan.filter((element)=>{
    return element > 10

})
console.log(filtered) //  [ 17, 29, 12 ]

console.log('_____________________2_______________');

// 2. Validation

function validatePin(pin){
    if(pin.length ===4 && typeof pin === Number){
        return ('valid Pin')
    }else {
        return ('not valid')
    }
}
console.log(validatePin('1c24'));

console.log('_____________________3_______________');

// 3. Class Blueprint

class DCI{
    constructor(courseDuration,courseType,teacher,studentsNumber,){
        this.courseDuration= courseDuration;
        this.courseType=courseType;
        this.teacher=teacher;
        this.studentsNumber= studentsNumber;
    }

    
}

DCI.prototype.details = function()  {
    return `This is a ${this.courseDuration} long ${this.courseType} taught by ${this.teacher} There are ${this.studentsNumber} taking the course`
}

let printingData = new DCI('year', 'web development' ,'john smith', 10 )

console.log(printingData.details());


console.log('_____________________4_______________');

// 4. Events

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

events.sort(function (a, b) {
    return b.turnout - a.turnout;
  });
  console.log(events);
  

  console.log('____________________5_______________');

// 5. Return Squared Odds

// Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.

// function Squared(arr,value){
   
//     return Math.pow(arr,value)

// }
// console.log(Squared([2,5,7,9,8],2));

let Squared = [2,3,4,5,6];
let newArr = Squared.filter(element => {
    // if(element %2 !== 0){
    //     return element ** 2
    // }

    let newElement= element % 2 !== 0;
    let elem= newElement **2
    return elem    
});
console.log(newArr);

console.log('____________________6_______________');

console.log('____________________7_______________');
//7. World Cup 

const startDate = '2014-07-13';
const endDate   = '2018-06-20';
const timeDiff  = (new Date(endDate)) - (new Date(startDate));
const days      = timeDiff / (1000 * 60 * 60 * 24)
console.log(`Germany won the last cup since ${days} days`);


console.log('____________________8_______________');

// 8. Working Hours

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];

  const totalHours = hourTracking.reduce((total,days)=>{
      return total +(days.end - days.start);

  },0)
  console.log(`total working hours ${totalHours} hour`);



// 9


function mapping(para1, para2){
    let toPush = [];
    para1.forEach(value => {
        toPush.push(para2(value));
    });
    return toPush
}

console.log(mapping([2,4,6,8], function(val){
    return Math.sqrt(val);
}));
