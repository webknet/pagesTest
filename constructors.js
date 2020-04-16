function settersGetters(obj) {
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(obj, key,  {
            get() {                          
                console.log(`I was accessed`, typeof internalValue)  
                return internalValue                      
            },                    
            set(newVal) { 
                internalValue = newVal 
                console.log(`I was changed`)
            }
        })
    })
}


const Data = function() {
    //if (!new.target) throw 'Foo() must be called with new';
    if (!new.target) console.log('Foo() must be called with new')
    //this.description = ''
}

Data.prototype.getDesc = function() {
     return this.description 
    }
Data()

const data = new Data()
settersGetters(data)

data.__proto__.getDescription = function() { return this.description }

data.description = 'teste'
data.festival = 'new festival'
data.getFestival = function() { return this.festival}

console.log( data, data.getFestival())
console.log(new Data())


// const myObj = function() {
//     this.name = 'Sabino'
// }
const myObj =  {
    name: 'Sabino'
}

const getName = function(arg) { 
    this.name = arg
    return this.name.toUpperCase() }.bind(myObj)

//const ad = getName.bind(myObj)





