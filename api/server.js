const express = require("express");
Users = require('../accounts/accHook')

const server = express()

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api_Is: "good to go." });
  });



server.get('/users', (req,res)=>{
    Users.getUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json(error)
    })
  })  
  
  server.get('/users/:id', (req,res)=>{
  
      Users.getUsers(parseInt(req.params.id))
      .then(user=>{
          res.status(200).json(user)
      })
      .catch(err=>{
          res.status(500).json({message:"Cannot find that user"})
      })
  })
  
  server.delete('/users/:id', (req,res)=>{
      Users.del_(parseInt(req.params.id))
      .then(deleted=>{         
            res.status(204).json({message:"deleted..."})       
      })
      .catch(err=>{
          res.status(500).json({err:err,msg:'cannot delete at this time'})
      })
  })

module.exports = server;