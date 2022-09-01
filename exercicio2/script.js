/* Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, utilizando console.log():

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, 
e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a inclusão de um item
do primeiro array, e uma informação booleana falsa sobre a inclusão de um item ao terceiro array.
Isto é, um includes() verdadeiro, e outro falso. */

let arrayNum = [8, 3, 12, 1]
let arrayString = ["maçã", "banana", "uva", "jabuticaba"]
let arrayMisto = ["melancia", 10, true, false]

console.log(arrayNum.length)
console.log(arrayString.length)
console.log(arrayMisto.length)

console.log(arrayNum[1])
console.log(arrayString[2])
console.log(arrayMisto[3])

console.log(arrayNum.includes(3)) 
console.log(arrayMisto.includes(28)) 

