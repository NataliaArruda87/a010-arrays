/* Agora, vamos manipular os arrays, adicionando ou removendo informações. 
Para isso, crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça 
o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item number ao primeiro array. Utilize console.log() 
para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize console.log() 
para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize console.log() 
para exibir o original e a cópia; */

let arrayNum = [8, 3, 12, 1]
let arrayString = ["maçã", "banana", "uva", "jabuticaba"]
let arrayMisto = ["melancia", 10, true, false]

let arrayNumCopia = arrayNum.slice()
let arrayStringCopia = arrayString.slice()
let arrayMistoCopia = arrayMisto.slice()

arrayNumCopia.push(26)
console.log("original", arrayNum)
console.log("copia", arrayNumCopia)

arrayStringCopia.pop()
console.log("original", arrayString)
console.log("copia", arrayStringCopia)

arrayMistoCopia.splice(1, 1)
console.log("original", arrayMisto)
console.log("copia", arrayMistoCopia)




