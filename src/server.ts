import { Server, IncomingMessage, ServerResponse } from 'http'
import fastify from 'fastify'
import fastifySwagger from 'fastify-oas'

import swaggerConfigs from './configs/swagger'

import testeRoute from './routes/test'

const createServer = (): fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> => {
  const server = fastify({ logger: true })
  /**
   * API Documentation generated by Swagger
   * Available on: baseURL/docs
   */
  server.register(fastifySwagger, swaggerConfigs)
  // Routes
  server.register(testeRoute)
  // Fastify error handler
  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
  })

  return server
}

export default createServer
