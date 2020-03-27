const express = require("express")

Users = require('./accHook')

const router = express.Router()



router.get('/', (req,res)=>{
  Users.getUsers()
  .then(users=>{
      res.status(200).json({users})
  })
  .catch(err=>{
      res.status(500).json({error})
  })
})



router.get('/:id', (req,res)=>{

    Users.getUsers(parseInt(req.params.id))
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(500).json({message:"Cannot find that user"})
    })
})


router.delete('/:id', (req,res)=>{
    Users.del_(parseInt(req.params.id))
    .then(deleted=>{
        res.status(204).json({message:"deleted...."})
    })
    .catch(err=>{
        res.status(404).json({err})
    })
})


module.exports = router;