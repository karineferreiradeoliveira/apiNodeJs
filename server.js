
//" "   ('')

// ATENÇÃO: rodar comando  npm run devStart para ligar servidor
const axios = require ('axios')
const express = require ('express')
const app = express ()


//rotas - Ir para endereco .html
//app.get('/', (req, res) => {
 //   res.sendFile(__dirname + '/index.html' )
//})

//rotas - caminhos para o server ir 
app.get('/home', (req, res) => {
   res.send(" <h1> Olá mundo, se inscreva no canal </h1> ")//vai escrever no html
})

//rota com resposta no formato json
app.get('/sobre', (req, res) => {
    res.json({
        version: " 1.2.5 " ,
        author:"Karine"  ,
        user:123456,
        userLastWeek:45677

    })

})

app.get('/place', async(req, res) => {

    try {
        const {data} = await axios  ('https://jsonplaceholder.typicode.com/users')
       return res.json(data [
            2
        ]
        )

    } catch (error) {
        console.error(error)
        
    }

  

})

app.listen(3001)// porta que a app está ouvindo pode ser qualquer numero - endereço que vai abrir essa app. localhost:3001