
/**
 *  esbuild
 * An extremely fast  JavaScript bundler
 * https://github.com/evanw/esbuild
 */




// short circuit conditionals

let isValid = true

const gotoLogin = _ => console.log('called function login...')

if (isValid)
    gotoLogin()


//use this
isValid && gotoLogin()

let arr001 = [ 1, 4, 5, 8, 1, 3, 4]
console.log([ ...new Set(arr001)]) // => [1, 4, 5, 8, 3]

//Null coalescing operator
/**
 * The nullish coalescing operator (??) is a logical operator that returns its
 *  right-hand side operand when its left-hand side operand is null
 *  or undefined, and otherwise returns its left-hand side operand.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */

null        ?? 'hello'
undefined   ?? 'hey'

//Access Nested Properties and Set Default Values
const person = {
  name: 'Fred',
  age: 26,
  work: {
    job: 'Blogger'
  }
};
const {work: {job} } = person;
//with default value
const { work: { job='na' } } = person;

console.log(job); //prints: Blogger


//Accessing Array Elements
const arr = [1,2,3]; 
const [a, b] = arr;
//a = 1, b = 2

const arr = ['a','b','c','d'];
const {0: first, 3: fourth} = arr;
console.log(fourth) //d

const {0: first, 3: fourth, 9: tenth = 'z'} = arr;

const arr = ['a', [1, 2, 3]]
const [first, [one, two, three]] = arr;



//Omitting Properties Using the Rest Syntax
const arr = ["Hello", "How" , "are", "you"];
var [hello,...remaining] = arr;
console.log(remaining) // ["How" , "are", "you"]


//Using Computed Properties in Destructuring
const person = {
    name: 'Fred',
    work: {
      job: 'Blogger'
    }
  };
  let name = 'name'
  const { [name] : username } = person;
  console.log(username); //Fred


//Tagged Template Literals
const tag = (strings, ...vals) => {
    return `${strings[0]}! ${vals[0]}`
  }
const name = 'foo';
tag `Hi ${name}`;


// Javascript operators


/**
 *  ?? Operator
 */

var prevMoney = 1
var currMoney = 0
var noAccount = null
var futureMoney = -1

function moneyAmount(money) {
  //return money || `You currently do not own an account in the bank`
  return money ?? `You currently do not own an account in the bank`
}

console.log(moneyAmount(prevMoney)) // => 1
console.log(moneyAmount(currMoney)) // => 0
console.log(moneyAmount(noAccount)) // => `You currently do not own an account in the bank`
console.log(moneyAmount(futureMoney))//  => -1

/**
 *  ??= Operator
 */

function gameSettingsWithNullish(options) {
    options.gameSpeed ??= 1
    options.gameDiff ??= 'easy' 
    return options
  }
  
  
  function gameSettingsWithDefaultParams(gameSpeed=1, gameDiff='easy') {
    return {gameSpeed, gameDiff}
    }
  
  gameSettingsWithNullish({gameSpeed: null, gameDiff: null}) // => { gameSpeed: 1, gameDiff: 'easy' }
  gameSettingsWithDefaultParams(null, null) // => { gameSpeed: null, gameDiff: null }

  /**
   * ?. Operator
   */

  function addPlansWhenUndefined(plans, location, budget) {
    if(plans.tuesday?.location == undefined) {
      var newPlans = { plans, tuesday: { location: location ?? 'Park', budget: budget ?? 200} }
    }
    else {
      newPlans ??= plans //will only override if newPlans is undefined
      console.log('Plans have already been added!') 
    }
    return newPlans
  }
  var newPlans = addPlansWhenUndefined(travelPlans, 'Ford Theatre', null)
  console.log(newPlans) // => { plans: 
                    //{ destination: 'DC',
                    // monday: { location: 'National Mall', budget: 200 } },
                    // tuesday: { location: 'Ford Theatre', budget: 200 } }
  
  newPlans = addPlansWhenUndefined(newPlans, null, null)
  console.log(newPlans) // logs => Plans have already been added! // returns => newPlans object

  
  /**
   *  ? Operator
   */

  function checkCharge(charge) {
    return (charge > 0) ? 'Ready for use' : 'Needs to charge' 
    }
    
    console.log(checkCharge(20)) // => 'Ready for use'
    console.log(checkCharge(0)) // => 'Needs to charge'

    /**
     *  The Number-type in JavaScript
     */

    typeof "ByeBye";    // string
    typeof { b: 3};     // object
    typeof true;        // boolean
    typeof 11;          // number
    typeof 1.234;       // number
    typeof -36.9;       // number


    /**
     *  Convert values with parseFloat and parseInt
     */

    parsefloat('6.9');                  // 6.9
    parsefloat('      6.9        ');    // 6.9
    parsefloat('6.9 and less');         // 6.9
    parseInt('6.9');                    // 6
    parseInt('');                       // NaN
    parseInt('???');                    // NaN

    parseInt('5e5');              //5
    parseInt('0xF0');             //15
    parseInt('0b1111');           //0
    parseInt('0010');             //0
    parseFloat('5e5');          //5000
    parseFloat('0xF0');         //0
    parseFloat('0b1111');       //0
    parseFloat('0010');         //0

    /**
     * Number: a third way to convert numbers in JavaScript
     */

    Number(13);                   //13
    Number(0b11);                 //3
    Number(null);                 //0
    Number([9]);                  //9
    Number({valueOf: () => 96});  //96 (!)

    parseFloat([1,2,3]);          // 1
    Number([1,2,3]);              // NaN
    parseFloat(new Date());       // Nan
    Number(new Date());           // 1603437234455