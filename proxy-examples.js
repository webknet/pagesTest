console.log('******')
console.log('*** array ')
console.log('*** let num = new Proxy( [1,2,3,4,5,6]) ')

let numbers = [1,2,3,4,5,6]

let num = new Proxy(numbers, {
    get(target, prop) {
        
        return (prop > target.length)
            ? 'not exist'
            : Reflect.get(target, prop) // target[prop]
        
        // using expression 'in'
        return prop in target 
            ? Reflect.get(target, prop)
            : 'not exist'
    },

    set(target, prop, val) {
        //target[prop] = val
        Reflect.set(target, prop, val)
        return true
    }
})


console.log('******')
console.log('*** object')
console.log("*** let user = { name: '', surname: '' }")
console.log('******')

let obj = { name: 'paul', surname: 'frank'}

const handler = {
    get(target, prop) {
        if (prop === 'name'){
            return target[prop].toUpperCase()
        }
        return Reflect.get(target, prop)
    },
    set(target, prop, val) {
        if (typeof val !== 'string') return console.log('wrong format')

        const value = val.charAt(0).toUpperCase() + val.slice(1)
        Reflect.set(target, prop, value)
    }
}

let user = new Proxy(obj, handler)

console.log('******')
console.log('*** nested objects')
console.log("*** let user1 = { name: '', surname: '', address: { city:'', country: ''} }")
console.log('******')

let nestedObj = {
    name: 'paul',
    surname: 'frank',
    address: {
        city: 'madrid',
        country: 'spain'
    }
}

const nestedHandler = {
    get(target, prop) {
       if (typeof target[prop] === 'object' && target[prop] !== null) {
           return new Proxy(target[prop], nestedHandler)
       } else {
           //return target[prop]
           return prop in target
            ? Reflect.get(target, prop )
            : 'not exist...'
       }
   },
   set(target, prop, value, receiver) { console.log(receiver)
       if (typeof target[prop] === 'object' && target[prop] !== null) {
           return new Proxy(target[prop], handler)
       } else {
           return prop in target
               ? Reflect.set(target, prop, value)//target[prop] = value
               : false //console.log('property not exist')
       }
   }
}

let user1 = new Proxy(nestedObj, nestedHandler)

//** Proxy prototype 

let person = {
    name: 'Sabino',
    address: { city: 'Faro', filter: '' }
}

let proto_handler = {
    get(target, prop) {
        return prop in target ? target[prop]: 'not exist'
    },
    set(target, prop, value) {
        console.log(target, prop, value)
        return false
        //Reflect.set(target, prop, value)
    }
}

const p_roxy = new Proxy({}, proto_handler)

Reflect.setPrototypeOf(person, p_roxy)


console.log(person)
