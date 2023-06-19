import dotenv from 'dotenv'

dotenv.config({
  path: 'env.config'
})

const entorno = process.env

// console.log({
//   entorno
// })

export default entorno

export const variableEntorno = entorno.NODE_ENV || 'development'