const enhancer = require('./enhancer.js');
// test away!

let ring = {
    name: 'The One Ring',
    durability: 50,
    enhancement: 0
}

let masterSword = {
    name: 'The Master Sword',
    durability: 99,
    enhancement: 20
}

let redPotion = {
    name: 'Red Potion',
    durability: 8,
    enhancement: 10
}
let rupee = {
    name: 'Rupee',
    durability: 1,
    enhancement: 15
}

let majora = {
    name: 'Majora\'s Mask',
    durability: 100,
    enhancement: 17
}

let triforce = {
    name: 'The Triforce',
    durability: 100,
    enhancement: 0
}

describe('test', ()=>{
    test('true', ()=>{
        expect(true).toBe(true)
    })
})


describe('Enhancement tests', ()=>{
    test('repair', ()=>{
        let result = enhancer.repair(ring)
        
        expect(result.durability).toBe(100)
    })

    test('success less than 20', ()=>{
        let result = enhancer.success(ring)

        expect(result.enhancement).toBe(1)
    })

    test('success at 20', ()=>{
        let result = enhancer.success(masterSword)

        expect(result.enhancement).toBe(20)
    })

    test('failure below 15', ()=>{
        let durability = redPotion.durability - 5
        let result = enhancer.fail(redPotion)

        expect(result.durability).toBe(durability)
    })

    test('failure at 15', ()=>{
        let durability = rupee.durability - 10
        let result = enhancer.fail(rupee)

        expect(result.durability).toBe(durability)
    })

    test('failure above 16', ()=>{
        let durability = majora.durability - 10
        let enhancement = majora.enhancement - 1
        let result = enhancer.fail(majora)

        expect(result.durability).toBe(durability)
        expect(result.enhancement).toBe(enhancement)
    })

    test('get stretch', ()=>{
        let oldTri = triforce.name;
        let oldSword = {...masterSword};
        enhancer.get(ring)
        enhancer.get(masterSword)
        expect(triforce.name).toBe(oldTri)
        expect(masterSword.name).not.toBe(oldSword)
        expect(masterSword.name).toBe(`[+${oldSword.enhancement}] ${oldSword.name}`)
        console.log('mastersword', masterSword)
    })
})