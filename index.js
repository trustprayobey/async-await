const stocks = {
    fruits: ['apples', 'mangoes', 'bananas', 'Oranges'],
    vegetables: ['kales', 'letuce', 'Cabage'],
    liquid: ['Water', 'Milk'],
    topings: ['rainbow sprinkles', 'chocolate', 'Strawberry']
}
const startButton = document.getElementById('start')

// let Order = (fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//         call_production()
//     }, 2000)

// }

// let production = () => {
//     setTimeout(() => {
//         console.log(`Oder received production started`)
//         setTimeout(() => {
//             console.log(`Cutting fruits has started`)
//             setTimeout(() => {
//                 console.log(`Adding Water`)
//                 setTimeout(() => {
//                     console.log(`Selecting machine`)
//                     setTimeout(() => {
//                         console.log(`Selecting contaier`)
//                         setTimeout(() => {
//                             console.log(`Selecting topings`)
//                             setTimeout(() => {
//                                 console.log(`Serving Ice`)
//                                 setTimeout(() => {
//                                     console.log(`Production Complete`)
//                                     setTimeout(() => {
//                                         console.log(`Thank You! Welcome again`)
//                                     }, 4000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)

// }
// Order(3, production)

// promises



function begin() {
    function production1() { console.log(`Oder received production started`) }
    function production2() { console.log(`Cutting fruits has started`) }
    function production3() { console.log(`Adding Water`) }
    function production4() { console.log(`Selecting container`) }
    function production5() { console.log(`Selecting topings`) }
    function production6() { console.log(`Serving Ice`) }
    function production7() { console.log(`Production Complete`) }
    function production8() { console.log(`Thank you ! Welcome Again`) }


    function Order() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${stocks.fruits[1]} was selected`)
                const error = false
                if (!error) {
                    resolve()
                } else {
                    reject('Kuna error Msee')
                }
            }, 1000)
        })
    }
    async function production() {
        await Order()
        setTimeout(production1, 2000)
        setTimeout(production2, 4000)
        setTimeout(production3, 6000)
        setTimeout(production4, 8000)
        setTimeout(production5, 10000)
        setTimeout(production6, 12000)
        setTimeout(production7, 14000)
        setTimeout(production8, 16000)

    }

    production()

        .catch(err => console.log(err))
}
startButton.addEventListener('click', begin)

// asych await
// ajax
// modules


