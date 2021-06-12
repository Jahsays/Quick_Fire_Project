const express = require('express')
const router = express.Router()
const Student = require('../models/student')


// create a post request
router.post('/', async(req, res) => {
    const student = new Student ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        class: req.body.class  
    })
    try{
       const a1 = await student.save()
       res.status(201).json({student: a1})
    }catch(err){
        res.send('Error ' + err)
    }
})

// create a patch request to edit a single data point
router.patch('/:id', async(req, res) => {
    try{
          const student = await Student.findById(req.params.id) 
          student.dob = req.body.dob
          const a1 = student.save()
          res.json(student)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router