import { Hono } from "hono";
import { languageMiddleware } from "./middleware/language.middleware.js";
import type { HonoOptions } from "hono/hono-base";
import { requestIDMiddleware } from "./middleware/requestID.middleware.js";
import test from './routes/test.route.js';

type env = {}

const appOptions: HonoOptions<env> = {}

const app = new Hono<env>(appOptions)

// --- Registering Middlewares
app.use(languageMiddleware);
app.use(requestIDMiddleware);

app.route('/test', test);

export default app;