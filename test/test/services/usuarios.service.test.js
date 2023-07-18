/*
import mongoose from 'mongoose'
import { DaoMongoose } from '../../src/daos/DaoMongoose.js'
import assert from 'node:assert'
import { Id } from '../../src/models/Id.js'
import { criptografiador } from '../../src/services/criptografia.service.js'
import { mascotasDaoMongoose } from '../../src/daos/mascotas.dao.mongoose.js'
import { usuariosDaoMongoose } from '../../src/daos/usuarios.dao.mongoose.js'

// esquema de pruebas -------------------------------------------------------------------------------------------

const testSchema = new mongoose.Schema({
  property1: { type: String, required: true },
  property2: Number
})
const testModel = mongoose.model('tests', testSchema)


// datos de prueba ----------------------------------------------------------------------------------------------

const testData = {
  property1: 'un nombre',
  property2: 1
}

const testDataIncompleto = {
  property2: 1
}

const ejemploMascota = {
  id: Id.new(),
  nombre: 'un_nombre',
  especie: 'un_especie',
  fechaNacimiento: new Date(),
  foto: 'una_foto'
}

const ejemploUsuario = {
  id: Id.new(),
  nombre: 'un_nombre',
  apellido: 'un_apellido',
  email: 'un_email',
  password: 'un_password',
  rol: 'user',
  mascotas: []
}

// funciones auxiliares para interactuar directamente con la base de datos ----------------------------------------

async function insertDirectlyIntoMongoDb(documentoParaGuardar, coleccion) {
  await mongoose.connection.collection(coleccion).insertOne(documentoParaGuardar)
  delete documentoParaGuardar._id
}

function fetchDirectlyFromMongoDb(criterio, coleccion) {
  return mongoose.connection.collection(coleccion).findOne(criterio, { projection: { _id: 0 } })
}

//-----------------------------------------------------------------------------------------------------------------

before(async () => {
  // esto sucede antes de comenzar la primera prueba
  await mongoose.connect('mongodb://localhost/testadopciones')
})

// beforeEach(async () => {
  //   // await algo.....
  // })
  
  // afterEach(async () => {
    //   // await algo.....
    // })
    
    after(async () => {
      // esto sucede despues de finalizar la última prueba
      await mongoose.connection.dropDatabase() // antes de desconectarme borro la base que usé para las pruebas
      await mongoose.connection.close()
    })
    
    describe('dao mongoose (genérico)', () => {
      
      beforeEach(async () => {
        await mongoose.connection.collection('tests').deleteMany({})
      })
      
      describe('create', () => {
        describe('cuando llamo al create con un objeto con el esquema correspondiente', () => {
          it('devuelve el mismo objeto sin agregarle ningun campo ni métodos', async () => {
            const dao = new DaoMongoose(testModel)
            const pojo = await dao.create(testData)
            assert.ok(!pojo._id, 'no debería tener _id')
            assert.ok(pojo.property1, 'debería tener property1')
            assert.ok(pojo.property2, 'debería tener property2')
      })
    })
    
    describe('cuando llamo al create con un objeto con un esquema distinto al esperado', () => {
      it('lanza un error', async () => {
        const dao = new DaoMongoose(testModel)
        await assert.rejects(
          dao.create(testDataIncompleto),
          mongoose.Error.ValidationError
          )
        })
      })
    })
    
    describe('readMany', () => {
      describe('cuando llamo al readMany con un criterio vacío', () => {
        it('devuelve todos los objetos de la colección sin _id ni métodos', () => {
          // prueba!
        })
      })
    })
  })
  
  describe('servicio de criptografia', () => {
    it('encripta contraseñas correctamente', () => {
      const password = '123abc'
      const passwordHasheado = criptografiador.hashear(password)
      assert.notStrictEqual(passwordHasheado, password) // realiza !== internamente
    })
    it('compara contraseñas hasheadas correctamente', () => {
      const password = '123abc'
      const passwordHasheado = criptografiador.hashear(password)
      assert.ok(criptografiador.comparar(password, passwordHasheado))
    })
  })
  
  describe('servicio de adopcion de mascotas', () => {
    describe('mascotas', () => {
      
      beforeEach(async () => {
      // console.log('borrando mascotas...') // descomentar para ver cuando sucede!
      await mongoose.connection.collection('mascotas').deleteMany({})
    })
    
    describe('daos', async () => {
      describe('al crear una nueva mascota', async () => {
        it('la almacena', async () => {
          
          await mascotasDaoMongoose.create(ejemploMascota)
          
          const registro = await fetchDirectlyFromMongoDb({ id: ejemploMascota.id }, 'mascotas')
          assert.deepStrictEqual(registro, ejemploMascota) // compara si dos objetos tienen los mismos campos y valores internos
        })
      })
      
      describe('al buscar una mascota por su id', async () => {
        it('si existe la encuentra y la devuelve', async () => {
          
          await insertDirectlyIntoMongoDb(ejemploMascota, 'mascotas')
          
          const registro = await mascotasDaoMongoose.readOne({ id: ejemploMascota.id })
          assert.deepStrictEqual(registro, ejemploMascota) // compara si dos objetos tienen los mismos campos y valores internos
        })
        
        it('si no existe lanza un error', async () => {
          await assert.rejects(mascotasDaoMongoose.readOne({ id: 'xxxxxxxxxxxx' }))
        })
      })
    })
  })
  
  describe('usuarios', () => {
    
    beforeEach(async () => {
      // console.log('borrando usuarios...') // descomentar para ver cuando sucede!
      await mongoose.connection.collection('usuarios').deleteMany({})
    })
    
    describe('daos', async () => {
      
      describe('al crear un nuevo usuario', async () => {
        it('lo almacena', async () => {
          await usuariosDaoMongoose.create(ejemploUsuario)
          const registro = await fetchDirectlyFromMongoDb(ejemploUsuario, 'usuarios')
          assert.deepStrictEqual(registro, ejemploUsuario) // compara si dos objetos tienen los mismos campos y valores internos
        })
      })
      
      describe('al buscar un usuario por su id', async () => {
        it('si existe lo encuentra y lo devuelve', async () => {
          await insertDirectlyIntoMongoDb(ejemploUsuario, 'usuarios')
          const registro = await usuariosDaoMongoose.readOne({ id: ejemploUsuario.id })
          assert.deepStrictEqual(registro, ejemploUsuario)
        })
        
        it('si no existe lanza un error', async () => {
          await assert.rejects(usuariosDaoMongoose.readOne({ id: 'xxxxxxxxxxxx' }))
        })
      })
    })
  })
})

*/