//Quando não declaro o tipo de método usando o fetch, ele entende que é GET(TRAZ INFORMAÇÃOES)
const responce = fetch ('https://jsonplaceholder.typicode.com/posts').then(res => {
    //Promisse que trata o sucesso é o metodo then(),o parâmetro res recebe o retorno da funçao anterios
    console.log(res.json())
})
//Promisse que trata o erro é método catch()
.catch(error =>{
    console.log(`Deu erro na busca ${error}`)
} )
// console.log(responce)