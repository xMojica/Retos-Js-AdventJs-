const gifts = ['cat', 'game', 'socks']
 const wrapped = wrapping(gifts)

 console.log(wrapped);
/* [
"  *****
   *cat*
   *****   ",

"  ******
   *game*
   ******  ",


"  *******
   *socks*
   *******  "
   
] */

function wrapping(gifts) {
   let array = []
    gifts.forEach(e => {
         let longitud = e.length;

         let aste = "*"
         for (let index = 0; index <= longitud; index++) {
            aste = aste +"*";
         }
         
         let nuevo = aste+"\n"+"*"+e+"*"+"\n"+aste;
         array.push(nuevo)

    });

    return array
  }
  