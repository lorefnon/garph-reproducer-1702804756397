import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema-wiring.js'

const app = new Hono()

const yoga = createYoga({ schema })

app.use('/graphql', async (context) =>
  yoga.handle({
    request: context.req.raw
  }, {})
)

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})
