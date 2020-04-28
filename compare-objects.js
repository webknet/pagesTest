
/**
 * objects 
 */
const obj1 = { 
    client: { 
        name: 'clientName', 
        address: 'client address..'
    },
    contact: {
        phone: '123456789',
        email: 'client@mail.com'
    },
    state: 'active',
    arr:[1, 2, 3, 4]
}

const obj2 = { 
    client: { 
        name: 'smith', //name changed
        address: 'client address..'
    },
    contact: {
        phone: '00000000', //phone changed
        email: 'client@mail.com'
    },
    state: 'open', // property to be ignored
    arr:[1, 2, 3, 5],
    obs: 'obsevations' // property added
}

/**
 * compare 2 objets with Map
 * propOut -> Array of properties to leave out
 */
const compare = (obj1, obj2, propOut) => {
    // let mapObj1 = new Map()
    // let mapObj2 = new Map()
    let mapObj1 = Object.create(null)
    let mapObj2 = Object.create(null)

    const initObject = (obj, map, propOut) =>{
        const _propOut = propOut || []
        const mapObject = (obj, root) => {
            Object.entries(obj).forEach(([key, value]) => {
                value = value != null ? value : ''
                let _root = root || '/'
                if (!_propOut.includes(key)) {
                    console.log(typeof value, value)
                    if (!Array.isArray(value) && typeof value === 'object') {
                        _root = _root == '/' 
                            ? `/${key}`
                            : `${_root}/${key}`
                        mapObject(value, _root)
                    } else {
                        _root = _root == '/' 
                            ? `/${key}`
                            : `${_root}/${key}`
                        //map.set(_root, value)
                        map[_root] = Array.isArray(value) ? [...value]: value
                    }
                }                
            })
        }
        mapObject(obj)
        console.log(map)
        return map
    }

    const mapedObj1 = initObject(obj1, mapObj1, propOut)
    const mapedObj2 = initObject(obj2, mapObj2, propOut)

    let result = [] 
    // mapedObj2.forEach((value, key) => {
    //     if (value != mapedObj1.get(key)) result.push(key)
    // })
    Object.entries(mapedObj2).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            if (!compareArrays(value, mapedObj1[key])){
                result.push(key)
            } 
        }else if(value != mapedObj1[key]){
            result.push(key)
        }
    })
    console.log(result)
    return result
}

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) return false
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] != arr2[i])
            return false
    }
    return true
}

const updateObject =(roots, obj1, obj2) => {
    roots.forEach(root => {
        root = root.substr(1).split('/')
        let _obj1 = obj1
        let _obj2 = obj2
        for (let i=0; i < root.length-1; i++){ 
            _obj2 =_obj2[root[i]]
            if (root[i] in _obj1) {
                _obj1 =_obj1[root[i]]
            } else {
                _obj1 =_obj1[root[i]] = _obj2
            }       
        }
    _obj1[root[root.length-1]] = _obj2[root[root.length-1]] 
    })    
}



/**
 * call compare objects
 */
const result = compare(obj1, obj2, ['state'])

/**
 * update obj1 from data obj2
 */
 updateObject(result, obj1, obj2)


console.log(obj1)

