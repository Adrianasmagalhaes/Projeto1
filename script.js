//Quando não declaro o tipo de método usando o fetch, ele entende que é GET(TRAZ INFORMAÇÃOES)
const responce = fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    //Promisse que trata o sucesso é o metodo then(),o parâmetro res recebe o retorno da funçao anterios
    console.log(responce);
    return responce.json();

})
    //Para selecionar o usuario[0] traz na ondem o usuario escolido
    .then(data => {
        console.log(data)
        //Usamos para inteirar (percorrer o array), o map()
        //que é um método para percorrer todo o array como um for
        data.map(user => {
            console.log(user)
            console.log(`Nome: ${user.name}, email: ${user.email}`)
        })
    })
    //Promisse que trata o erro é método catch()
    .catch(error => {
        console.log(`Deu erro na busca ${error}`)
    })
// console.log(responce)
const addPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method:'POST',
    body: JSON.stringify({
        userId: 3,
        title : 'Titulo teste',
        body: 'Eu fui inserido'
    }),
    headers:{
        'Content-type': 'application/json; charset =UTF-8',
    },
    
    })
    .then(responce => responce.json())
    .then(data => console.log(data))

}
addPost();