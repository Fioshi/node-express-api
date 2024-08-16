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

module.exports = router; 
