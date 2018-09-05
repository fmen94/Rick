const express = require('express')
const router = express.Router()
const Registro = require('../models/Registro')

router.post('/new', (req,res,next)=>{
  console.log("entramos al new");
  
  Registro.create(req.body)
  .then(tarea=>{
      return res.status(200).json(tarea);
  })
  .catch(err => {
      return res.status(500).json(err);
  });

})


module.exports = router;
