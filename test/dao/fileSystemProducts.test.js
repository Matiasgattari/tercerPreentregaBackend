/*

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