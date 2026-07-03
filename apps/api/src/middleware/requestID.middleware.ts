import { requestId } from "hono/request-id";
import type { RequestIdOptions } from "node_modules/hono/dist/types/middleware/request-id/request-id.js";

var options: RequestIdOptions = {}

export const requestIDMiddleware = requestId(options);