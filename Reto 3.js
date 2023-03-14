const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];
const array = []


function getGiftsToRefill(a1, a2, a3) {

    a1.sort()
    a2.sort()
    a3.sort()

    a1.map((a) => {
        a2.map((b) => {
            a3.map((c) => {
                if(c==b || c==a){
                    console.log("Hay uno igual y es: "+ c)
                }else{
                    array.push(c)
                    console.log(array)
                }
            })
        })
    })


    // console.log(a1+"\n"+a2+"\n"+a3)
    // if (reponer == null) {
    //     return []
    // } else
    //     return array
}

getGiftsToRefill(a1, a2, a3)