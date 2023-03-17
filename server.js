const express = require('express')
const app = express()
const PORT = 8000

let rappers = {
    '21 savage':{
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    'chance the rapper':{
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown':{
        'birthName': 'Unknown',
        'birthLocation': 'Unknown',
        'age': 0
    }
    
}

app.get('/', (req,res) =>{
    res.sendFile(__dirname +    '/index.html')
})

app.get('/api/:name', (req,res) =>{
    const rapperName = req.params.name.toLowerCase()
    
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () =>{
    console.log(`The serer is now running on port ${PORT}. Better go catch it !`)
})