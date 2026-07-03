import { Hono } from "hono"

const app = new Hono()

app.get('/', (c) => c.json('list tests'))
app.post('/', (c) => c.json('create a test', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app;