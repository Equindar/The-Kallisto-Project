// Composition Root

import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { requestIDMiddleware } from './middleware/requestID.middleware.js'
import responseTimeMiddleware from './middleware/custom.middleware.js'
import test from './routes/test.route.js';
import live from './routes/live.route.js';


const app = new Hono()

app.use(requestIDMiddleware);
app.use(responseTimeMiddleware);

app.route('/test', test);
app.route('/live', live);


//app.use('/test', appRouter);
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
})
