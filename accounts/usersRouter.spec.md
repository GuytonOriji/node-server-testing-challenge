
const server = require("../server")
const request = require("supertest")

describe('users',()=>{
    it('get /', async()=>{
       const response = await request(server).get('/users')
       expect(res.status).toBe(200)  //make it fail by 204 first
       console.log(res.body)
    })
}) 



//------------
// const express = require("express")
// const router = express.Router()

// describe('server',function(){
//     describe('Get /users', function(){

//         it('should return 200 ok (asynce way)', async function(){
//             const response = await request(router).get("/users");
//             expect(response.status).toBe(200)
//         })

//         it ('shuld return 200 ok (using promise)', function(){
//             return request(server)
//             .get('/users')
//             .then(response=>{
//                 expect(response.status).toBe(200);
//             })
//         })

//     })

// })


// module.exports = router;


