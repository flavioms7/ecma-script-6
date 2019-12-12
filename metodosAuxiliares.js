//for - foreach
//--Antigo--

/*var names = ['Paulo', 'Pedro', 'Andre']
for (var i = 0; i < names.length; i++) {
    console.log(names[i])   
}
*/

//--Novo--
var names = ['Paulo', 'Pedro', 'Andre']
names.forEach(function(nome) {
    console.log(nome)
});

//MAP
// Cria um array novo e retorna ele preenchido.
 var numeros = [1, 2, 3]

 var dobro = numeros.map(function(numeros){
    return numeros*2
 });

 console.log(dobro)

 //Filter
 var alunos = [
    {nome: 'João', idade:15},
    {nome: 'José', idade:18},
    {nome: 'Maria', idade:20},
    {nome: 'Tulio', idade:17},
 ];

 var alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade < 18
 })
 console.log(alunosDeMaior)

 //Find
 var alunoProcurado = alunos.find(function(aluno){

    return aluno.nome === 'José'
 })
 console.log(alunoProcurado)

 //Every
 var jogos = [
    {nome: 'Sonic', categoria: 'aventura'},
    {nome: 'Mario', categoria: 'aventura'},
    {nome: 'Zelda', categoria: 'aventura'},
    {nome: 'Mario Kart', categoria: 'corrida'},
 ];

 var todosJogosCorrida = jogos.every(function(jogo){

    return jogo.categoria === 'aventura'
 })
console.log(todosJogosCorrida)

//Some

var temJogosCorrida = jogos.some(function(jogo){

    return jogo.categoria === 'corrida'
 })
console.log(temJogosCorrida)

//Reduce
//Obtem a soma de todos os números de um array
var numerosSoma = [1,2,3,4,5]

var soma = numerosSoma.reduce(function(soma, numero){

   return soma + numero

}, 0)
console.log(soma)

var alunosEscola = [
   {nome: 'João', idade:15},
   {nome: 'José', idade:18},
   {nome: 'Maria', idade:20},
   {nome: 'Tulio', idade:17},
];

var nomesAlunos = alunosEscola.reduce(function(arrayNomes, alunosEscola){
arrayNomes.push(alunosEscola.nome)

return arrayNomes

}, [])
console.log(nomesAlunos)



 


