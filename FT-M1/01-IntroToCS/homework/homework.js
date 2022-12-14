'use strict'

function BinarioADecimal(num) {
          // let dec = parseInt(num, 2);
          // let dec = parseInt((num + '').replace(/[^01]/gi, ''), 2);
          /*
	     let dec = 0;
	         num = num.toString().split('').reverse();
                 num.forEach((e, ndx) => e === '1' ? dec += Math.pow(2, ndx) : void 0);
           */
/*
               const len = num.length;
	         let dec = 0;
            for (let   i = 0; i < len; i++) {
       		    dec += +num[i] * 2 ** (len - 1 - i);
            }

	return dec;
*/

//	for(var c=num.length,d=0,a=0;a<c;a++)d+=+num[a]*Math.pow(2,c-1-a);return d
// optimizado
        for(var l=num.length,b=0,i=0;i<l;i++)b+=num[i]*2**(l-1-i);return b
}

function DecimalABinario(num)
{
//      let bin = num.toString(2);
/*
        let bin = (num % 2).toString();
        for (; num > 1; ) {
               num = parseInt(num / 2); 
               bin =  (num % 2) + (bin);
        }
        return bin;
*/
/*	
	  let bin=[];
	while(num!==0){
	      bin.unshift(num % 2);
	      num=Math.floor(num / 2);
	} return bin.join('');
*/
/*
	   let bin = '';
	while (num > 0){ 
      		bin += num % 2; 
                num = ~~(num / 2); 
        } bin = bin.split('').reverse().join('');

	return bin;
*/
// optimizada
for(var b="";0<num;)b+=num%2,num=~~(num/2);return b=b.split("").reverse().join("")
	
	
}
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
