/* 
- Objeto iteraveis por padrão
- Arrays
- Strings
- Maps e Sets

*/

var chapeuSeletor = function(bruxo) {
var casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
var casa = casas[Math.floor(Math.random() * casas.length)]

console.log("Bruxo: " + bruxo + "| Casa: " + casa)
}

var bruxos = ['Harry', 'Hermione', 'Rony']
var iterator = bruxos[Symbol.iterator]()
var done = false
var proximo = iterator.next()

do{
var bruxo = proximo.value
chapeuSeletor(bruxo)
proximo = iterator.next()


} while(!proximo.done)


