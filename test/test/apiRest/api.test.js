/*
import assert from 'node:assert'
import supertest from 'supertest'
import { usuariosDaoMongoose } from '../../src/daos/usuarios.dao.mongoose.js'

const httpClient= supertest('http://localhost:8080')

//este fragmento de codigo lo utilizo dentro de los testeos, el .post es el metodo que quiero testear, y al final puedo 
// const response = await httpClient.post('/api/mascotas')


describe.only('api rest', ()=>{
    //recordar que tenemos que estar trabajando en la BASE DE DATOS TESTEOS
    describe('/api/usuarios', () => {
        beforeEach(async ()=>{
            await usuariosDaoMongoose.deleteMany({})
        })
    describe('POST', () => {
      describe('cuando envio una peticion con datos correctos', ()=>{
        it('crea usuario, devuelve 201, devuelve el dto de nombre completo y mail', async () => {

            const datosUsuario={
                nombre:'pepe',
                apellido:'loco',
                email:'pepe@loco.com',
                password:'abc123'
            }            
            // @ts-ignore
            const response = (await httpClient.post('/api/usuarios')).send(datosUsuario)
            assert.strictEqual(response.statusCode, 201) //compara que los 2 valores que paso sean iguales
            assert.deepStrictEqual(response.body, {
                nombreCompleto:`${response.body.nombre} ${response.body.apellido}`,
                email:response.body.email
            }) //compara objetos por campos

            console.log(response.body)
            console.log(response.status)
          })
      })
    })
  })
})
*/