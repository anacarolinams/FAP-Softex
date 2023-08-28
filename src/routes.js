const express = require('express');
const router = express.Router();


router.get('/exemplo', (request, response) => {
    response.json({ Message: 'Exemplo'});
});


module.exports = router;