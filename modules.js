export function BookingClass() {
    
    this.localizer = ''
    this.provider = ''
    this.client = { name: '', email: '', phone: '' }           
    this.paxs = { adult: 2, child: 0, infant: 0 }
    this.date = { text: '', value: null}
    this.pickup = {
        zone: '',
        address: '',
        time: { text: '', value: 0 }
    }
    this.dropoff = {
        zone: '',
        address: '',
        time: { text: '', value: 0 }               
    }
    this.flight = {
        arrival: null,
        number: null,
        time: null
    }
    this.canceled= false
    this.state = 'new'
    this.obs = ''
    this.$planning = {
        checkAvailability: true,
        assigned: false,
        paxAlert: false,
        added: false, //color animation
        dif: 0,
        width:0, 
        left:0,  
        value: 0, 
        duration: { 
            buzy: 0, 
            empty: 0 
        },
        distance: { 
            buzy: 0,
            empty: 0 
        },
        route: null,
    }  
    
    // Filters Observables [array fields for firestore query]
    defPropFilter(this.client, 'name')
    defPropFilter(this.dropoff, 'address')
    defPropFilter(this.pickup, 'address')
}

function defPropFilter(data, prop) {
    let cValue = data[prop]
    Object.defineProperty(data, prop, {
        get(){ return cValue },
        set(newValue){ 
            cValue = newValue
            this.filter = newValue.toUpperCase().split(/[\s,]+/).map(str => str.trim())

        }
    })
}

export function updateFilter(data, prop) {
    let filter = data[prop]
    Object.defineProperty(data, prop, {
        get() { return filter },
        set(newValue) { 
            filter = newValue
            this.filter = newValue.toUpperCase()
        }
    })
}

// const book = new BookingClass

// const handler =  {
//     get(target, prop) { 
//         return typeof target[prop] === 'object'
//             ? new Proxy(target[prop], handler)
//             : Reflect.get(...arguments) 
//     },
//     set(target, prop, val) { 
//         console.log(...arguments)
//         if (prop === 'name') target.filter = val.toUpperCase()
//         return Reflect.set(...arguments)
//     }
// }
// const Booking = new Proxy(book, handler)


// let _name = Booking.client.name
// Object.defineProperty(Booking.client, 'name', {
//     get() { return _name},
//     set(value) { 
//         this.filter = value.toUpperCase()
//         _name = value
//     }
// })


