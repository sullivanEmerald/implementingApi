const { json } = require('body-parser')
const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app =  express()

const rappers = {
    '21 savage' : {
        'age' : '29',
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    }

}

// BUILDING A LISTEINIG PORT
const PORT = process.env.PORT || 8000

// FETCHING FILES WITH GET
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/css/style.css', (req, res) => {

    res.sendFile(__dirname + '/css/style.css')
})

app.get('/api/:rapperName', (req, res) => {
    let rappeName = req.params.rapperName.toLowerCase()
    if(rappers[rappeName]){
        res.json(rappers[rappeName])
    }else{
        res.json(rappeName['dylan'])
    }

    
})

// BUILDING AN API

// DEPLOYING PORT FOR LISTENINIG
app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`)
})