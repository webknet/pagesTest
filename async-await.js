

const getValue = (value, time = 1) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve(value + 5)
        }, time * 1000);
    })
}

let vals = []

//*** async await */

async function getList() {
    const item1 = await getValue(10, 1)
    const item2 = await getValue(20, 2)
    const item3 = await getValue(20, 1)

    vals = [item1, item2, item3]

    console.log(vals)
}

async function getList1(init) {
    const item1 = await getValue(init, 1)
    const item2 = await getValue(item1, 2)
    const item3 = await getValue(item2, 1)

    vals = [item1, item2, item3]

    console.log(vals)
}


//*** promises */
const add = value => vals.push(value)

const item1 = getValue(10, 1).then(add)
const item2 = getValue(20, 2).then(add)
const item3 = getValue(20, 1).then(add)

Promise.all([item1, item2, item3]).then(() => console.log(vals))
 

//*** */
let vals1 = []
const add1 = value => vals1.push(value)

const promises = [ 
        getValue(10, 1).then(add1), 
        getValue(20, 2).then(add1), 
        getValue(30, 1).then(add1) 
    ]

Promise.all(promises).then(() => console.log(vals1))

let vals2 = []
const add2 = value => vals2.push(value)

getValue(20)
    .then(value => {
        vals2.push(value)
        getValue(value, 2)
            .then(value => {
                vals2.push(value)
                getValue(value)
                    .then(value => {
                        vals2.push(value)
                        console.log(vals2)
                })
            })
    })
