const axios = require('axios');
const request = require('supertest');
const  app  = require('../server')
const Institut  = require('../models/Institut');
const connection = require('../database/conexao');
const repository = require('../database/repositories/repository');
const crypto = require('crypto');
const { beforeFindAfterExpandIncludeAll } = require('../models/Institut');

const generate = function() {
    return crypto.randomBytes(10).toString('hex');
}

test('Should get instituts', async function() {
    afterAll(() => {
        connection.close();
    });

    const response = await request.agent(app)
    .post("/instituts")
    .send(        
            {
                "name": "Inst. test novo",
                "email": "testenovo9@gmail.com",
                "cnpj": "88807770555500",
                "residential_phone": "222266799",
                "celphone_1": "1199754555",
                "celphone_2": "7777888888",
                "zip_code": "22-350-458", 
                 "city": "Rio de janeiro", 
                 "street": "Almirante vasconcelos", 
                 "number": 4095, 
                 "complement": "111"
            }
            
        );
        expect(response.ok).toBeTruthy();
        connection.close();
    // .send({
    //     name: generate(),
    //     email: generate() + "@gmail.com",
    //     cnpj: generate().parseInt()
    // });


    //const institut = await repository.store(Institut.init(connection),{name: "leoteste",email:"leotest@gmail.com",cnpj: 9999999});
  
    // const response = await axios({
    //     url: 'http://localhost:3000/instituts',
    //     method: 'get'
    // });
});