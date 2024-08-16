const express = require('express');
const router = new express.Router();

router.get('/',(req, res, next) => {
    res.status(200).send(
        {
            "nome":"Guilherme Fiochi"
        }
    )
});

router.get('/privada', (req, res) => {
    const token = req.headers['authorization'];
    if(!token || token != 'minhaSenha'){
        return res.status(401).send('Sem autorização!');
    }
    return res.send('Acessado').status(200);
})

const tokenExemplos = {
    'tokenAdmin': {role: 'admin'},
    'tokenUser': {role:'user'},
    'tokenConvidado': {role: 'guest'}
}

router.get('/admin', (req, res)=> {
    const token = req.headers['authorization'];

    if(!token) {
        res.status(401).send("Sem autorização");
    }

    const user = tokenExemplos[token];
    if(!user){
        res.status(401).send("Sem autorização");
    }

    if(user.role != 'admin'){
        return res.status(403).send('Não tem permissão para acessar aqui');
    }

    return res.send('acesso liberado').status(200);
})

module.exports = router; 
