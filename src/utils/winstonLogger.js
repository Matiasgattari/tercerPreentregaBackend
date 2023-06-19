import { variableEntorno } from '../config/entorno.js'
import winston from 'winston'

// const levelsWinston = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
// }

const loggerDesarrollo = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "verbose",
    }),
    new winston.transports.File({
        level: "debug",
        filename: 'desarrollo.log'
      })

  ]
})

const loggerProduccion = winston.createLogger({
   transports: [
    new winston.transports.File({
      level: "http",
      filename: 'eventos.log'
    }),
    new winston.transports.Console({
        level: "info"
      })
  ]
})

export let winstonLogger
if (variableEntorno === 'production') {
  winstonLogger = loggerProduccion
} else {
  winstonLogger = loggerDesarrollo
}