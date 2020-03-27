const server = require('./server')
const request = require("supertest")



    describe('get /', function(){

        it(' return 200', async function(){
            const response = await request(server).get('/users')            
                expect(response.status).toBe(200)            
        })

        it ('using a promise it should return 200', function(){
            return request(server)
            .get('/users')
            .then(res=>{
                expect(res.status).toBe(200);
            })
        })

        it(' return json format', function(){
            return request(server)
            .get("/users")
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })
    })

    describe('delete', function(){
            
        it (" return 204 ok", async function(){
            const res = await request(server).delete("/users/:id")
            expect(res.status).toBe(204)
        })

        it(" return 500", async function(){
            const res =  await request(server)
            .delete("/users/:id")
            expect(res.body).toEqual({}) 
                      
        })
    })
