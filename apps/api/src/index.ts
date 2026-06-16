import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { test, type Test } from '@kallisto/shared/test'


const app = new Hono()

var temp: Test = {
  name: '',
  age: 0
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
  test(temp);
})
