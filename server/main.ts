import 'jsr:@std/dotenv/load';
import { Hono } from 'jsr:@hono/hono';
import { cors } from 'jsr:@hono/hono/cors';
import { logger } from 'jsr:@hono/hono/logger';
import routes from './routes/index.ts';

const app = new Hono();

app.use('*', cors());
app.use('*', logger());

app.route('/api', routes);

Deno.serve(app.fetch);
