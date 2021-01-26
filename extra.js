const data = [23,44,50,19,15,42,4,37,17,27,38,10,5,30,14,21,25,26,29,1,20,45,39,7,11,49]

function getRandom() {
    let acc = []
    let stars = []
    do {
        let val = Math.floor(Math.random() * (25 - 0 + 1))
        if (acc.indexOf(data[val]) === -1)
            acc.push(data[val])

    } while (acc.length < 5)

    do {
        let val = Math.floor(Math.random() * (12 - 1 + 1)) + 1
        if (stars.indexOf(val) === -1)
            stars.push(val)

    } while (stars.length < 2)

    console.log('numbers:', acc, 'stars:', stars)
}